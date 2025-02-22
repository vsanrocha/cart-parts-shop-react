import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from './ProductCard';
import { mockProducts } from '../../test/mocks/handlers';
import { useCartStore } from '../../store/useCartStore';

describe('ProductCard', () => {
  beforeEach(() => {
    localStorage.clear();
    useCartStore.getState().clearCart();
  });

  it('should render loading skeleton', () => {
    render(<ProductCard isLoading />);
    expect(screen.getByTestId('product-card-skeleton')).toBeInTheDocument();
  });

  it('should render product information', () => {
    const product = mockProducts[0];
    render(<ProductCard product={product} />);

    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText(product.brand)).toBeInTheDocument();
    expect(screen.getByText(`Cod.: ${product.code}`)).toBeInTheDocument();
    expect(screen.getByText(`${product.pixDiscount}% OFF NO PIX`)).toBeInTheDocument();
  });

  it('should add product to cart', () => {
    const product = mockProducts[0];
    render(<ProductCard product={product} />);

    const addButton = screen.getByText('Adicionar ao Carrinho');
    fireEvent.click(addButton);

    const store = useCartStore.getState();
    expect(store.items).toHaveLength(1);
    expect(store.items[0]).toEqual({ ...product, quantity: 1 });
  });

  it('should show quantity controls after adding to cart', () => {
    const product = mockProducts[0];
    render(<ProductCard product={product} />);

    const addButton = screen.getByText('Adicionar ao Carrinho');
    fireEvent.click(addButton);

    expect(screen.getByLabelText('Aumentar quantidade')).toBeInTheDocument();
    expect(screen.getByLabelText('Diminuir quantidade')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('should increase and decrease quantity', () => {
    const product = mockProducts[0];
    render(<ProductCard product={product} />);

    const addButton = screen.getByText('Adicionar ao Carrinho');
    fireEvent.click(addButton);

    const increaseButton = screen.getByLabelText('Aumentar quantidade');
    fireEvent.click(increaseButton);
    expect(screen.getByText('2')).toBeInTheDocument();

    const decreaseButton = screen.getByLabelText('Diminuir quantidade');
    fireEvent.click(decreaseButton);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('should show express shipping badge when available', () => {
    const product = mockProducts[0];
    render(<ProductCard product={product} />);
    expect(screen.getByText('Express')).toBeInTheDocument();
  });

  it('should not show express shipping badge when unavailable', () => {
    const product = mockProducts[1]; 
    render(<ProductCard product={product} />);
    expect(screen.queryByText('Express')).not.toBeInTheDocument();
  });
});
