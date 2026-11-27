'use client';

import { createContext, useContext } from 'react';

export type AuthUser = {
  uid: string;
  email: string | null;
};

export type AuthContextValue = {
  user: AuthUser | null;
  loading: boolean;
  getIdToken: () => Promise<string | null>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth は FirebaseAuthProvider の内側で使ってください');
  }
  return context;
}
