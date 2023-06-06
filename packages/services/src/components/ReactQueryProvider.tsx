import React from 'react';
import { ReactNode } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtool } from './ReactQueryDevtool';



export interface ReactQueryProviderProps {
    children: ReactNode;
}
const queryClient = new QueryClient();
export function ReactQueryProvider(props: ReactQueryProviderProps) {
    const { children } = props;
    
    return (
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtool />
      </QueryClientProvider>
    );
  }