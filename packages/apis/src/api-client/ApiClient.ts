import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

import { IApiResponse } from '../../types';

/**
 * -----------------------------------------------------------------------------
 * This is the base class to be extended by all the other API clients.
 * It's the direct gateway to axios methods and creates type-safe wrappers
 * around the axios methods to be implemented by the instance clients
 * - such as the `useGetAllProducts`.
 */
export abstract class APIClient {
  protected readonly axiosInstance: AxiosInstance;

  public constructor(baseURL: string) {
    /**
     * creates an AxiosInstance
     */
    this.axiosInstance = axios.create({
      baseURL,
    });
  }

  /**
   * Wrapper around the axios post request to `GET` request calls to the axios
   * client.
   *
   * @param url The URL of the request
   * @returns
   */
  public async get<TResponseData = any>({
    url,
  }: {
    url: string;
  }): Promise<IApiResponse<TResponseData> | AxiosError> {
    try {
      return this.axiosInstance.get<TResponseData, IApiResponse<TResponseData>>(
        url
      );
    } catch (error) {
      return error as AxiosError;
    }
  }

  /**
   * Wrapper around the axios post request to `POST` request calls to the axios
   * client.
   *
   * @param url The URL of the request
   * @param payload
   * @returns
   */
  public async post<TResponseData = any, TRequestPayload = any>(
    url: string,
    payload: TRequestPayload
  ): Promise<IApiResponse<TResponseData> | AxiosError> {
    try {
      const response: AxiosResponse<TResponseData> =
        await this.axiosInstance.post(url, payload);

      return response;
    } catch (error) {
      return error as AxiosError;
    }
  }
}
