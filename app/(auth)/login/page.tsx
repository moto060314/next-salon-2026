'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SectionHeading from '@/components/SectionHeading';
import ui from '@/components/UI';
import { useAuth } from '@/contexts/AuthContext';

export default function LoginPage() {
  const router = useRouter();
  const { signInWithGoogle } = useAuth();
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleClick = async () => {
    setIsPending(true);
    setIsError(false);

    try {
      await signInWithGoogle();
      router.push('/mypage');
    } catch {
      setIsError(true);
      setIsPending(false);
    }
  };

  return (
    <div className='mx-auto max-w-md'>
      <SectionHeading
        eyebrow='Login'
        title='ログイン'
        description='Google アカウントでログインします。初めての方は、ログインと同時に登録されます。'
      />

      <div className='mt-8 flex flex-col gap-4 text-sm'>
        {isError && (
          <p className='text-red-600'>
            ログインに失敗しました。もう一度お試しください。
          </p>
        )}

        <button
          type='button'
          onClick={handleClick}
          disabled={isPending}
          className={ui.primaryButton}
        >
          {isPending ? 'ログイン中...' : 'Google でログイン'}
        </button>
      </div>
    </div>
  );
}
