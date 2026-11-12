import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next Salon 2026',
  description: '',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='ja'>
      <body>{children}</body>
    </html>
  );
}
