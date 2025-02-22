export type LoadingState = 'idle' | 'loading' | 'error' | 'success';

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
  total: number;
}

export interface SearchParams {
  searchTerm?: string;
  sort?: 'asc' | 'desc';
  sortBy?: string;
}
