import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductDetail from '@/components/ProductDetail';
import { ARTWORKS } from '@/data/artworks';

type ArtworkPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return ARTWORKS.map(({ id }) => ({ slug: id }));
}

export async function generateMetadata({
  params,
}: ArtworkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const artwork = ARTWORKS.find(({ id }) => id === slug);

  if (!artwork) return { title: 'Obra não encontrada — meu.eeu' };

  return {
    title: `${artwork.title} — meu.eeu`,
    description: artwork.shortDescription,
    openGraph: {
      title: `${artwork.title} — meu.eeu`,
      description: artwork.shortDescription,
      images: [artwork.images[0]],
    },
  };
}

export default async function ArtworkRoute({ params }: ArtworkPageProps) {
  const { slug } = await params;
  const artwork = ARTWORKS.find(({ id }) => id === slug);

  if (!artwork) notFound();

  return <ProductDetail key={artwork.id} artwork={artwork} />;
}
