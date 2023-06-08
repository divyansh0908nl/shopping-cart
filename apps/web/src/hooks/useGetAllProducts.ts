import { useQuery } from '@jadoo/services';

import { getAllProducts } from '../API/products';

export const useGetAllProducts = (onSuccess = () => {}, onError = () => {}) => {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ['allProducts'],
    queryFn: getAllProducts,
    onSuccess,
    onError,
  });
  return { data, error, isError, isLoading };
};
