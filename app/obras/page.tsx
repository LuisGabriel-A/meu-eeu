import type { Metadata } from 'next';
import { Suspense } from 'react';
import GalleryStore from '@/components/GalleryStore';

export const metadata: Metadata = {
  title: 'Obras — meu.eeu',
  description:
    'Explore os prints Fine Art e as obras originais do ateliê meu.eeu.',
};

export default function ObrasPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          Carregando catálogo…
        </div>
      }
    >
      <GalleryStore />
    </Suspense>
  );
}
