'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

export default function Header() {
  const { user, loading, signOut } = useAuth();
  const linkClass = 'text-sm rounded-full px-4 py-2 hover:bg-slate-500/10';

  return (
    <header className='sticky bg-white top-0 z-20 border-b'>
      <div className='mx-auto flex justify-start px-8 py-4'>
        <Link href='/'>
          <p className='text-2xl font-bold text-slate-900'>Next Salon</p>
        </Link>

        <nav className='flex items-center gap-4 ml-8'>
          <Link href='/shop' className={linkClass}>
            店舗
          </Link>
          <Link href='/booking' className={linkClass}>
            予約
          </Link>
          <Link href='/mypage' className={linkClass}>
            マイページ
          </Link>
          <Link href='/admin' className={linkClass}>
            管理者
          </Link>
        </nav>

        <div className='ml-auto flex items-center gap-2'>
          {loading ? null : user ? (
            <button type='button' onClick={signOut} className={linkClass}>
              ログアウト
            </button>
          ) : (
            <Link href='/login' className={linkClass}>
              ログイン
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
