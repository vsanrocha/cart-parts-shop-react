import { describe, it, expect, beforeEach } from 'vitest';
import { useCartStore } from './useCartStore';

const mockProduct = {
  id: '1',
  name: 'Test Product',
  brand: 'Test Brand',
  code: 'TEST123',
  price: 100,
  pixPrice: 90,
  pixDiscount: 10,
  image: '/test.png',
  hasExpressShipping: true,
  installments: {
    number: 10,
    value: 10
  }
};

describe('useCartStore', () => {
  beforeEach(() => {
    localStorage.clear();
    useCartStore.getState().clearCart();
  });

  it('should add item to cart', () => {
    useCartStore.getState().addItem(mockProduct);
    
    const { items } = useCartStore.getState();
    expect(items).toHaveLength(1);
    expect(items[0]).toEqual({ ...mockProduct, quantity: 1 });
  });
});
