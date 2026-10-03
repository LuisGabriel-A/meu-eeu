import type { ReactElement } from 'react';
import { expect, it } from 'vitest';
import ArtworkRoute, {
  generateMetadata,
  generateStaticParams,
} from '../app/obras/[slug]/page';
import { ARTWORKS } from '../src/data/artworks';
import type { Artwork } from '../src/types';

it('gera parâmetros estáticos para todas as obras do catálogo', () => {
  expect(generateStaticParams()).toEqual(
    ARTWORKS.map(({ id }) => ({ slug: id })),
  );
});

it('renderiza cada rota estática usando os metadados da obra correspondente', async () => {
  for (const artwork of ARTWORKS) {
    const params = Promise.resolve({ slug: artwork.id });
    const page = await ArtworkRoute({ params });
    const metadata = await generateMetadata({ params });

    expect((page as ReactElement<{ artwork: Artwork }>).props.artwork).toBe(
      artwork,
    );
    expect(metadata).toMatchObject({
      title: `${artwork.title} — meu.eeu`,
      description: artwork.shortDescription,
    });
  }
});
