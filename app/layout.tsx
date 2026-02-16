import './globals.css';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import { CartProvider } from '@/contexts/CartContext';

export const metadata: Metadata = {
  title: 'INKGOOD. - Digital Grunge Culture',
  description: 'Culture. Fashion. Chaos. Creative tools you can make your own.',
  openGraph: {
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navigation />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
