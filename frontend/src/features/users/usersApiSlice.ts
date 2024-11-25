import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import type { User } from "./types";

const baseUrl = import.meta.env.VITE_BASE_URL;

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: axiosBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    fetchUsers: builder.query<User[], void>({
      query: () => ({ url: "/users", method: "get" }),
    }),
    fetchUserById: builder.query<User, number>({
      query: (id) => ({ url: `/users/${id}`, method: "get" }),
    }),
    updateUser: builder.mutation<User, Partial<User>>({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: "put",
        data: user,
      }),
    }),
  }),
});

export const {
  useFetchUsersQuery,
  useFetchUserByIdQuery,
  useUpdateUserMutation,
} = usersApi;
