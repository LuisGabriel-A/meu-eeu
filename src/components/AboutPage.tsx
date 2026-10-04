'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Heart,
  MessageCircle,
  Play,
  ChevronDown,
  Palette,
  Droplet,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { InstagramIcon } from './Icons';
import { FAQ_ITEMS, INSTAGRAM_POSTS } from '../data/artworks';

export default function AboutPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-20 py-8 sm:py-14">
      {/* 1. ARTIST BIO & STUDIO HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Studio & Portrait Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative bg-[#FAF8F5] p-4 sm:p-6 border border-[#E2DDD8] shadow-fine-art">
              <div className="relative aspect-4/5 overflow-hidden bg-stone-200">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
                  alt="Maria — Artista do Ateliê meu.eeu"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Floating studio caption */}
              <div className="absolute -bottom-5 -right-5 bg-white border border-[#E2DDD8] p-4 shadow-lg max-w-xs hidden sm:block">
                <span className="font-serif text-sm italic text-stone-900 block">
                  “Pintar é desacelerar o olhar para enxergar a poesia invisível
                  das coisas simples.”
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#6B4E8C] font-semibold mt-1 block">
                  — Maria • @meu.eeu
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Artistic Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#6B4E8C] font-semibold block mb-2">
                Conheça a Artista
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-light text-[#1A1A1A] leading-tight">
                Oi, sou a Maria.
                <br />
                <span className="italic text-[#6B4E8C]">
                  Arte que vem de dentro.
                </span>
              </h1>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
              <p>
                Bem-vindo ao meu espaço criativo. O <strong>@meu.eeu</strong>{' '}
                nasceu do desejo profundo de transformar a efemeridade dos
                momentos, a beleza das fachadas coloniais, o movimento das águas
                e os elementos botânicos em obras que acolhem e aquecem lares.
              </p>
              <p>
                Trabalho primariamente com{' '}
                <strong>Aquarela sobre Papel de Algodão</strong> e{' '}
                <strong>
                  Acrílica Texturizada sobre Telas em Grande Formato
                </strong>
                . Acredito na fluidez da água que nunca se repete, nas misturas
                orgânicas de pigmentos minerais e na paciência que a arte manual
                exige.
              </p>
              <p>
                Cada pintura autoral e cada encomenda personalizada é pensada
                como um elo afetivo: um pedaço de história eternizado para
                atravessar gerações.
              </p>
            </div>

            {/* Quick Pillars */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#EAE6E1]">
              <div className="flex items-start gap-2.5">
                <Droplet size={18} className="text-[#6B4E8C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-stone-900">
                    Pigmentos Puros
                  </h4>
                  <p className="text-[11px] text-stone-500 font-light">
                    Tintas de nível profissional com alta permanência à luz.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Palette size={18} className="text-[#C4859A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-stone-900">
                    100% Algodão
                  </h4>
                  <p className="text-[11px] text-stone-500 font-light">
                    Papéis franceses e ingleses livres de ácido (Acid-Free).
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://www.instagram.com/meu.eeu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest bg-[#1A1A1A] hover:bg-stone-800 text-white px-6 py-3.5 transition-colors font-medium"
              >
                <InstagramIcon size={15} />
                <span>Acompanhar Ateliê no Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CREATIVE PROCESS & MATERIALS HIGHLIGHT */}
      <section className="bg-[#FAF8F5] border-y border-[#EAE6E1] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-[#6B4E8C] font-semibold">
              Rigor Técnico & Sensibilidade
            </span>
            <h2 className="font-serif text-3xl font-light text-[#1A1A1A]">
              O Processo no Ateliê
            </h2>
            <p className="text-xs text-stone-500 font-light">
              Do esboço inicial à embalagem lacrada, cada etapa respeita o tempo
              da arte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-[#EAE6E1] space-y-3">
              <div className="w-10 h-10 bg-[#FAF8F5] flex items-center justify-center text-[#6B4E8C]">
                <Palette size={20} />
              </div>
              <h3 className="font-serif text-xl font-normal text-stone-900">
                1. Seleção de Pigmentos
              </h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Utilizo tintas de marcas consagradas como Schmincke Horadam e
                Daniel Smith, ricas em pigmentos minerais naturais que garantem
                granulações únicas e brilho perene.
              </p>
            </div>

            <div className="bg-white p-8 border border-[#EAE6E1] space-y-3">
              <div className="w-10 h-10 bg-[#FAF8F5] flex items-center justify-center text-[#C4859A]">
                <Droplet size={20} />
              </div>
              <h3 className="font-serif text-xl font-normal text-stone-900">
                2. Suporte de Museu
              </h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Papéis franceses Arches e ingleses Saunders Waterford de 300g/m²
                produzidos em forma redonda (cylinder mould), garantindo
                estabilidade dimensional absoluta.
              </p>
            </div>

            <div className="bg-white p-8 border border-[#EAE6E1] space-y-3">
              <div className="w-10 h-10 bg-[#FAF8F5] flex items-center justify-center text-emerald-700">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-serif text-xl font-normal text-stone-900">
                3. Embalagem Cuidadosa
              </h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Cada pedido é envolvido em papel seda livre de ácido,
                acompanhado de certificado de autenticidade assinado, cartão de
                agradecimento e proteção rígida contra impactos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ ACCORDION SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <span className="text-[10px] uppercase tracking-widest text-[#6B4E8C] font-semibold">
            Dúvidas Frequentes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#1A1A1A]">
            Perguntas & Cuidados
          </h2>
          <p className="text-xs text-stone-500 font-light">
            Informações sobre preservação, envio e encomendas personalizadas.
          </p>
        </div>

        <div className="divide-y divide-[#EAE6E1] border-y border-[#EAE6E1]">
          {FAQ_ITEMS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div key={index} className="py-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left group py-2"
                >
                  <span className="font-serif text-base sm:text-lg font-normal text-stone-900 group-hover:text-[#6B4E8C] transition-colors pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-stone-400 group-hover:text-black transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-black' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pt-2 pb-4 text-xs sm:text-sm text-stone-600 font-light leading-relaxed animate-fade-in pr-6">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. INSTAGRAM FEED AESTHETIC GRID (Exact match to Screenshot 3) */}
      <section className="border-t border-[#EAE6E1] pt-14 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 space-y-2">
            <h2 className="font-serif text-2xl sm:text-4xl font-light text-stone-900 tracking-tight">
              Acompanhe a Maria no Instagram!
            </h2>
            <a
              href="https://www.instagram.com/meu.eeu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#6B4E8C] hover:text-black transition-colors font-medium border-b border-[#6B4E8C]"
            >
              <span>@meu.eeu</span>
              <ExternalLink size={12} />
            </a>
          </div>

          {/* Instagram Posts Grid (2 rows x 4 columns) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {INSTAGRAM_POSTS.map((post) => (
              <a
                key={post.id}
                href="https://www.instagram.com/meu.eeu"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square bg-stone-100 overflow-hidden block"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Video Play badge if video */}
                {post.isVideo && (
                  <div className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full bg-black/50 backdrop-blur-xs flex items-center justify-center text-white">
                    <Play size={12} fill="white" />
                  </div>
                )}

                {/* Hover Overlay with text & likes */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-white">
                  <p className="text-[11px] font-serif italic text-stone-200 line-clamp-3">
                    “{post.text}”
                  </p>

                  <div className="flex items-center justify-between text-xs pt-2 border-t border-white/20">
                    <div className="flex items-center gap-1">
                      <Heart
                        size={14}
                        fill="currentColor"
                        className="text-[#C4859A]"
                      />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle size={14} />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
