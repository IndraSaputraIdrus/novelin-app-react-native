import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { NovelContent } from "typings";

type Props = {
  body: {
    slug: string;
    chapter: number;
  };
};

const useFetch = ({ body }: Props) => {
  const [data, setData] = useState<NovelContent[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = process.env.EXPO_PUBLIC_API_URL;

  const options: AxiosRequestConfig = {
    method: "POST",
    url: url + "api/novel",
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
