// @vitest-environment jsdom

import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { afterEach, expect, it, vi } from 'vitest';
import { CartProvider, useCart } from '../src/context/CartContext';
import type { CartItem } from '../src/types';

const STORAGE_KEY = 'meu_eeu_cart';

const savedItem: CartItem = {
  artworkId: 'obra-salva',
  title: 'Obra salva',
  image: '/obra.jpg',
  sizeId: 'A4',
  material: 'Papel Fine Art',
  unitPrice: 30,
  quantity: 2,
  type: 'print',
};

function CartProbe() {
  const { addToCart, subtotal, totalItems } = useCart();

  return (
    <>
      <output data-testid="cart-summary">
        {totalItems}|{subtotal}
      </output>
      <button
        onClick={() =>
          addToCart({
            artworkId: 'nova-obra',
            title: 'Nova obra',
            image: '/nova.jpg',
            sizeId: 'A5',
            material: 'Papel Fine Art',
            unitPrice: 20,
            type: 'print',
          })
        }
      >
        Adicionar obra
      </button>
    </>
  );
}

afterEach(() => {
  cleanup();
  localStorage.clear();
  vi.restoreAllMocks();
});

it('não sobrescreve o carrinho salvo antes de concluir a hidratação', async () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([savedItem]));
  const setItem = vi.spyOn(Storage.prototype, 'setItem');

  render(
    <CartProvider>
      <CartProbe />
    </CartProvider>,
  );

  expect(setItem).not.toHaveBeenCalled();

  await waitFor(() => {
    expect(screen.getByTestId('cart-summary').textContent).toBe('2|60');
  });
  expect(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')).toEqual([
    savedItem,
  ]);
});

it('persiste alterações feitas depois da hidratação', async () => {
  render(
    <CartProvider>
      <CartProbe />
    </CartProvider>,
  );

  await waitFor(() => {
    expect(screen.getByTestId('cart-summary').textContent).toBe('0|0');
  });

  fireEvent.click(screen.getByRole('button', { name: 'Adicionar obra' }));

  await waitFor(() => {
    expect(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')).toEqual([
      expect.objectContaining({
        artworkId: 'nova-obra',
        quantity: 1,
      }),
    ]);
  });
});
