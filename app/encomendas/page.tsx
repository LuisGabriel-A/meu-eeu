import type { Metadata } from 'next';
import CommissionsPage from '@/components/CommissionsPage';

export const metadata: Metadata = {
  title: 'Encomendas personalizadas — meu.eeu',
  description:
    'Configure uma encomenda de aquarela ou tela personalizada com o ateliê meu.eeu.',
};

export default function CommissionsRoute() {
  return <CommissionsPage />;
}
