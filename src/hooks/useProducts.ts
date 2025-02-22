import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Product } from '@/types/Product';

const API_URL = 'http://localhost:3000/api';

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}/products`);
      return data;
    },
  });
};
