import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { Product } from '@/types/Product';
import { SearchParams } from '@/types/common';

const API_URL = 'http://localhost:3000/api';

interface UseProductsOptions extends SearchParams {
  enabled?: boolean;
}

export const useProducts = (options: UseProductsOptions = {}) => {
  const { searchTerm, sort, sortBy, enabled = true } = options;

  return useQuery<Product[], AxiosError>({
    queryKey: ['products', { searchTerm, sort, sortBy }],
    queryFn: async () => {
      const { data } = await axios.get<Product[]>(`${API_URL}/products`, {
        params: {
          search: searchTerm,
        },
      });
      return data;
    },
    enabled,
  });
};
