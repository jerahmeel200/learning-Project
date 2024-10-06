import { fetchTrending } from "@/components/utils/tmdbService";
import React, { useEffect, useState } from "react";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    const trending = await fetchTrending();
    setMovies(trending);
  };

  useEffect(() => {
    fetchMovies();
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % movies.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [movies.length]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="relative h-screen w-full">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className={`absolute inset-0 transition-opacity duration-[4000ms] ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
              <h2 className="text-4xl text-white font-bold">{movie.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {movies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-4 w-4 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
