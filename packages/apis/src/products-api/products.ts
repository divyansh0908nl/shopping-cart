import { AxiosError } from 'axios';

import { IProduct } from '../../types';

import { APIClient } from '../api-client';

/**
 * This is provides the API client methods related to products
 */
class ProductsApiClient extends APIClient {
  private static classInstance?: ProductsApiClient;

  private constructor() {
    /**
     * call parent class constructor with base url for api call
     * @parentClass APIClient
     */
    super('http://192.168.31.44:5000');
  }

  /**
   * Applying the dreaded singleton pattern here to reuse the axios instance.
   */
  public static getClientInstance = () => {
    if (!this.classInstance) {
      this.classInstance = new ProductsApiClient();
    }

    return this.classInstance;
  };

  /**
   * Fetch products data
   */
  async getAllProducts(): Promise<IProduct[]> {
    const response = await this.get<IProduct[]>({
      url: '/api/products',
    });

    if (response instanceof AxiosError) throw response;

    return response.data;
  }
}
/**
 * This creates a new instance of the class from th base Axios API client Class
 * wrapper for product related requests.
 */
export const PRODUCTS_API = ProductsApiClient.getClientInstance();
