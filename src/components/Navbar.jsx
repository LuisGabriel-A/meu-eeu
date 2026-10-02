import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Search, Heart, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { useCart } from '../context/CartContext';

export default function Navbar({ currentView, setCurrentView, onSelectCategory }) {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view, category = null) => {
    setCurrentView(view);
    if (category && onSelectCategory) {
      onSelectCategory(category);
    }
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="bg-[#1A1A1A] text-[#F3EFEA] text-[11px] sm:text-xs py-2 px-4 text-center font-light tracking-wider flex items-center justify-center gap-2 border-b border-stone-800">
        <Sparkles size={12} className="text-[#C4859A]" />
        <span>Frete cortesia para todo o Brasil em pedidos acima de R$ 250 • Obras Originais & Prints Fine Art</span>
        <span className="hidden md:inline text-stone-500">|</span>
        <span className="hidden md:inline text-stone-300">Produzido à mão no ateliê</span>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE6E1] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Left Nav links (Desktop) */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => handleNavClick('store', 'all')}
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors py-1 ${
                  currentView === 'store' || currentView === 'product'
                    ? 'text-[#1A1A1A] border-b border-[#1A1A1A]'
                    : 'text-stone-600 hover:text-[#1A1A1A]'
                }`}
              >
                Galeria / Loja
              </button>

              <button
                onClick={() => handleNavClick('commissions')}
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors py-1 ${
                  currentView === 'commissions'
                    ? 'text-[#1A1A1A] border-b border-[#1A1A1A]'
                    : 'text-stone-600 hover:text-[#1A1A1A]'
                }`}
              >
                Encomendas
              </button>

              <button
                onClick={() => handleNavClick('about')}
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors py-1 ${
                  currentView === 'about'
                    ? 'text-[#1A1A1A] border-b border-[#1A1A1A]'
                    : 'text-stone-600 hover:text-[#1A1A1A]'
                }`}
              >
                Sobre Mim
              </button>
            </nav>

            {/* Center Logo / Artist Name */}
            <div className="flex flex-col items-center cursor-pointer" onClick={() => handleNavClick('store', 'all')}>
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.12em] font-light text-[#1A1A1A] hover:opacity-80 transition-opacity">
                meu.eeu
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-stone-600 font-light mt-0.5">
                Maria • Fine Art & Aquarela
              </span>
            </div>

            {/* Right Action Icons */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              <a
                href="https://www.instagram.com/meu.eeu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da artista"
                className="hidden sm:flex items-center gap-1.5 text-xs text-stone-600 hover:text-[#6B4E8C] transition-colors font-medium border border-[#E2DDD8] px-3 py-1.5 rounded-full hover:border-[#6B4E8C]"
              >
                <InstagramIcon size={14} />
                <span className="tracking-wide">@meu.eeu</span>
              </a>

              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-stone-800 hover:text-[#1A1A1A] transition-colors flex items-center gap-2 group"
                aria-label="Abrir Carrinho"
              >
                <div className="relative">
                  <ShoppingBag size={21} strokeWidth={1.4} />
                  {totalItems > 0 && (
                    <span className="absolute -top-1.5 -right-2 bg-[#1A1A1A] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold animate-fade-in">
                      {totalItems}
                    </span>
                  )}
                </div>
                <span className="hidden lg:inline text-xs tracking-wider uppercase text-stone-600 group-hover:text-black">
                  Carrinho ({totalItems})
                </span>
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-stone-800 hover:text-black"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF8F5] border-b border-[#EAE6E1] px-6 py-6 space-y-4 animate-fade-in">
            <button
              onClick={() => handleNavClick('store', 'all')}
              className="block w-full text-left text-sm uppercase tracking-[0.2em] font-medium text-stone-800 hover:text-black py-2"
            >
              Galeria / Loja
            </button>
            <button
              onClick={() => handleNavClick('store', 'prints')}
              className="block w-full text-left text-xs uppercase tracking-[0.2em] text-stone-600 pl-4 py-1"
            >
              ↳ Prints Fine Art
            </button>
            <button
              onClick={() => handleNavClick('store', 'originais')}
              className="block w-full text-left text-xs uppercase tracking-[0.2em] text-stone-600 pl-4 py-1"
            >
              ↳ Obras Originais
            </button>
            <button
              onClick={() => handleNavClick('commissions')}
              className="block w-full text-left text-sm uppercase tracking-[0.2em] font-medium text-stone-800 hover:text-black py-2"
            >
              Encomendas Personalizadas
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="block w-full text-left text-sm uppercase tracking-[0.2em] font-medium text-stone-800 hover:text-black py-2"
            >
              Sobre Mim & Processo
            </button>
            <div className="pt-4 border-t border-[#EAE6E1] flex items-center justify-between">
              <a
                href="https://www.instagram.com/meu.eeu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[#6B4E8C] font-medium"
              >
                <InstagramIcon size={16} />
                <span>Seguir @meu.eeu no Instagram</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
