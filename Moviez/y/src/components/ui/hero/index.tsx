import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Slide 1",
    description: "This is the first slide",
    image: "https://cdn.movies.how/images/movie/235687/backdrop-1280x720.jpg",
  },
  {
    id: 2,
    title: "Slide 2",
    description: "This is the second slide",
    image: "https://cdn.movies.how/images/movie/239131/backdrop-1280x720.jpg",
  },
  {
    id: 3,
    title: "Slide 3",
    description: "This is the third slide",
    image: "https://cdn.movies.how/images/movie/217856/backdrop-1280x720.jpg",
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };
  return (
    <div className="bg-red-700 relative w-[100%] overflow-hidden mx-auto ">
      <div className="relative h-[400px]  `">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-[4000ms] ease-in-out  ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img src={slide.image} className="w-full h-full " alt="" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
              <h2 className="text-4xl text-white font-bold">{slide.title}</h2>
              <p className="text-white text-lg mt-2">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button onClick={handlePrev} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full z-[10000] ">
        <ChevronLeft />
      </button>
      <button onClick={handleNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full z-[10000]">
        <ChevronRight />
      </button>

      {/* dot navigation */}

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button key={index} onClick={()=> setCurrentSlide(index)} className={`h-4 w-4 rounded-full ${index === currentSlide ? "bg-white z-[10000]" : "bg-gray-500 z-[10000]"}`}/>
        ))}
      </div>
    </div>
  );
};

export default Hero;
