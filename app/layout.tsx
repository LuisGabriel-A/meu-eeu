import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { CartProvider } from '@/context/CartContext';
import './globals.css';

export const metadata: Metadata = {
  title: 'meu.eeu — Fine Art & Aquarelas por Maria',
  description:
    'Galeria digital de obras originais, prints Fine Art e encomendas personalizadas do ateliê meu.eeu.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎨</text></svg>"
        />
      </head>
      <body className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] antialiased selection:bg-[#E2DDD8] selection:text-[#1A1A1A]">
        <CartProvider>
          <div className="flex min-h-screen flex-col justify-between">
            <Navbar />
            <main className="flex-1">{children}</main>
            <CartDrawer />
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
