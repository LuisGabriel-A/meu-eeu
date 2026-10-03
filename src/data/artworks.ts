import type { Artwork, FaqItem, InstagramPost } from '../types';

export const ARTWORKS = [
  {
    id: 'casa-de-cultura-mario-quintana',
    title: 'Casa de Cultura Mário Quintana (C)',
    category: 'prints',
    medium: 'Aquarela sobre Papel Algodão',
    originalMedium: 'Aquarela Winsor & Newton Professional',
    year: '2025',
    tag: 'Print Fine Art',
    badgeType: 'print',
    isNew: false,
    isAvailable: true,
    startingPrice: 30.0,
    basePrice: 30.0,
    type: 'print',
    shortDescription:
      'Pintura arquitetônica em aquarela com traços em bico de pena capturando a monumentalidade e os tons terrosos do icônico edifício histórico.',
    fullDescription:
      'Reprodução Fine Art de altíssima fidelidade da aquarela original "Casa de Cultura Mário Quintana". Cada print é impresso com tintas pigmentadas de padrão museológico (Giclée) sobre papel nobre 100% algodão, garantindo durabilidade superior a 100 anos sem desbotamento.',
    images: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1000&auto=format&fit=crop',
    ],
    dimensionsInfo:
      'A6 (10,5 x 14,8 cm), A5 (14,8 x 21 cm), A4 (21 x 29,7 cm), A3 (29,7 x 42 cm)',
    materialInfo:
      'Papel Hahnemühle Photo Rag 308g/m² 100% Algodão ou Papel Fine Art Texturizado 250g.',
    shippingDays: '5 dias úteis para confecção cuidadosa e envio com rastreio.',
    sizes: [
      {
        id: 'A6',
        name: 'A6 (10,5 x 14,8 cm)',
        material: 'Papel Fine Art 250g',
        price: 20.0,
      },
      {
        id: 'A5',
        name: 'A5 (14,8 x 21,0 cm)',
        material: 'Papel Fine Art 250g',
        price: 30.0,
      },
      {
        id: 'A4',
        name: 'A4 (21,0 x 29,7 cm)',
        material: 'Papel 100% Algodão 308g',
        price: 55.0,
      },
      {
        id: 'A3',
        name: 'A3 (29,7 x 42,0 cm)',
        material: 'Papel 100% Algodão 308g',
        price: 95.0,
      },
    ],
  },
  {
    id: 'refugio-das-garcas-porto-alegre',
    title: 'Refúgio das Garças — Lago Guaíba',
    category: 'originais',
    medium: 'Aquarela Original',
    originalMedium: 'Aquarela Daniel Smith Extra Fine sobre Saunders Waterford',
    year: '2026',
    tag: 'Original',
    badgeType: 'original',
    isNew: true,
    isAvailable: true,
    startingPrice: 420.0,
    basePrice: 420.0,
    type: 'original',
    dimensions: '31cm x 41cm',
    shortDescription:
      'Obra original única. Paisagem marítima com veleiro solitário, águas serenas ao entardecer e reflexos dourados.',
    fullDescription:
      'Pintura original e única, assinada à mão na frente e no verso pela artista Maria (@meu.eeu). Acompanha Certificado de Autenticidade numerado e carimbado. Feita com pigmentos resistentes à luz em papel inglês 100% algodão.',
    images: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop',
    ],
    dimensionsInfo:
      'Dimensão original da folha: 31cm x 41cm (gramatura 300g/m² rough texture).',
    materialInfo:
      'Papel 100% Algodão Saunders Waterford 300g/m², pigmentos Daniel Smith resistentes à luz.',
    shippingDays:
      'Pronta entrega! Postagem em até 2 dias úteis em tubo rígido reforçado com seguro.',
    sizes: [
      {
        id: 'UNICO',
        name: 'Original Único (31 x 41 cm)',
        material: 'Papel 100% Algodão Saunders Waterford 300g',
        price: 420.0,
      },
    ],
  },
  {
    id: 'sol-da-tarde-pelotas',
    title: 'Casario Histórico — Luz de Outono',
    category: 'prints',
    medium: 'Aquarela & Nanquim',
    originalMedium: 'Aquarela Schmincke Horadam',
    year: '2025',
    tag: 'Print Fine Art',
    badgeType: 'print',
    isNew: false,
    isAvailable: true,
    startingPrice: 28.0,
    basePrice: 28.0,
    type: 'print',
    shortDescription:
      'Fachada colonial com janelas em arco e vegetação delicada que brota dos muros antigos.',
    fullDescription:
      'Impressão Fine Art em papel museológico. As cores quentes e os detalhes da calçada de pedra criam uma atmosfera nostálgica e acolhedora para qualquer ambiente.',
    images: [
      'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop',
    ],
    dimensionsInfo: 'Disponível do tamanho A6 ao A3.',
    materialInfo: 'Pigmentos minerais sobre Papel Algodão 100% acid-free.',
    shippingDays: '5 dias úteis para produção e embalagem personalizada.',
    sizes: [
      {
        id: 'A6',
        name: 'A6 (10,5 x 14,8 cm)',
        material: 'Papel Fine Art 250g',
        price: 20.0,
      },
      {
        id: 'A5',
        name: 'A5 (14,8 x 21,0 cm)',
        material: 'Papel Fine Art 250g',
        price: 28.0,
      },
      {
        id: 'A4',
        name: 'A4 (21,0 x 29,7 cm)',
        material: 'Papel 100% Algodão 308g',
        price: 52.0,
      },
      {
        id: 'A3',
        name: 'A3 (29,7 x 42,0 cm)',
        material: 'Papel 100% Algodão 308g',
        price: 88.0,
      },
    ],
  },
  {
    id: 'tela-acrilica-orizonte-lavanda',
    title: 'Horizonte Lavanda — Série Memórias',
    category: 'originais',
    medium: 'Acrílica sobre Tela (Chassi)',
    originalMedium: 'Tinta Acrílica Pesada sobre Linho Cru',
    year: '2026',
    tag: 'Original em Tela',
    badgeType: 'original',
    isNew: true,
    isAvailable: true,
    startingPrice: 850.0,
    basePrice: 850.0,
    type: 'original',
    dimensions: '60cm x 80cm x 3.5cm',
    shortDescription:
      'Pintura em tela com textura espatulada expressiva. Tons de lavanda, ocre e azul profundo.',
    fullDescription:
      'Tela montada em chassi de madeira nobre de 3,5cm de espessura com bordas pintadas em continuidade, pronta para pendurar (não necessita de moldura obrigatória, mas aceita moldura flutuante). Finalizada com verniz acetinado protetor contra raios UV e poeira.',
    images: [
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1000&auto=format&fit=crop',
    ],
    dimensionsInfo: '60cm x 80cm em chassi reforçado de madeira.',
    materialInfo:
      'Acrílico profissional Golden/Liquitex sobre tela 100% algodão e verniz UV.',
    shippingDays:
      'Pronta entrega. Enviada em caixa de madeira/isopor com cantoneiras de proteção.',
    sizes: [
      {
        id: 'UNICO',
        name: 'Tela Original (60 x 80 cm)',
        material: 'Chassi madeira 3.5cm + Acrílico',
        price: 850.0,
      },
    ],
  },
  {
    id: 'jardim-de-monet-giverny',
    title: 'Jardim Secreto em Giverny',
    category: 'prints',
    medium: 'Aquarela Botânica',
    originalMedium: 'Aquarela e guache sobre papel francês Arches',
    year: '2025',
    tag: 'Print Fine Art',
    badgeType: 'print',
    isNew: false,
    isAvailable: true,
    startingPrice: 32.0,
    basePrice: 32.0,
    type: 'print',
    shortDescription:
      'Estudo de salgueiros-chorões e reflexos de água inspirado na residência de Monet na França.',
    fullDescription:
      'Pintura feita durante a residência artística de verão. Uma explosão serena de verdes luminosos, texturas úmidas e poesia visual.',
    images: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?q=80&w=1000&auto=format&fit=crop',
    ],
    dimensionsInfo: 'Disponível em A6, A5, A4 e A3.',
    materialInfo:
      'Papel de fibra de algodão natural, acabamento aveludado mate.',
    shippingDays: '5 dias úteis.',
    sizes: [
      {
        id: 'A6',
        name: 'A6 (10,5 x 14,8 cm)',
        material: 'Papel Fine Art 250g',
        price: 22.0,
      },
      {
        id: 'A5',
        name: 'A5 (14,8 x 21,0 cm)',
        material: 'Papel Fine Art 250g',
        price: 32.0,
      },
      {
        id: 'A4',
        name: 'A4 (21,0 x 29,7 cm)',
        material: 'Papel 100% Algodão 308g',
        price: 60.0,
      },
      {
        id: 'A3',
        name: 'A3 (29,7 x 42,0 cm)',
        material: 'Papel 100% Algodão 308g',
        price: 105.0,
      },
    ],
  },
  {
    id: 'barcos-na-enseada-aquarela',
    title: 'Barcos na Enseada — Amanhecer',
    category: 'originais',
    medium: 'Aquarela Original',
    originalMedium: 'Aquarela pura sobre Arches Grain Torchon 300g',
    year: '2026',
    tag: 'Original',
    badgeType: 'original',
    isNew: true,
    isAvailable: true,
    startingPrice: 490.0,
    basePrice: 490.0,
    type: 'original',
    dimensions: '28cm x 38cm',
    shortDescription:
      'Pequenos barcos de pesca ancorados na névoa matinal com transições sutis de violeta e azul celeste.',
    fullDescription:
      'Trabalho original executado com a técnica wet-on-wet (molhado sobre molhado). Exibe as belas granulações de pigmentos minerais raros.',
    images: [
      'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1000&auto=format&fit=crop',
    ],
    dimensionsInfo:
      'Folha 28cm x 38cm com bordas rústicas naturais de papel artesanal.',
    materialInfo: 'Arches 100% Algodão 300g.',
    shippingDays: 'Pronta entrega (2 dias úteis).',
    sizes: [
      {
        id: 'UNICO',
        name: 'Original Único (28 x 38 cm)',
        material: 'Papel Arches 100% Algodão',
        price: 490.0,
      },
    ],
  },
  {
    id: 'casa-das-quatro-estacoes',
    title: 'Predinho do Dia — Janelas Amarelas',
    category: 'prints',
    medium: 'Aquarela Urbana',
    originalMedium: 'Aquarela e grafite',
    year: '2025',
    tag: 'Print Fine Art',
    badgeType: 'print',
    isNew: false,
    isAvailable: true,
    startingPrice: 30.0,
    basePrice: 30.0,
    type: 'print',
    shortDescription:
      'Estudo urbano em tons quentes de terracota, janelas iluminadas e atmosfera bucólica.',
    fullDescription:
      'Da consagrada série de ilustrações urbanas do ateliê. Reprodução fiel das texturas de aquarela e traços gestuais.',
    images: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop',
    ],
    dimensionsInfo: 'A6 até A3.',
    materialInfo: 'Impressão Giclée em papel algodão.',
    shippingDays: '5 dias úteis.',
    sizes: [
      {
        id: 'A6',
        name: 'A6 (10,5 x 14,8 cm)',
        material: 'Papel Fine Art 250g',
        price: 20.0,
      },
      {
        id: 'A5',
        name: 'A5 (14,8 x 21,0 cm)',
        material: 'Papel Fine Art 250g',
        price: 30.0,
      },
      {
        id: 'A4',
        name: 'A4 (21,0 x 29,7 cm)',
        material: 'Papel 100% Algodão 308g',
        price: 55.0,
      },
      {
        id: 'A3',
        name: 'A3 (29,7 x 42,0 cm)',
        material: 'Papel 100% Algodão 308g',
        price: 95.0,
      },
    ],
  },
  {
    id: 'serie-botanica-costela-de-adao',
    title: 'Folhagens e Luz Filtrada — Botânica I',
    category: 'prints',
    medium: 'Aquarela Botânica',
    originalMedium: 'Aquarela vegetal e pigmentos terrosos',
    year: '2026',
    tag: 'Novo!',
    badgeType: 'new',
    isNew: true,
    isAvailable: true,
    startingPrice: 28.0,
    basePrice: 28.0,
    type: 'print',
    shortDescription:
      'Transparências e sobreposição de folhas em verde musgo e oliva com toques dourados.',
    fullDescription:
      'Estudo da luz incidindo nas nervuras das folhas tropicais, com foco no balanço e serenidade visual.',
    images: [
      'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=1000&auto=format&fit=crop',
    ],
    dimensionsInfo: 'A6 até A3.',
    materialInfo: 'Papel 100% Algodão livre de ácido.',
    shippingDays: '5 dias úteis.',
    sizes: [
      {
        id: 'A6',
        name: 'A6 (10,5 x 14,8 cm)',
        material: 'Papel Fine Art 250g',
        price: 20.0,
      },
      {
        id: 'A5',
        name: 'A5 (14,8 x 21,0 cm)',
        material: 'Papel Fine Art 250g',
        price: 28.0,
      },
      {
        id: 'A4',
        name: 'A4 (21,0 x 29,7 cm)',
        material: 'Papel 100% Algodão 308g',
        price: 54.0,
      },
      {
        id: 'A3',
        name: 'A3 (29,7 x 42,0 cm)',
        material: 'Papel 100% Algodão 308g',
        price: 92.0,
      },
    ],
  },
] satisfies Artwork[];

