import { ReactNode } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { ReactQueryDevtool } from './ReactQueryDevtool';

export interface IReactQueryProviderProps {
  /**
   * The children elements to consume the provider content.
   */
  children: ReactNode;
}

/**
 * -----------------------------------------------------------------------------
 * This creates a react query client.
 * Please configure all the global parameters to the query here.
 */
const queryClient = new QueryClient();

/**
 * -----------------------------------------------------------------------------
 * This wraps around the parts of the application i.e. children that should
 * consume to get access to the query client and cache.
 *
 * @param IReactQueryProviderProps
 * @returns
 */
export function ReactQueryProvider({ children }: IReactQueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtool />
    </QueryClientProvider>
  );
}
