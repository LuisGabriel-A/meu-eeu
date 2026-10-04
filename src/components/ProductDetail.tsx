'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  ShoppingBag,
  ShieldCheck,
  Truck,
  Check,
  ChevronDown,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ARTWORKS } from '../data/artworks';
import type { Artwork } from '../types';

export default function ProductDetail({ artwork }: { artwork: Artwork }) {
  const { addToCart } = useCart();

  // Selected size state for prints / variations
  const [selectedSizeId, setSelectedSizeId] = useState(() => {
    return artwork.sizes && artwork.sizes.length > 0
      ? artwork.sizes[0].id
      : 'default';
  });

  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [framePreviewMode, setFramePreviewMode] = useState('matting'); // 'matting', 'frame-wood', 'bare'
  const [openAccordion, setOpenAccordion] = useState<string | null>(
    'dimensions',
  ); // 'dimensions', 'shipping', 'care'
  const [isAddedAnimation, setIsAddedAnimation] = useState(false);

  // VITAL DYNAMIC PRICE COMPUTATION:
  // Find currently selected size object
  const currentSizeObj = artwork.sizes?.find((s) => s.id === selectedSizeId) ||
    artwork.sizes?.[0] || {
      id: 'UNICO',
      name: 'Tamanho Padrão',
      material: artwork.materialInfo,
      price: artwork.basePrice,
    };

  // The dynamic unit price displayed
  const currentUnitPrice = currentSizeObj.price;
  const totalPrice = currentUnitPrice * quantity;

  // Previous and next artworks for navigation
  const currentIndex = ARTWORKS.findIndex((a) => a.id === artwork.id);
  const prevArtwork =
    currentIndex > 0
      ? ARTWORKS[currentIndex - 1]
      : ARTWORKS[ARTWORKS.length - 1];
  const nextArtwork =
    currentIndex < ARTWORKS.length - 1
      ? ARTWORKS[currentIndex + 1]
      : ARTWORKS[0];

  const handleAddToCart = () => {
    addToCart({
      artworkId: artwork.id,
      title: artwork.title,
      image: artwork.images[0],
      sizeId: currentSizeObj.id,
      sizeName: currentSizeObj.name,
      material: currentSizeObj.material,
      unitPrice: currentUnitPrice,
      quantity: quantity,
      type: artwork.type,
    });

    setIsAddedAnimation(true);
    setTimeout(() => setIsAddedAnimation(false), 1500);
  };

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      {/* Breadcrumbs & Prev/Next Bar */}
      <div className="flex items-center justify-between border-b border-[#EAE6E1] pb-4 mb-8 text-xs text-stone-500 font-light">
        <div className="flex items-center space-x-2 truncate">
          <Link
            href="/"
            className="uppercase tracking-wider underline underline-offset-4 transition-colors hover:text-black"
          >
            Início
          </Link>
          <span>/</span>
          <Link
            href="/"
            className="uppercase tracking-wider transition-colors hover:text-black"
          >
            Galeria
          </Link>
          <span>/</span>
          <span className="text-stone-900 font-medium truncate max-w-xs">
            {artwork.title}
          </span>
        </div>

        {/* Prev / Next navigation */}
        <div className="flex items-center space-x-4 pl-4 shrink-0">
          <Link
            href={`/obras/${prevArtwork.id}`}
            className="flex items-center gap-1 text-xs font-medium transition-colors hover:text-black"
            title={prevArtwork.title}
          >
            <ChevronLeft size={14} />
            <span className="hidden sm:inline">Anterior</span>
          </Link>
          <span className="text-stone-300">|</span>
          <Link
            href={`/obras/${nextArtwork.id}`}
            className="flex items-center gap-1 text-xs font-medium transition-colors hover:text-black"
            title={nextArtwork.title}
          >
            <span className="hidden sm:inline">Próximo</span>
            <ChevronRight size={14} />
          </Link>
        </div>
      </div>

      {/* Main Split Layout: Left Image | Right Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* LEFT COLUMN: Gallery Image Presentation */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative bg-[#F3EFEA] border border-[#E2DDD8] p-6 sm:p-12 flex items-center justify-center min-h-[420px] sm:min-h-[540px] shadow-sm transition-all duration-300">
            {/* Frame / Matting Presentation Options */}
            <div
              className={`w-full max-w-lg transition-all duration-500 overflow-hidden ${
                framePreviewMode === 'matting'
                  ? 'bg-white p-6 sm:p-10 shadow-2xl ring-1 ring-black/5'
                  : framePreviewMode === 'frame-wood'
                    ? 'bg-[#3E2723] p-4 sm:p-6 shadow-2xl ring-4 ring-[#2E1C18] border-8 border-[#5D4037]'
                    : 'shadow-lg'
              }`}
            >
              <div className="relative overflow-hidden bg-white aspect-4/5 flex items-center justify-center">
                <Image
                  src={artwork.images[activeImageIndex] || artwork.images[0]}
                  alt={artwork.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-500"
                />
              </div>
            </div>

            {/* Frame mode selector buttons */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-stone-600">
              <span className="hidden sm:inline italic font-serif">
                Visualização no ateliê
              </span>
              <div className="flex items-center gap-1 bg-white/90 backdrop-blur-xs p-1 border border-stone-200 rounded-sm ml-auto">
                <button
                  onClick={() => setFramePreviewMode('matting')}
                  className={`px-2.5 py-1 transition-all ${
                    framePreviewMode === 'matting'
                      ? 'bg-[#1A1A1A] text-white font-medium'
                      : 'hover:text-black'
                  }`}
                >
                  Passe-partout
                </button>
                <button
                  onClick={() => setFramePreviewMode('frame-wood')}
                  className={`px-2.5 py-1 transition-all ${
                    framePreviewMode === 'frame-wood'
                      ? 'bg-[#1A1A1A] text-white font-medium'
                      : 'hover:text-black'
                  }`}
                >
                  Moldura Madeira
                </button>
                <button
                  onClick={() => setFramePreviewMode('bare')}
                  className={`px-2.5 py-1 transition-all ${
                    framePreviewMode === 'bare'
                      ? 'bg-[#1A1A1A] text-white font-medium'
                      : 'hover:text-black'
                  }`}
                >
                  Sem Moldura
                </button>
              </div>
            </div>
          </div>

          {/* Thumbnail Selector */}
          {artwork.images.length > 1 && (
            <div className="flex items-center gap-3 pt-2">
              {artwork.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative h-24 w-20 border transition-all overflow-hidden bg-white ${
                    activeImageIndex === idx
                      ? 'border-[#1A1A1A] ring-1 ring-black scale-102'
                      : 'border-stone-200 opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Vista ${idx + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Artwork Information & Dynamic Purchase Controls */}
        <div className="lg:col-span-5 space-y-6">
          {/* Category & Badge */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#6B4E8C]">
                {artwork.medium}
              </span>
              <span className="text-stone-300">•</span>
              <span className="text-[11px] text-stone-500 uppercase tracking-wider">
                {artwork.year || '2026'}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl sm:text-4xl font-light text-[#1A1A1A] leading-tight">
              {artwork.title}
            </h1>
          </div>

          {/* DYNAMIC PRICE DISPLAY */}
          <div className="py-2 border-y border-[#EAE6E1] flex items-baseline justify-between">
            <div>
              <span className="text-[11px] text-stone-400 uppercase tracking-wider block">
                Valor Total
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#E63946] sm:text-[#1A1A1A]">
                  R$ {totalPrice.toFixed(2)}
                </span>
                {quantity > 1 && (
                  <span className="text-xs text-stone-500 font-light">
                    (R$ {currentUnitPrice.toFixed(2)} cada)
                  </span>
                )}
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-1 rounded font-medium inline-block">
                ✓ Em estoque para envio
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
            {artwork.fullDescription}
          </p>

          {/* DROPDOWN SELECTOR: TAMANHOS & MATERIAIS */}
          {artwork.sizes && artwork.sizes.length > 0 && (
            <div className="space-y-2">
              <label
                htmlFor="dimension-select"
                className="block text-xs uppercase tracking-wider font-semibold text-stone-800"
              >
                Dimensões e Material <span className="text-red-600">*</span>
              </label>

              <div className="relative">
                <select
                  id="dimension-select"
                  value={selectedSizeId}
                  onChange={(e) => setSelectedSizeId(e.target.value)}
                  className="w-full appearance-none bg-white border border-[#1A1A1A] p-3 pr-10 text-xs sm:text-sm text-stone-900 font-light outline-none focus:ring-1 focus:ring-black cursor-pointer rounded-none shadow-2xs"
                >
                  {artwork.sizes.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} — R$ {s.price.toFixed(2)} ({s.material})
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-3.5 top-3.5 pointer-events-none text-stone-600"
                />
              </div>

              {/* Dynamic Note based on selected size */}
              <p className="text-[11px] text-[#6B4E8C] font-medium pt-1">
                ✦ Selecionado: {currentSizeObj.name} em{' '}
                {currentSizeObj.material}. Preço atualizado para R${' '}
                {currentUnitPrice.toFixed(2)}.
              </p>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="space-y-2">
            <label className="block text-xs uppercase tracking-wider font-semibold text-stone-800">
              Quantidade <span className="text-red-600">*</span>
            </label>

            <div className="flex items-center w-36 border border-[#1A1A1A] bg-white">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center text-stone-700 hover:bg-stone-100 transition-colors"
                aria-label="Diminuir quantidade"
              >
                <Minus size={14} />
              </button>
              <span className="flex-1 text-center text-sm font-medium text-stone-900">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center text-stone-700 hover:bg-stone-100 transition-colors"
                aria-label="Aumentar quantidade"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Shipping availability note */}
          <div className="text-xs text-stone-600 flex items-center gap-2 bg-[#F3EFEA] p-3 border border-[#E2DDD8]">
            <Truck size={16} className="text-[#6B4E8C] shrink-0" />
            <span>
              {artwork.shippingDays ||
                'Disponível para envio em 5 dias úteis com embalagem protegida.'}
            </span>
          </div>

          {/* ACTION BUTTONS: Add to Cart */}
          <div className="space-y-3 pt-2">
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 px-6 text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md flex items-center justify-center gap-3 ${
                isAddedAnimation
                  ? 'bg-emerald-700 text-white'
                  : 'bg-[#1A1A1A] hover:bg-stone-800 text-white'
              }`}
            >
              {isAddedAnimation ? (
                <>
                  <Check size={16} />
                  <span>Adicionado à Sacola!</span>
                </>
              ) : (
                <>
                  <ShoppingBag size={16} />
                  <span>
                    Adicionar ao Carrinho • R$ {totalPrice.toFixed(2)}
                  </span>
                </>
              )}
            </button>
          </div>

          {/* ACCORDIONS (Material e Dimensões / Prazos de Envio / Cuidados) */}
          <div className="border-t border-[#EAE6E1] pt-4 divide-y divide-[#EAE6E1]">
            {/* Accordion 1: Material e Dimensões */}
            <div className="py-3">
              <button
                onClick={() => toggleAccordion('dimensions')}
                className="w-full flex items-center justify-between text-left text-xs uppercase tracking-[0.15em] font-semibold text-stone-800 py-1"
              >
                <span>Material e Dimensões</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 text-stone-500 ${
                    openAccordion === 'dimensions' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 'dimensions' && (
                <div className="pt-3 pb-1 text-xs text-stone-600 space-y-2 font-light leading-relaxed animate-fade-in">
                  <p>
                    <strong>Papel / Suporte:</strong> {artwork.materialInfo}
                  </p>
                  <p>
                    <strong>Pigmentos:</strong> Tintas de aquarela/acrílica
                    profissionais de alta resistência à luz (lightfastness ASTM
                    I/II).
                  </p>
                  <p>
                    <strong>Dimensões Disponíveis:</strong>{' '}
                    {artwork.dimensionsInfo}
                  </p>
                  {artwork.type === 'original' && (
                    <p className="text-[#6B4E8C] font-medium">
                      ✓ Peça única e exclusiva. Acompanha Certificado de
                      Autenticidade assinado à mão.
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Accordion 2: Prazos de Envio */}
            <div className="py-3">
              <button
                onClick={() => toggleAccordion('shipping')}
                className="w-full flex items-center justify-between text-left text-xs uppercase tracking-[0.15em] font-semibold text-stone-800 py-1"
              >
                <span>Prazos de Envio & Embalagem</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 text-stone-500 ${
                    openAccordion === 'shipping' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 'shipping' && (
                <div className="pt-3 pb-1 text-xs text-stone-600 space-y-2 font-light leading-relaxed animate-fade-in">
                  <p>
                    <strong>Prazo de postagem:</strong> {artwork.shippingDays}
                  </p>
                  <p>
                    <strong>Embalagem segura:</strong> Envelopes rígidos
                    anti-dobra com papel de seda protetor livre de ácido para
                    papéis; caixas estruturadas com proteção de cantoneiras para
                    telas em chassi.
                  </p>
                  <p>
                    <strong>Rastreio:</strong> Código de rastreamento enviado
                    automaticamente por e-mail e WhatsApp assim que a encomenda
                    for postada.
                  </p>
                </div>
              )}
            </div>

            {/* Accordion 3: Cuidados */}
            <div className="py-3">
              <button
                onClick={() => toggleAccordion('care')}
                className="w-full flex items-center justify-between text-left text-xs uppercase tracking-[0.15em] font-semibold text-stone-800 py-1"
              >
                <span>Cuidados & Conservação da Obra</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 text-stone-500 ${
                    openAccordion === 'care' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 'care' && (
                <div className="pt-3 pb-1 text-xs text-stone-600 space-y-2 font-light leading-relaxed animate-fade-in">
                  <p>
                    • Evite expor a obra sob luz solar direta intensa e
                    contínua.
                  </p>
                  <p>
                    • Para impressões em papel e aquarelas, recomenda-se
                    emolduramento com vidro e paspatur livre de ácido.
                  </p>
                  <p>
                    • Limpar a moldura apenas com pano seco e macio, sem
                    produtos químicos abrasivos.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Certificate & Artist guarantee */}
          <div className="p-4 bg-[#FDFCFA] border border-[#E2DDD8] flex items-center gap-3">
            <ShieldCheck size={20} className="text-emerald-700 shrink-0" />
            <div className="text-[11px] text-stone-600">
              <span className="font-semibold text-stone-900 block">
                Obra Autêntica @meu.eeu
              </span>
              <span>
                Criada e embalada com afeto no ateliê da artista Maria.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