// Dados para a página de Encomendas
export const COMMISSIONS_PAPER_SIZES = [
  {
    id: 'A4',
    label: 'A4 (21,0 x 29,7 cm)',
    desc: 'Tamanho padrão ideal para retratos individuais, fachadas e pequenos arranjos botânicos.',
  },
  {
    id: 'A3',
    label: 'A3 (29,7 x 42,0 cm)',
    desc: 'Tamanho amplo ideal para composições ricas, famílias, casarios e paisagens imponentes.',
  },
];

export const COMMISSIONS_PAPER_MATERIALS = [
  {
    id: 'celulose',
    label: 'Papel Celulose Premium (300g/m²)',
    desc: 'Excelente absorção, acabamento liso e cores vibrantes.',
    multiplierA4: 180.0,
    multiplierA3: 290.0,
  },
  {
    id: 'algodao',
    label: 'Papel 100% Algodão Arches/Saunders (300g/m²)',
    desc: 'Papel museológico francês/inglês, textura aveludada, máxima durabilidade centenária.',
    multiplierA4: 250.0,
    multiplierA3: 390.0,
  },
];

export const COMMISSIONS_CANVAS_SIZES = [
  {
    id: '50x70',
    label: '50cm x 70cm',
    name: 'Clássico Médio',
    basePrice: 650.0,
    aspect: '5 / 7',
    desc: 'Perfeito para cabeceiras, halls de entrada e composições em salas íntimas.',
  },
  {
    id: '70x100',
    label: '70cm x 100cm',
    name: 'Grande Retangular',
    basePrice: 1100.0,
    aspect: '7 / 10',
    desc: 'Formato imponente para salas de estar, escritórios e paredes de destaque.',
  },
  {
    id: '90x90',
    label: '90cm x 90cm',
    name: 'Quadrado Expressivo',
    basePrice: 1250.0,
    aspect: '1 / 1',
    desc: 'Equilíbrio visual contemporâneo com grande presença geométrica.',
  },
  {
    id: '100x100',
    label: '100cm x 100cm',
    name: 'Grande Contemporâneo',
    basePrice: 1500.0,
    aspect: '1 / 1',
    desc: 'Obra monumental que se torna o ponto focal absoluto de qualquer projeto de interiores.',
  },
  {
    id: '120x90',
    label: '120cm x 90cm',
    name: 'Painel Panorâmico',
    basePrice: 1750.0,
    aspect: '12 / 9',
    desc: 'Ideal para compor sobre sofás de 3 lugares ou mesas de jantar amplas.',
  },
];

