'use client';

import { useAuth } from '@/contexts/AuthContext';

export default function AccountInfo() {
  const { user } = useAuth();
  if (!user) return null;

  return (
    <section className='rounded-lg border border-slate-200 bg-white p-6'>
      <h3 className='text-lg font-semibold text-slate-950'>アカウント</h3>
      <dl className='mt-3 grid gap-1 text-sm text-slate-600'>
        <div>メールアドレス: {user.email}</div>
        <div>ユーザー ID: {user.uid}</div>
      </dl>
    </section>
  );
}
