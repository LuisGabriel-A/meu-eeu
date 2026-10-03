import { Suspense } from 'react';
import GalleryStore from '@/components/GalleryStore';

export default function HomePage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          Carregando galeria…
        </div>
      }
    >
      <GalleryStore />
    </Suspense>
  );
}
