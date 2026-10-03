import type { Metadata } from 'next';
import AboutPage from '@/components/AboutPage';

export const metadata: Metadata = {
  title: 'Sobre a artista — meu.eeu',
  description:
    'Conheça Maria, seu processo artístico e os cuidados com obras Fine Art do ateliê meu.eeu.',
};

export default function AboutRoute() {
  return <AboutPage />;
}