// FAQ items para a página Sobre
export const FAQ_ITEMS = [
  {
    question: 'Como cuidar da minha pintura original em aquarela?',
    answer:
      'Aquarelas devem ser emolduradas sob vidro (de preferência vidro com proteção anti-reflexo e filtro UV) e com paspatur (passe-partout) livre de ácido para evitar que o papel toque diretamente no vidro. Nunca posicione a obra em locais onde incida luz solar direta contínua ou em ambientes excessivamente úmidos (como banheiros).',
  },
  {
    question:
      'Qual a diferença entre uma Obra Original e um Print Fine Art (Giclée)?',
    answer:
      'A Obra Original é uma peça física única e irrepetível, pintada diretamente à mão pela artista com camadas vivas de pigmentos nobres. O Print Fine Art é uma reprodução digital de alta resolução produzida com impressoras de 12 cores pigmentadas minerais sobre papéis nobres de algodão, oferecendo fidelidade cromática e durabilidade de mais de 100 anos por um valor mais acessível.',
  },
  {
    question:
      'Como funciona o processo de aprovação de uma encomenda sob medida?',
    answer:
      'Após o envio da sua ideia e confirmação do sinal de 50%, criamos um estudo/esboço digital ou em grafite para alinhamento de composição e paleta de cores. Somente após sua aprovação iniciamos a pintura final. Você acompanha fotos e vídeos do processo no ateliê!',
  },
  {
    question: 'Como as obras são embaladas para envio seguro?',
    answer:
      'Prints e aquarelas pequenas vão protegidos por papel de seda livre de ácido, embalagem plástica impermeável e sanduíche de placas rígidas de papelão duplex anti-dobra. Obras originais em telas são protegidas por plástico bolha reforçado, cantoneiras de espuma densa e caixa de papelão estruturado ou madeira.',
  },
  {
    question: 'Quais são as formas de pagamento aceitas?',
    answer:
      'Aceitamos Pix (com 5% de desconto automático), Cartão de Crédito em até 6x sem juros (ou 12x), e boleto bancário. Para encomendas personalizadas, o pagamento pode ser dividido em 50% de entrada + 50% na conclusão antes do envio.',
  },
] satisfies FaqItem[];

