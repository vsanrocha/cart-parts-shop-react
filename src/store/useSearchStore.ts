import { create } from 'zustand';
import { SearchParams } from '@/types/common';

interface SearchState extends SearchParams {
  setSearchTerm: (term: string) => void;
  setSortBy: (sortBy: string) => void;
  setSort: (sort: 'asc' | 'desc') => void;
  resetSearch: () => void;
}

const initialState: Omit<SearchState, 'setSearchTerm' | 'setSortBy' | 'setSort' | 'resetSearch'> = {
  searchTerm: '',
  sort: 'desc',
  sortBy: 'pixPrice',
};

export const useSearchStore = create<SearchState>()((set) => ({
  ...initialState,

  setSearchTerm: (searchTerm) => set({ searchTerm }),
  
  setSortBy: (sortBy) => set({ sortBy }),
  
  setSort: (sort) => set({ sort }),
  
  resetSearch: () => set(initialState),
}));
