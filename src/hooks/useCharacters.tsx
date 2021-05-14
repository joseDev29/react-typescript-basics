import { useState, useEffect, useRef } from "react";
import { RickAndMortyApi } from "../api/RickAndMortyApi";
import { Character, CharacterListRequest } from "../interfaces/RickAndMortyApi";

type PaginateState = "all" | "previous" | "next";

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const [paginate, setPaginate] = useState<PaginateState>("next");

  const pageRef = useRef<number>(1);

  const loadCharacters = async () => {
    const res = await RickAndMortyApi.get<CharacterListRequest>("/character", {
      params: {
        page: pageRef.current,
      },
    });

    if (res.data.results.length) {
      setCharacters(res.data.results);

      if (pageRef.current === 1) setPaginate("next");
      else if (!res.data.info.next) setPaginate("previous");
      else setPaginate("all");
    } else {
      setPaginate("previous");
      pageRef.current--;
    }
  };

  const nextPage = () => {
    pageRef.current++;
    loadCharacters();
  };

  const previousPage = () => {
    if (pageRef.current > 1) {
      pageRef.current--;
      loadCharacters();
    }
  };

  useEffect(() => {
    loadCharacters();
  }, []);

  return {
    characters,
    nextPage,
    previousPage,
    page: pageRef.current,
    paginate,
  };
};
