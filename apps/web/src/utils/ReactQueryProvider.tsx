import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

interface IReactQueryProviderProps {
    /**
     * The children elements to consume the provider content.
     */
    children: ReactNode;
  }
export const ReactQueryProvider = ({ children }: IReactQueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
