'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut as firebaseSignOut,
} from 'firebase/auth';
import { auth } from '@/lib/firebase/client';
import {
  AuthContext,
  type AuthContextValue,
  type AuthUser,
} from '@/contexts/AuthContext';

export default function FirebaseAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(
        firebaseUser
          ? { uid: firebaseUser.uid, email: firebaseUser.email }
          : null,
      );
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      loading,
      getIdToken: async () =>
        auth.currentUser ? auth.currentUser.getIdToken() : null,
      signInWithGoogle: async () => {
        await signInWithPopup(auth, new GoogleAuthProvider());
      },
      signOut: () => firebaseSignOut(auth),
    }),
    [user, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
