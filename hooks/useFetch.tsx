import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Novel } from "../typings";

type Props = {
  endpoint: string;
  method: "GET" | "POST";
  body?: {
    slug: string;
    viewAll?: boolean;
    chapter?: number;
  };
};

const useFetch = ({ endpoint, method, body }: Props) => {
  const [data, setData] = useState<Novel[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options: AxiosRequestConfig = {
    method: method,
    url: process.env.EXPO_PUBLIC_BASE_URL + endpoint,
    data: body,
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      if (!response.data.data) throw new Error("Novel is not exist");
      setData(response.data.data);
      setIsLoading(false);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
