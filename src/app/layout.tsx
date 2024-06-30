import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/common/ThemeProvider';
import ClientLayout from './ClientLayout';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Products Orders',
  description: 'This is products orders app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ClientLayout>
          <ThemeProvider attribute='class'>{children}</ThemeProvider>
        </ClientLayout>
      </body>
    </html>
  );
}
