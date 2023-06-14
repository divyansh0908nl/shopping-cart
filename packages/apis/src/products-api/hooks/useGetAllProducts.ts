import { AxiosError } from 'axios';

import { useQuery } from '@jadoo/services';

import { IProduct } from '../../../types';

import { PRODUCTS_API } from '../products';

/**
 * This is to track the product's react query cached data
 */
const GET_ALL_PRODUCTS_QUERY_KEY = 'get_all_products';

interface IUseGetAllProductsOptions {
  /**
   * Options for the useGetAllProducts hook.
   * @interface IUseGetAllProductsOptions
   * @property {Function} [onSuccess] - Callback function called when the
   * products data is successfully fetched.
   * @property {Function} [onError] - Callback function called when an error
   * occurs during the data fetching process.
   */
  onSuccess?: (products: IProduct[]) => void;
  onError?: (error: AxiosError) => void;
}

/**
 * Custom hook for fetching all products data using a query.
 * Returns the data, error, isError, and isLoading status.
 * @param IUseGetAllProductsOptions
 */
export function useGetAllProducts({
  onSuccess,
  onError,
}: IUseGetAllProductsOptions) {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: [GET_ALL_PRODUCTS_QUERY_KEY],
    queryFn: () => PRODUCTS_API.getAllProducts(),
    onSuccess,
    onError,
  });

  return { data, error, isError, isLoading };
}
