import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Import slick carousel CSS

interface Movies {
  id: number;
  title: string;
  imageUrl: string;
  poster_path: string
}

interface CarouselProps {
  movies: Movies[];
}

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} slick-prev custom-arrow`}
      style={{ ...style, display: "block", background: "gray", borderRadius: "50%" }}
      onClick={onClick}
    >
      Prev
    </button>
  );
};

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} slick-next custom-arrow`}
      style={{ ...style, display: "block", background: "gray", borderRadius: "50%" }}
      onClick={onClick}
    >
      Next
    </button>
  );
};

const Carousel: React.FC<CarouselProps> = ({ movies }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <PrevArrow />, // Custom Previous Arrow
    nextArrow: <NextArrow />, // Custom Next Arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id} className="p-4">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path} `} alt={movie.title}
              className="w-full h-64  rounded-lg"
            />
            <h3 className="mt-2 text-[16px] text-[#FFD700] font-medium ">{movie.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
