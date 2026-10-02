import React from 'react';
import { Mail, Heart, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-[#FAF8F5] border-t border-[#EAE6E1] text-stone-600 text-xs font-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

          {/* Col 1: Brand & Statement */}
          <div className="space-y-3 md:col-span-1">
            <span className="font-serif text-2xl text-stone-900 font-light tracking-wide block">
              meu.eeu
            </span>
            <p className="text-[11px] text-stone-500 leading-relaxed max-w-xs">
              Ateliê de Fine Art por Maria. Pinturas originais em aquarela e acrílica e reproduções de alto padrão para trazer serenidade ao seu lar.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/meu.eeu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da artista"
                className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-stone-700 hover:text-black hover:border-black transition-colors"
              >
                <InstagramIcon size={14} />
              </a>
              <a
                href="mailto:contato@meueeu.com.br"
                aria-label="Email de contato"
                className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-stone-700 hover:text-black hover:border-black transition-colors"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-stone-900">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('store', 'all')} className="hover:text-black transition-colors">
                  Galeria Completa
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('store', 'prints')} className="hover:text-black transition-colors">
                  Prints Fine Art (A6 a A3)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('store', 'originais')} className="hover:text-black transition-colors">
                  Obras Originais
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('commissions')} className="hover:text-black transition-colors">
                  Encomendas Personalizadas
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-black transition-colors">
                  Sobre a Artista & FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Studio & Techniques */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-stone-900">
              Ateliê & Cuidados
            </h4>
            <ul className="space-y-2 text-xs text-stone-500">
              <li>Papel 100% Algodão Hahnemühle & Arches</li>
              <li>Tintas Pigmentadas Daniel Smith & Schmincke</li>
              <li>Certificado de Autenticidade Incluso</li>
              <li>Embalagem Rígida Anti-Dobra</li>
              <li>Envio Seguro para todo o Brasil</li>
            </ul>
          </div>

          {/* Col 4: Newsletter / Updates */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-stone-900">
              Novidades do Ateliê
            </h4>
            <p className="text-[11px] text-stone-500 leading-relaxed">
              Receba avisos exclusivos sobre lançamentos de séries originais e aberturas de agenda de encomendas.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Obrigado por assinar as novidades do ateliê!'); }} className="space-y-2">
              <input
                type="email"
                required
                placeholder="Seu e-mail principal"
                className="w-full bg-white border border-[#D5CBC0] px-3 py-2 text-xs outline-none focus:border-black"
              />
              <button
                type="submit"
                className="w-full py-2 bg-[#1A1A1A] hover:bg-stone-800 text-white text-[11px] uppercase tracking-wider font-medium transition-colors"
              >
                Cadastrar
              </button>
            </form>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-[#EAE6E1] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400">
          <span>
            © {new Date().getFullYear()} meu.eeu — Maria Fine Art. Todos os direitos reservados.
          </span>
          <span className="flex items-center gap-1">
            Feito com afeto para apreciadores de arte & aquarelas.
          </span>
        </div>
      </div>
    </footer>
  );
}
