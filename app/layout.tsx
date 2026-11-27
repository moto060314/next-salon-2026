import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import FirebaseAuthProvider from '@/providers/FirebaseAuthProvider';

export const metadata: Metadata = {
  title: 'Next Salon',
  description: '美容院予約システム',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body>
        <FirebaseAuthProvider>
          <Header />
          <main className='mx-auto max-w-7xl px-8 py-4'>{children}</main>
        </FirebaseAuthProvider>
      </body>
    </html>
  );
}
