import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Import slick carousel CSS

interface Product {
  id: number;
  title: string;
  imageUrl: string;
}

interface CarouselProps {
  products: Product[];
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

const Carousel: React.FC<CarouselProps> = ({ products }) => {
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
        {products.map((product) => (
          <div key={product.id} className="p-4">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="mt-2 text-sm font-medium text-center">{product.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
