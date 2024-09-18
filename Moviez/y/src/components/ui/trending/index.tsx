"use client";

import { useEffect, useState } from "react";
import Carousel from "../reuse/Carousel";
import Title from "../reuse/Title";
import { fetchTrending } from "@/components/utils/tmdbService";

export default function Home() {
  const [movies, setMovies] = useState([]);
  console.log("movies", movies);
  useEffect(() => {
    const fetchMovies = async () => {
      const tendingMovies = await fetchTrending();

      setMovies(tendingMovies);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <div className="px-10 py-5  mx-auto max-w-[1920px]">
        <div className="ml-4">
          <Title text="Trending" />
        </div>

        <Carousel movies={movies} />
      </div>
    </>
  );
}
