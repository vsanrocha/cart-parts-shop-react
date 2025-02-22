export interface Product {
  id: string;
  image: string;
  brand: string;
  name: string;
  code: string;
  price: number;
  hasExpressShipping: boolean;
  pixDiscount: number;
  pixPrice: number;
  installments: {
    number: number;
    value: number;
  };
}