// Instagram Feed posts para emular o feed da @meu.eeu (igual ao print 3)
export const INSTAGRAM_POSTS = [
  {
    id: 'ig-1',
    image:
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600&auto=format&fit=crop',
    title: 'Aquarela arquitetônica em processo',
    likes: 428,
    comments: 34,
    isVideo: false,
    text: 'Emerald Lake and imagination. 41 x 31 cm. Saunders Waterford Rough Texture.',
  },
  {
    id: 'ig-2',
    image:
      'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?q=80&w=600&auto=format&fit=crop',
    title: 'Texturas de água no Guaíba',
    likes: 612,
    comments: 51,
    isVideo: false,
    text: 'A leveza das manchas úmidas que só a água tem o poder de criar.',
  },
  {
    id: 'ig-3',
    image:
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop',
    title: 'Residência artística e natureza',
    likes: 890,
    comments: 72,
    isVideo: false,
    text: '1 semana de aquarela — workshop na França e estudos de luz natural.',
  },
  {
    id: 'ig-4',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    title: 'Maria no ateliê',
    likes: 1240,
    comments: 110,
    isVideo: false,
    text: 'curso de aquarela e vivência criativa em Giverny @meu.eeu',
  },
  {
    id: 'ig-5',
    image:
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=600&auto=format&fit=crop',
    title: 'Pintando ao ar livre (plein air)',
    likes: 955,
    comments: 63,
    isVideo: true,
    text: 'Vídeo: O som dos pincéis e a paleta de cores ganhando vida no papel.',
  },
  {
    id: 'ig-6',
    image:
      'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=600&auto=format&fit=crop',
    title: 'Detalhes e caligrafia à mão',
    likes: 740,
    comments: 49,
    isVideo: false,
    text: 'Assinatura e detalhes finais em guache e bico de pena.',
  },
  {
    id: 'ig-7',
    image:
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=600&auto=format&fit=crop',
    title: 'Barcos e marinhas em tons frios',
    likes: 830,
    comments: 58,
    isVideo: false,
    text: 'Pintura sob encomenda entregue para um lar cheio de memórias de praia.',
  },
  {
    id: 'ig-8',
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop',
    title: 'Mesa de trabalho com tintas e pincéis',
    likes: 1150,
    comments: 92,
    isVideo: false,
    text: 'Meu cantinho sagrado onde as ideias se transformam em matéria e cor.',
  },
] satisfies InstagramPost[];
