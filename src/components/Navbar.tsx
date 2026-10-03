'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ShoppingBag, Sparkles, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { InstagramIcon } from './Icons';

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const galleryActive = pathname === '/' || pathname.startsWith('/obras/');
  const linkClass = (active: boolean) =>
    `py-1 text-xs font-medium uppercase tracking-[0.2em] transition-colors ${active ? 'border-b border-[#1A1A1A] text-[#1A1A1A]' : 'text-stone-600 hover:text-[#1A1A1A]'}`;

  return (
    <>
      <div className="flex items-center justify-center gap-2 border-b border-stone-800 bg-[#1A1A1A] px-4 py-2 text-center text-[11px] font-light tracking-wider text-[#F3EFEA] sm:text-xs">
        <Sparkles size={12} className="text-[#C4859A]" />
        <span>
          Frete cortesia para todo o Brasil em pedidos acima de R$ 250 • Obras
          Originais & Prints Fine Art
        </span>
        <span className="hidden text-stone-500 md:inline">|</span>
        <span className="hidden text-stone-300 md:inline">
          Produzido à mão no ateliê
        </span>
      </div>

      <header className="sticky top-0 z-40 border-b border-[#EAE6E1] bg-[#FAF8F5]/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <nav
              aria-label="Navegação principal"
              className="hidden items-center space-x-8 md:flex"
            >
              <Link href="/" className={linkClass(galleryActive)}>
                Galeria / Loja
              </Link>
              <Link
                href="/encomendas"
                className={linkClass(pathname === '/encomendas')}
              >
                Encomendas
              </Link>
              <Link href="/sobre" className={linkClass(pathname === '/sobre')}>
                Sobre Mim
              </Link>
            </nav>

            <Link
              href="/"
              className="flex flex-col items-center text-center transition-opacity hover:opacity-80"
            >
              <span className="font-serif text-2xl font-light tracking-[0.12em] text-[#1A1A1A] sm:text-3xl">
                meu.eeu
              </span>
              <span className="mt-0.5 text-[9px] font-light uppercase tracking-[0.3em] text-stone-600">
                Maria • Fine Art & Aquarela
              </span>
            </Link>

            <div className="flex items-center space-x-4 sm:space-x-6">
              <a
                href="https://www.instagram.com/meu.eeu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da artista"
                className="hidden items-center gap-1.5 rounded-full border border-[#E2DDD8] px-3 py-1.5 text-xs font-medium text-stone-600 transition-colors hover:border-[#6B4E8C] hover:text-[#6B4E8C] sm:flex"
              >
                <InstagramIcon size={14} />
                <span className="tracking-wide">@meu.eeu</span>
              </a>

              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="group relative flex items-center gap-2 p-2 text-stone-800 transition-colors hover:text-[#1A1A1A]"
                aria-label={`Abrir carrinho, ${totalItems} itens`}
              >
                <span className="relative">
                  <ShoppingBag size={21} strokeWidth={1.4} />
                  {totalItems > 0 && (
                    <span className="absolute -right-2 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#1A1A1A] text-[10px] font-bold text-white animate-fade-in">
                      {totalItems}
                    </span>
                  )}
                </span>
                <span className="hidden text-xs uppercase tracking-wider text-stone-600 group-hover:text-black lg:inline">
                  Carrinho ({totalItems})
                </span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen((open) => !open)}
                className="p-2 text-stone-800 hover:text-black md:hidden"
                aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav
            aria-label="Navegação móvel"
            className="animate-fade-in space-y-4 border-b border-[#EAE6E1] bg-[#FAF8F5] px-6 py-6 md:hidden"
          >
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium uppercase tracking-[0.2em] text-stone-800"
            >
              Galeria / Loja
            </Link>
            <Link
              href="/?categoria=prints"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 pl-4 text-xs uppercase tracking-[0.2em] text-stone-600"
            >
              ↳ Prints Fine Art
            </Link>
            <Link
              href="/?categoria=originais"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 pl-4 text-xs uppercase tracking-[0.2em] text-stone-600"
            >
              ↳ Obras Originais
            </Link>
            <Link
              href="/encomendas"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium uppercase tracking-[0.2em] text-stone-800"
            >
              Encomendas Personalizadas
            </Link>
            <Link
              href="/sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium uppercase tracking-[0.2em] text-stone-800"
            >
              Sobre Mim & Processo
            </Link>
            <a
              href="https://www.instagram.com/meu.eeu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-t border-[#EAE6E1] pt-4 text-xs font-medium text-[#6B4E8C]"
            >
              <InstagramIcon size={16} />
              Seguir @meu.eeu no Instagram
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
