import { useEffect, useState } from "react";
import { PokeTypes } from "../types/pokeTypes";

interface DefaultValues {
  data: null | PokeCustom;
  isLoading: boolean;
  error: boolean;
  errorMessage: null | ErrorValue;
}

export type PokeCustom = {
  name: string;
  sprites: {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
  };
};

type ErrorValue = {
  code: number;
  message: string;
};

const useFetch = (url: string) => {
  const [dataFetch, setDataFetch] = useState<DefaultValues>({
    data: null,
    isLoading: true,
    error: false,
    errorMessage: null,
  });

  useEffect(() => {
    handleFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const setLoadingState = () => {
    setDataFetch({
      data: null,
      isLoading: true,
      error: false,
      errorMessage: null,
    });
  };

  const handleFetch = async () => {
    setLoadingState();
    const response = await fetch(url);
    // await new Promise((resolve) => setTimeout(resolve, 1500));
    if (!response.ok) {
      setDataFetch({
        data: null,
        isLoading: false,
        error: true,
        errorMessage: {
          code: response.status,
          message: response.statusText,
        },
      });
    }
    const data: PokeTypes = await response.json();
    const object = {
      name: data.name,
      sprites: {
        back_default: data.sprites.back_default,
        back_shiny: data.sprites.back_shiny,
        front_default: data.sprites.front_default,
        front_shiny: data.sprites.front_shiny,
      },
    };
    setDataFetch({
      ...dataFetch,
      isLoading: false,
      error: false,
      data: object,
    });
  };

  return {
    data: dataFetch.data,
    isLoading: dataFetch.isLoading,
    error: dataFetch.error,
  };
};

export default useFetch;
