'use client';

import { useState, type FormEvent } from 'react';
import { Send, Square, ShoppingBag } from 'lucide-react';
import {
  COMMISSIONS_PAPER_SIZES,
  COMMISSIONS_PAPER_MATERIALS,
  COMMISSIONS_CANVAS_SIZES,
} from '../data/artworks';
import { useCart } from '../context/CartContext';

export default function CommissionsPage() {
  const { addToCart, showToast } = useCart();
  const [activeTab, setActiveTab] = useState('papel'); // 'papel' or 'telas'

  // --- OPÇÃO A: State para Encomenda em Papel (A4 e A3) ---
  const [paperSize, setPaperSize] = useState('A4');
  const [paperMaterial, setPaperMaterial] = useState('algodao');
  const [paperClientName, setPaperClientName] = useState('');
  const [paperClientContact, setPaperClientContact] = useState('');
  const [paperSubject, setPaperSubject] = useState('Fachada ou Casa Histórica');
  const [paperDescription, setPaperDescription] = useState('');

  // Dynamic Base Price calculation for Paper (Size + Material)
  const calculatePaperPrice = () => {
    const matObj =
      COMMISSIONS_PAPER_MATERIALS.find((m) => m.id === paperMaterial) ||
      COMMISSIONS_PAPER_MATERIALS[1];
    return paperSize === 'A4' ? matObj.multiplierA4 : matObj.multiplierA3;
  };
  const paperBasePrice = calculatePaperPrice();

  // --- OPÇÃO B: State para Encomenda em Telas Acrílicas (Grandes Formatos) ---
  const [selectedCanvasId, setSelectedCanvasId] = useState('70x100');
  const [canvasClientName, setCanvasClientName] = useState('');
  const [canvasClientContact, setCanvasClientContact] = useState('');
  const [canvasDescription, setCanvasDescription] = useState('');
  const [canvasPaletteTheme, setCanvasPaletteTheme] = useState(
    'Tons terrosos e ocres com toques de azul',
  );

  // Dynamic Base Price for Canvas
  const currentCanvasObj =
    COMMISSIONS_CANVAS_SIZES.find((c) => c.id === selectedCanvasId) ||
    COMMISSIONS_CANVAS_SIZES[0];
  const canvasBasePrice = currentCanvasObj.basePrice;

  // Handlers for submission
  const handlePaperSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const selectedMatObj = COMMISSIONS_PAPER_MATERIALS.find(
      (m) => m.id === paperMaterial,
    );
    const sizeLabel =
      paperSize === 'A4' ? 'A4 (21 x 29,7 cm)' : 'A3 (29,7 x 42 cm)';

    const orderSummary =
      `🎨 *NOVA ENCOMENDA EM PAPEL / AQUARELA (@meu.eeu)*\n\n` +
      `• *Cliente:* ${paperClientName || 'Não informado'}\n` +
      `• *Contato/WhatsApp:* ${paperClientContact || 'Não informado'}\n` +
      `• *Tamanho:* ${sizeLabel}\n` +
      `• *Material:* ${selectedMatObj?.label}\n` +
      `• *Tema:* ${paperSubject}\n` +
      `• *Descrição da Ideia:* ${paperDescription}\n` +
      `• *Valor Base Calculado:* R$ ${paperBasePrice.toFixed(2)}\n\n` +
      `Aguardo retorno para alinharmos o esboço e prazo. Obrigado!`;

    const encoded = encodeURIComponent(orderSummary);
    window.open(`https://wa.me/5551999999999?text=${encoded}`, '_blank');
    showToast(`Solicitação de encomenda (${sizeLabel}) enviada!`);
  };

  const handleAddPaperToCart = () => {
    const selectedMatObj = COMMISSIONS_PAPER_MATERIALS.find(
      (m) => m.id === paperMaterial,
    );
    const sizeLabel =
      paperSize === 'A4' ? 'A4 (21 x 29,7 cm)' : 'A3 (29,7 x 42 cm)';

    addToCart({
      artworkId: `encomenda-papel-${paperSize}-${paperMaterial}`,
      title: `Encomenda em Aquarela (${paperSubject})`,
      image:
        'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop',
      sizeId: paperSize,
      sizeName: sizeLabel,
      material: selectedMatObj?.label ?? 'Papel Fine Art',
      unitPrice: paperBasePrice,
      quantity: 1,
      type: 'commission',
      isCommission: true,
      commissionType: 'Aquarela sobre Papel',
    });
  };

  const handleCanvasSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const orderSummary =
      `🖼️ *SOLICITAÇÃO DE ENCOMENDA EM TELA ACRÍLICA (@meu.eeu)*\n\n` +
      `• *Cliente:* ${canvasClientName || 'Não informado'}\n` +
      `• *Contato/WhatsApp:* ${canvasClientContact || 'Não informado'}\n` +
      `• *Tamanho de Chassi Escolhido:* ${currentCanvasObj.label} (${currentCanvasObj.name})\n` +
      `• *Paleta Desejada:* ${canvasPaletteTheme}\n` +
      `• *Ideia/Conceito:* ${canvasDescription}\n` +
      `• *Preço Base Estimado:* R$ ${canvasBasePrice.toFixed(2)}\n\n` +
      `Gostaria de receber a proposta personalizada e cronograma de produção!`;

    const encoded = encodeURIComponent(orderSummary);
    window.open(`https://wa.me/5551999999999?text=${encoded}`, '_blank');
    showToast(
      `Solicitação de tela (${currentCanvasObj.label}) enviada com sucesso!`,
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#6B4E8C] font-semibold block">
          Peças Exclusivas Feitas Sob Medida
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-light text-[#1A1A1A] tracking-tight">
          Encomendas Personalizadas
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
          Transforme memórias, lugares afetivos, casarios e sentimentos em uma
          obra de arte original pintada à mão exclusivamente para você ou para
          presentear alguém especial.
        </p>
      </div>

      {/* 4-Step Process Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14 bg-white p-6 sm:p-8 border border-[#EAE6E1] shadow-xs">
        <div className="space-y-1.5 border-l-2 border-[#1A1A1A] pl-4">
          <span className="text-[10px] text-stone-400 font-serif text-base block font-bold">
            01
          </span>
          <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-900">
            Escolha o Suporte
          </h4>
          <p className="text-[11px] text-stone-500 font-light">
            Selecione papel de algodão (A4/A3) ou tela em chassi acrílico.
          </p>
        </div>

        <div className="space-y-1.5 border-l-2 border-[#C4859A] pl-4">
          <span className="text-[10px] text-stone-400 font-serif text-base block font-bold">
            02
          </span>
          <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-900">
            Conte sua Ideia
          </h4>
          <p className="text-[11px] text-stone-500 font-light">
            Descreva o tema, paleta e nos envie fotos ou referências afetivas.
          </p>
        </div>

        <div className="space-y-1.5 border-l-2 border-[#6B4E8C] pl-4">
          <span className="text-[10px] text-stone-400 font-serif text-base block font-bold">
            03
          </span>
          <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-900">
            Estudo & Aprovação
          </h4>
          <p className="text-[11px] text-stone-500 font-light">
            Validamos o esboço e as cores antes de dar a primeira pincelada
            definitiva.
          </p>
        </div>

        <div className="space-y-1.5 border-l-2 border-emerald-600 pl-4">
          <span className="text-[10px] text-stone-400 font-serif text-base block font-bold">
            04
          </span>
          <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-900">
            Pintura & Envio
          </h4>
          <p className="text-[11px] text-stone-500 font-light">
            Acompanhe vídeos do processo. Entrega com certificado e embalagem
            reforçada.
          </p>
        </div>
      </div>

      {/* CATEGORY SWITCH TABS: Opção A (Papel A4/A3) vs Opção B (Telas Acrílica) */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-[#EAE6E1] p-1 rounded-none border border-stone-300">
          <button
            onClick={() => setActiveTab('papel')}
            className={`px-6 sm:px-10 py-3 text-xs uppercase tracking-[0.18em] font-medium transition-all ${
              activeTab === 'papel'
                ? 'bg-[#1A1A1A] text-white shadow-md'
                : 'text-stone-700 hover:text-black'
            }`}
          >
            Opção A: Aquarela em Papel (A4 / A3)
          </button>
          <button
            onClick={() => setActiveTab('telas')}
            className={`px-6 sm:px-10 py-3 text-xs uppercase tracking-[0.18em] font-medium transition-all ${
              activeTab === 'telas'
                ? 'bg-[#1A1A1A] text-white shadow-md'
                : 'text-stone-700 hover:text-black'
            }`}
          >
            Opção B: Telas em Acrílica (Grandes Formatos)
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* OPÇÃO A: ENCOMENDAS EM PAPEL / AQUARELA (A4 & A3) */}
      {/* ========================================================================= */}
      {activeTab === 'papel' && (
        <div className="space-y-10 animate-fade-in">
          {/* Intro Card */}
          <div className="bg-[#FAF8F5] border border-[#E2DDD8] p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-[#6B4E8C] font-semibold">
                Opção A • Pintura Delicada em Aquarela
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-light">
                Aquarelas Originais em Papel Nobre (A4 & A3)
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                Ideal para retratos afetivos, fachadas de casas que marcaram
                histórias de família, paisagens botânicas, portas coloniais e
                pequenos santuários. Feitas com pigmentos profissionais
                resistentes à luz e papéis de alta gramatura.
              </p>
            </div>
            <div className="lg:col-span-4 bg-white p-5 border border-stone-200 text-center space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-stone-500 block">
                Investimento a partir de
              </span>
              <span className="font-serif text-3xl font-bold text-[#1A1A1A]">
                R$ 180,00
              </span>
              <span className="text-[10px] text-stone-400 block">
                Sinal de 50% para início do projeto
              </span>
            </div>
          </div>

          {/* Interactive Configurator Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Configurator: Dual Dropdowns (Tamanho + Material) */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 border border-[#EAE6E1] space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <h3 className="font-serif text-xl font-normal text-stone-900">
                  1. Configuração do Formato & Material
                </h3>
                <p className="text-xs text-stone-500 font-light mt-1">
                  Selecione as opções abaixo para ver o cálculo dinâmico do
                  valor base.
                </p>
              </div>

              {/* DROPDOWN 1: TAMANHO (A4 ou A3) */}
              <div className="space-y-2">
                <label
                  htmlFor="paper-size-select"
                  className="block text-xs uppercase tracking-wider font-semibold text-stone-800"
                >
                  Tamanho da Obra <span className="text-red-600">*</span>
                </label>
                <select
                  id="paper-size-select"
                  value={paperSize}
                  onChange={(e) => setPaperSize(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#1A1A1A] p-3 text-xs sm:text-sm text-stone-900 outline-none focus:ring-1 focus:ring-black cursor-pointer font-light"
                >
                  {COMMISSIONS_PAPER_SIZES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label} —{' '}
                      {s.id === 'A4'
                        ? 'Ideal p/ fotos individuais e fachadas'
                        : 'Composição ampla e detalhada'}
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-stone-500 font-light">
                  {
                    COMMISSIONS_PAPER_SIZES.find((s) => s.id === paperSize)
                      ?.desc
                  }
                </p>
              </div>

              {/* DROPDOWN 2: MATERIAL (Algodão vs Celulose) */}
              <div className="space-y-2">
                <label
                  htmlFor="paper-material-select"
                  className="block text-xs uppercase tracking-wider font-semibold text-stone-800"
                >
                  Material do Papel <span className="text-red-600">*</span>
                </label>
                <select
                  id="paper-material-select"
                  value={paperMaterial}
                  onChange={(e) => setPaperMaterial(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#1A1A1A] p-3 text-xs sm:text-sm text-stone-900 outline-none focus:ring-1 focus:ring-black cursor-pointer font-light"
                >
                  {COMMISSIONS_PAPER_MATERIALS.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.label}
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-stone-500 font-light">
                  {
                    COMMISSIONS_PAPER_MATERIALS.find(
                      (m) => m.id === paperMaterial,
                    )?.desc
                  }
                </p>
              </div>

              {/* DYNAMIC BASE PRICE DISPLAY */}
              <div className="p-5 bg-[#FAF8F5] border border-[#E2DDD8] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-stone-500 block">
                    Preço Base da Encomenda
                  </span>
                  <span className="font-serif text-3xl font-bold text-[#E63946] sm:text-[#1A1A1A]">
                    R$ {paperBasePrice.toFixed(2)}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-[#6B4E8C] font-semibold block">
                    {paperSize} •{' '}
                    {paperMaterial === 'algodao' ? '100% Algodão' : 'Celulose'}
                  </span>
                  <span className="text-[10px] text-stone-500 font-light">
                    Prazo médio: 10 a 15 dias úteis
                  </span>
                </div>
              </div>

              {/* Quick Add to Cart button */}
              <button
                type="button"
                onClick={handleAddPaperToCart}
                className="w-full py-3 bg-[#FAF8F5] hover:bg-[#F3EFEA] border border-stone-800 text-stone-900 text-xs uppercase tracking-widest font-medium transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag size={14} />
                <span>
                  Adicionar Proposta ao Carrinho (R$ {paperBasePrice.toFixed(2)}
                  )
                </span>
              </button>
            </div>

            {/* Right Details Form: Descreva sua Ideia */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 border border-[#EAE6E1]">
              <div className="border-b border-stone-100 pb-4 mb-6">
                <h3 className="font-serif text-xl font-normal text-stone-900">
                  2. Dados do Pedido & Detalhes da Obra
                </h3>
                <p className="text-xs text-stone-500 font-light mt-1">
                  Preencha os dados abaixo para receber uma proposta oficial por
                  WhatsApp ou Instagram.
                </p>
              </div>

              <form onSubmit={handlePaperSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="paper-name"
                      className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1"
                    >
                      Seu Nome <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="paper-name"
                      type="text"
                      required
                      placeholder="Ex: Ana Clara"
                      value={paperClientName}
                      onChange={(e) => setPaperClientName(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-stone-300 p-2.5 text-xs text-stone-900 outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="paper-contact"
                      className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1"
                    >
                      WhatsApp ou @Instagram{' '}
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="paper-contact"
                      type="text"
                      required
                      placeholder="Ex: (51) 99999-9999"
                      value={paperClientContact}
                      onChange={(e) => setPaperClientContact(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-stone-300 p-2.5 text-xs text-stone-900 outline-none focus:border-black"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="paper-subject-select"
                    className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1"
                  >
                    Tema Principal da Pintura
                  </label>
                  <select
                    id="paper-subject-select"
                    value={paperSubject}
                    onChange={(e) => setPaperSubject(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-stone-300 p-2.5 text-xs text-stone-900 outline-none focus:border-black cursor-pointer font-light"
                  >
                    <option>Fachada ou Casa Histórica</option>
                    <option>Retrato Afetivo / Casal / Família</option>
                    <option>Paisagem de Viagem ou Lugar Especial</option>
                    <option>Pintura Botânica / Flores Favoritas</option>
                    <option>Pet / Animal de Estimação</option>
                    <option>Outro tema personalizado</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="paper-description"
                    className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1"
                  >
                    Descreva sua ideia, detalhes e sentimentos{' '}
                    <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="paper-description"
                    required
                    rows={4}
                    placeholder="Conte sobre o que deseja eternizar: elementos importantes, se quer incluir alguma frase ou data, paleta de cores preferida, etc..."
                    value={paperDescription}
                    onChange={(e) => setPaperDescription(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-stone-300 p-3 text-xs text-stone-900 outline-none focus:border-black font-light resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#1A1A1A] hover:bg-stone-800 text-white text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send size={15} />
                  <span>Enviar Solicitação de Encomenda A4/A3</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* OPÇÃO B: ENCOMENDAS EM TELAS ACRÍLICAS (GRANDES FORMATOS) */}
      {/* ========================================================================= */}
      {activeTab === 'telas' && (
        <div className="space-y-10 animate-fade-in">
          {/* Intro Card */}
          <div className="bg-[#FAF8F5] border border-[#E2DDD8] p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-[#C4859A] font-semibold">
                Opção B • Grandes Formatos em Tela
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-light">
                Pinturas em Tela Acrílica sobre Chassi
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                Telas imponentes criadas com técnica mista, espátulas e camadas
                ricas de tinta acrílica sobre chassi de madeira reflorestada.
                Perfeitas para protagonizar salas de estar, escritórios,
                consultórios e halls de entrada.
              </p>
            </div>
            <div className="lg:col-span-4 bg-white p-5 border border-stone-200 text-center space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-stone-500 block">
                Preço Base Estimado
              </span>
              <span className="font-serif text-3xl font-bold text-[#1A1A1A]">
                R$ {canvasBasePrice.toFixed(2)}
              </span>
              <span className="text-[10px] text-[#6B4E8C] font-medium block">
                {currentCanvasObj.label} ({currentCanvasObj.name})
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: 5 Canvas Chassi Sizes Selector */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 border border-[#EAE6E1] space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <h3 className="font-serif text-xl font-normal text-stone-900">
                  1. Selecione a Dimensão do Chassi
                </h3>
                <p className="text-xs text-stone-500 font-light mt-1">
                  Os 5 tamanhos mais procurados e harmônicos para projetos de
                  interiores:
                </p>
              </div>

              {/* 5 Sizes Button Grid */}
              <div className="space-y-3">
                {COMMISSIONS_CANVAS_SIZES.map((canvas, index) => {
                  const isSelected = selectedCanvasId === canvas.id;
                  return (
                    <div
                      key={canvas.id}
                      onClick={() => setSelectedCanvasId(canvas.id)}
                      className={`p-4 border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'border-[#1A1A1A] bg-[#FAF8F5] ring-1 ring-black'
                          : 'border-stone-200 hover:border-stone-400 bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-serif ${
                            isSelected
                              ? 'bg-[#1A1A1A] text-white'
                              : 'bg-stone-100 text-stone-600'
                          }`}
                        >
                          {index + 1}
                        </div>
                        <div>
                          <span className="font-medium text-xs sm:text-sm text-stone-900 block">
                            {canvas.label} —{' '}
                            <span className="font-serif font-normal">
                              {canvas.name}
                            </span>
                          </span>
                          <span className="text-[11px] text-stone-500 font-light">
                            {canvas.desc}
                          </span>
                        </div>
                      </div>

                      <div className="text-right shrink-0 pl-3">
                        <span className="font-serif text-sm sm:text-base font-bold text-stone-900 block">
                          R$ {canvas.basePrice.toFixed(2)}
                        </span>
                        <span className="text-[10px] text-emerald-700 font-medium uppercase tracking-wider">
                          Base estimada
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Visual Chassi Proportion Preview */}
              <div className="p-4 bg-[#F3EFEA] border border-[#E2DDD8] flex items-center gap-4">
                <div className="w-16 h-16 bg-stone-300 border border-stone-400 flex items-center justify-center shadow-xs">
                  <Square size={24} className="text-stone-700" />
                </div>
                <div className="text-xs text-stone-600 space-y-0.5">
                  <span className="font-semibold text-stone-900 block">
                    Formato: {currentCanvasObj.label}
                  </span>
                  <span>
                    Chassi de madeira nobre de 3,5 cm com bordas pintadas
                    (pronto para pendurar).
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Canvas Idea Description & Contact Form */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 border border-[#EAE6E1]">
              <div className="border-b border-stone-100 pb-4 mb-6">
                <h3 className="font-serif text-xl font-normal text-stone-900">
                  2. Briefing da Pintura & Dados
                </h3>
                <p className="text-xs text-stone-500 font-light mt-1">
                  Descreva o ambiente e a energia que deseja transmitir com a
                  obra.
                </p>
              </div>

              <form onSubmit={handleCanvasSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="canvas-name"
                      className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1"
                    >
                      Seu Nome <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="canvas-name"
                      type="text"
                      required
                      placeholder="Ex: Juliana Mendes"
                      value={canvasClientName}
                      onChange={(e) => setCanvasClientName(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-stone-300 p-2.5 text-xs text-stone-900 outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="canvas-contact"
                      className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1"
                    >
                      WhatsApp ou Instagram{' '}
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="canvas-contact"
                      type="text"
                      required
                      placeholder="Ex: (51) 98888-8888"
                      value={canvasClientContact}
                      onChange={(e) => setCanvasClientContact(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-stone-300 p-2.5 text-xs text-stone-900 outline-none focus:border-black"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="canvas-palette"
                    className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1"
                  >
                    Paleta de Cores Desejada
                  </label>
                  <input
                    id="canvas-palette"
                    type="text"
                    placeholder="Ex: Terracotas, ocres, verde sálvia e toques de dourado"
                    value={canvasPaletteTheme}
                    onChange={(e) => setCanvasPaletteTheme(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-stone-300 p-2.5 text-xs text-stone-900 outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label
                    htmlFor="canvas-description"
                    className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1"
                  >
                    Descreva a ideia da pintura e o ambiente{' '}
                    <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="canvas-description"
                    required
                    rows={4}
                    placeholder="Conte sobre o tema da pintura (abstrato orgânico, paisagem etérea, marinha texturizada, etc.), em qual cômodo ela ficará e quais sensações você busca..."
                    value={canvasDescription}
                    onChange={(e) => setCanvasDescription(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-stone-300 p-3 text-xs text-stone-900 outline-none focus:border-black font-light resize-y"
                  />
                </div>

                {/* Submit action */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#1A1A1A] hover:bg-stone-800 text-white text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send size={15} />
                  <span>
                    Enviar Solicitação de Tela ({currentCanvasObj.label} • R${' '}
                    {canvasBasePrice.toFixed(2)})
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
