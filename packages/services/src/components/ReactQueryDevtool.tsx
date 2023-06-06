import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';

/**
 * -----------------------------------------------------------------------------
 * This creates the React Query Dev tools for Debugging React Query
 */
export function ReactQueryDevtool() {
  return <ReactQueryDevtools initialIsOpen={false} />;
}
