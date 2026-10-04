'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import { Search, Sparkles, Filter, X, ArrowRight } from 'lucide-react';
import { ARTWORKS } from '../data/artworks';
import type { ArtworkCategory } from '../types';

type CategoryId = ArtworkCategory | 'all' | 'encomendas';
type SortOption = 'recommended' | 'price-asc' | 'price-desc' | 'name';

export default function GalleryStore() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const galleryPath = pathname === '/obras' ? '/obras' : '/';
  const categoryParam = searchParams.get('categoria');
  const selectedCategory: ArtworkCategory | 'all' =
    categoryParam === 'prints' || categoryParam === 'originais'
      ? categoryParam
      : 'all';
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState(1500);
  const [sortBy, setSortBy] = useState<SortOption>('recommended');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Available categories matching the requested structure
  const categories: {
    id: CategoryId;
    name: string;
    count: number | string;
    isSpecial?: boolean;
  }[] = [
    { id: 'all', name: 'Todos os produtos', count: ARTWORKS.length },
    {
      id: 'prints',
      name: 'Prints Fine Art',
      count: ARTWORKS.filter((a) => a.category === 'prints').length,
    },
    {
      id: 'originais',
      name: 'Telas & Aquarelas Originais',
      count: ARTWORKS.filter((a) => a.category === 'originais').length,
    },
    {
      id: 'encomendas',
      name: 'Encomendas Sob Medida',
      count: 'Personalizado',
      isSpecial: true,
    },
  ];

  // Filtering & sorting logic
  const filteredArtworks = useMemo(() => {
    return ARTWORKS.filter((art) => {
      // Category filter
      if (selectedCategory !== 'all' && art.category !== selectedCategory) {
        return false;
      }
      // Price filter
      if (art.startingPrice > maxPrice) {
        return false;
      }
      // Search filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = art.title.toLowerCase().includes(query);
        const matchesMedium = art.medium.toLowerCase().includes(query);
        const matchesDesc = art.shortDescription.toLowerCase().includes(query);
        if (!matchesTitle && !matchesMedium && !matchesDesc) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.startingPrice - b.startingPrice;
      if (sortBy === 'price-desc') return b.startingPrice - a.startingPrice;
      if (sortBy === 'name') return a.title.localeCompare(b.title);
      return 0; // 'recommended' uses default order
    });
  }, [selectedCategory, maxPrice, searchQuery, sortBy]);

  const handleCategoryClick = (catId: CategoryId) => {
    if (catId === 'encomendas') {
      router.push('/encomendas');
      return;
    }

    const params = new URLSearchParams(searchParams.toString());
    if (catId === 'all') params.delete('categoria');
    else params.set('categoria', catId);
    const query = params.toString();
    router.replace(query ? `${galleryPath}?${query}` : galleryPath, {
      scroll: false,
    });
  };

  const resetFilters = () => {
    handleCategoryClick('all');
    setMaxPrice(1500);
    setSearchQuery('');
    setSortBy('recommended');
  };

  const isFiltered =
    selectedCategory !== 'all' || maxPrice < 1500 || searchQuery !== '';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header Banner */}
      <div className="mb-10 text-center sm:text-left border-b border-[#EAE6E1] pb-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#6B4E8C] font-semibold block mb-2">
              Galeria Digital & Loja do Ateliê
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-light text-[#1A1A1A] tracking-tight">
              {selectedCategory === 'all' && 'Todos os Produtos'}
              {selectedCategory === 'prints' && 'Prints Fine Art'}
              {selectedCategory === 'originais' && 'Obras Originais'}
            </h1>
            <p className="text-xs sm:text-sm text-stone-500 font-light mt-2 max-w-2xl">
              Reproduções Fine Art de altíssima fidelidade e obras originais
              únicas feitas à mão pela artista Maria (@meu.eeu).
            </p>
          </div>

          {/* Quick Commission Callout */}
          <div className="bg-[#F3EFEA] border border-[#E2DDD8] p-4 rounded-sm flex items-center justify-between gap-4 max-w-sm">
            <div className="text-left">
              <span className="text-[10px] uppercase tracking-wider text-[#6B4E8C] font-bold block">
                Sob Medida
              </span>
              <p className="text-xs font-serif text-stone-900">
                Quer uma pintura personalizada?
              </p>
            </div>
            <Link
              href="/encomendas"
              className="flex items-center gap-1 whitespace-nowrap border-b border-black pb-0.5 text-xs font-medium text-stone-900 hover:text-[#6B4E8C]"
            >
              <span>Pedir Encomenda</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Layout: Left Sidebar + Right Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex items-center justify-between bg-white p-4 border border-[#EAE6E1] shadow-xs">
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="flex items-center gap-2 text-xs uppercase tracking-wider font-medium text-stone-800"
          >
            <Filter size={16} />
            <span>Filtros e Categorias ({filteredArtworks.length})</span>
          </button>
          {isFiltered && (
            <button
              onClick={resetFilters}
              className="text-xs text-[#6B4E8C] underline font-medium"
            >
              Limpar filtros
            </button>
          )}
        </div>

        {/* LEFT SIDEBAR */}
        <aside
          className={`space-y-8 ${mobileFilterOpen ? 'block' : 'hidden lg:block'}`}
        >
          {/* Search Box */}
          <div className="bg-white p-5 border border-[#EAE6E1] shadow-xs">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1A1A1A] mb-3">
              Buscar Obra
            </h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Título, técnica, cidade..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-[#D5CBC0] pl-9 pr-8 py-2 text-xs text-stone-900 outline-none focus:border-black transition-colors"
              />
              <Search
                size={14}
                className="absolute left-3 top-2.5 text-stone-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2.5 text-stone-400 hover:text-black"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Categories Filter ("Buscar por") */}
          <div className="bg-white p-5 border border-[#EAE6E1] shadow-xs">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1A1A1A] mb-4 pb-2 border-b border-stone-100">
              Buscar por
            </h3>
            <ul className="space-y-2.5 text-xs">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <li key={cat.id}>
                    <button
                      onClick={() => handleCategoryClick(cat.id)}
                      className={`w-full text-left flex items-center justify-between py-1 transition-colors ${
                        isActive
                          ? 'text-[#1A1A1A] font-semibold underline underline-offset-4'
                          : 'text-stone-600 hover:text-black font-light'
                      }`}
                    >
                      <span
                        className={
                          cat.isSpecial ? 'text-[#6B4E8C] font-medium' : ''
                        }
                      >
                        {cat.name}
                      </span>
                      <span className="text-[11px] text-stone-400">
                        {typeof cat.count === 'number'
                          ? `(${cat.count})`
                          : cat.count}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Price Range Slider ("Filtrar por Preço") */}
          <div className="bg-white p-5 border border-[#EAE6E1] shadow-xs">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-stone-100">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1A1A1A]">
                Filtrar por Preço
              </h3>
              {maxPrice < 1500 && (
                <button
                  onClick={() => setMaxPrice(1500)}
                  className="text-[10px] text-stone-400 hover:text-black"
                >
                  Reset
                </button>
              )}
            </div>

            <div className="space-y-3">
              <input
                type="range"
                min="20"
                max="1500"
                step="20"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#1A1A1A] cursor-pointer"
              />
              <div className="flex items-center justify-between text-xs text-stone-600 font-light">
                <span>R$ 20</span>
                <span className="font-medium text-stone-900 bg-[#F3EFEA] px-2 py-0.5 rounded border border-stone-200">
                  Até R$ {maxPrice.toFixed(2)}
                </span>
                <span>R$ 1.500</span>
              </div>
            </div>
          </div>

          {/* Reset Filters CTA */}
          {isFiltered && (
            <button
              onClick={resetFilters}
              className="w-full py-2.5 border border-[#1A1A1A] text-[#1A1A1A] text-xs uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-colors font-medium"
            >
              Limpar Todos os Filtros
            </button>
          )}

          {/* Studio Guarantee badge */}
          <div className="p-4 bg-[#FAF8F5] border border-[#EAE6E1] text-[11px] text-stone-500 space-y-2">
            <div className="flex items-center gap-2 text-stone-800 font-medium font-serif text-sm">
              <Sparkles size={14} className="text-[#6B4E8C]" />
              <span>Garantia de Autenticidade</span>
            </div>
            <p>
              Todas as reproduções Fine Art e Obras Originais são certificadas e
              revisadas uma a uma no ateliê da artista.
            </p>
          </div>
        </aside>

        {/* RIGHT: MAIN ARTWORKS GRID */}
        <main className="lg:col-span-3 space-y-6">
          {/* Controls Bar (Item count + Sort dropdown) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#EAE6E1]">
            <span className="text-xs text-stone-500 font-light">
              Mostrando{' '}
              <strong className="text-stone-900 font-medium">
                {filteredArtworks.length}
              </strong>{' '}
              {filteredArtworks.length === 1
                ? 'obra disponível'
                : 'obras disponíveis'}
            </span>

            <div className="flex items-center gap-2">
              <label
                htmlFor="sort-select"
                className="text-xs text-stone-500 uppercase tracking-wider font-light"
              >
                Ordenar:
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="bg-white border border-[#D5CBC0] px-3 py-1.5 text-xs text-stone-900 outline-none focus:border-black cursor-pointer font-light"
              >
                <option value="recommended">Recomendados</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
                <option value="name">Nome (A - Z)</option>
              </select>
            </div>
          </div>

          {/* Product Grid with ample breathing room (padding & gaps) */}
          {filteredArtworks.length === 0 ? (
            <div className="text-center py-20 bg-white border border-[#EAE6E1] p-8 space-y-4">
              <h3 className="font-serif text-2xl text-stone-800 font-light">
                Nenhuma obra encontrada
              </h3>
              <p className="text-xs text-stone-500 max-w-md mx-auto">
                Não encontramos nenhuma obra com os filtros selecionados. Tente
                ajustar o valor máximo ou limpar os termos da busca.
              </p>
              <button
                onClick={resetFilters}
                className="bg-[#1A1A1A] text-white text-xs uppercase tracking-widest px-6 py-2.5 font-medium hover:bg-stone-800 transition-colors"
              >
                Ver todas as obras
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {filteredArtworks.map((art) => (
                <Link
                  key={art.id}
                  href={`/obras/${art.id}`}
                  className="group cursor-pointer bg-white border border-[#EAE6E1] hover:border-stone-400 transition-all duration-300 flex flex-col justify-between hover:shadow-fine-art"
                >
                  {/* Artwork Image Container with Gallery Matting Frame */}
                  <div className="relative aspect-4/5 w-full bg-[#FAF8F5] p-5 overflow-hidden flex items-center justify-center">
                    {/* Badge Tag */}
                    <div className="absolute top-3 left-3 z-10">
                      {art.tag && (
                        <span
                          className={`text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-none shadow-xs ${
                            art.badgeType === 'original'
                              ? 'bg-[#1A1A1A] text-white'
                              : art.badgeType === 'new'
                                ? 'bg-[#C86D51] text-white'
                                : 'bg-white/95 text-stone-800 border border-stone-200 backdrop-blur-xs'
                          }`}
                        >
                          {art.tag}
                        </span>
                      )}
                    </div>

                    {/* Artwork Inner Frame */}
                    <div className="relative w-full h-full bg-white shadow-xs overflow-hidden flex items-center justify-center p-2 border border-stone-100">
                      <Image
                        src={art.images[0]}
                        alt={art.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Artwork Info */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#6B4E8C] font-semibold block">
                        {art.medium}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1A1A1A] leading-snug group-hover:text-[#6B4E8C] transition-colors mt-1">
                        {art.title}
                      </h3>
                      <p className="text-[11px] text-stone-500 font-light line-clamp-2 mt-1.5 leading-relaxed">
                        {art.shortDescription}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-stone-400 block uppercase tracking-wider">
                          {art.type === 'print'
                            ? 'A partir de'
                            : 'Valor da Peça'}
                        </span>
                        <span className="font-serif text-lg font-semibold text-[#1A1A1A]">
                          R$ {art.startingPrice.toFixed(2)}
                        </span>
                      </div>

                      <span className="text-xs uppercase tracking-wider font-medium text-stone-800 group-hover:text-black border-b border-stone-400 group-hover:border-black pb-0.5 transition-all">
                        Ver Detalhes →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
