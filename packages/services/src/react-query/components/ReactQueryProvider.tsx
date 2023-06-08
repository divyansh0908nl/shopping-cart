import { ReactNode } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { ReactQueryDevtool } from './ReactQueryDevtool';

export interface ReactQueryProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

export function ReactQueryProvider({ children }: ReactQueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtool />
    </QueryClientProvider>
  );
}
