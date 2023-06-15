import { AxiosResponse } from 'axios';

export interface IProduct {
  /*
   * Defines a product type with an
   * id, name, image URL, unit price, and quantity
   */
  _id: string;
  name: string;
  image: string;
  unitPrice: number;
  quantity: number;
  description: string;
}

/**
 * Defines the type of response received on successfully API request
 */
export interface IApiResponse<TResponseData> extends AxiosResponse {
  data: TResponseData;
}
