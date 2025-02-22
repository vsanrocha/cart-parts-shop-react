import { http, HttpResponse } from 'msw';
import { Product } from '@/types/Product';

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Óleo de Motor 5W30 Sintético",
    brand: "Shell",
    code: "SH5W30",
    price: 49.90,
    pixPrice: 44.91,
    pixDiscount: 10,
    installments: {
      number: 10,
      value: 4.99
    },
    image: "/images/oil-5w30.jpg",
    hasExpressShipping: true
  },
  {
    id: "2",
    name: "Filtro de Óleo",
    brand: "Fram",
    code: "PH7317",
    price: 29.90,
    pixPrice: 26.91,
    pixDiscount: 10,
    installments: {
      number: 5,
      value: 5.98
    },
    image: "/images/oil-filter.jpg",
    hasExpressShipping: false
  }
];

export const handlers = [
  http.get('http://localhost:3000/api/products', () => {
    return HttpResponse.json(mockProducts);
  }),

  http.get('http://localhost:3000/api/products/search', ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('search')?.toLowerCase();

    if (!searchTerm) {
      return HttpResponse.json(mockProducts);
    }

    const filteredProducts = mockProducts.filter(product => 
      product.name.toLowerCase().includes(searchTerm) || 
      product.brand.toLowerCase().includes(searchTerm) ||
      product.code.toLowerCase().includes(searchTerm)
    );

    return HttpResponse.json(filteredProducts);
  })
];