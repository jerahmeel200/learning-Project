import Carousel from "../reuse/Carousel";
import Title from "../reuse/Title";

 

const products = [
  {
    id: 1,
    title: 'Product 1',
    imageUrl: 'https://cdn.movies.how/images/movie/235687/backdrop-1280x720.jpg',
    
  },
  {
    id: 2,
    title: 'Product 2',
    imageUrl: 'https://cdn.movies.how/images/movie/239131/backdrop-1280x720.jpg',
    
  },
  {
    id: 3,
    title: 'Product 3',
    imageUrl: 'https://cdn.movies.how/images/movie/217856/backdrop-1280x720.jpg',
    
  },
  {
    id: 3,
    title: 'Product 4',
    imageUrl: 'https://cdn.movies.how/images/movie/239131/backdrop-1280x720.jpg',
    
  },
  {
    id: 3,
    title: 'Product 5',
    imageUrl: 'https://cdn.movies.how/images/movie/217856/backdrop-1280x720.jpg',
    
  },
  {
    id: 3,
    title: 'Product 6',
    imageUrl: 'https://cdn.movies.how/images/movie/239131/backdrop-1280x720.jpg',
    
  },
  {
    id: 3,
    title: 'Product 7',
    imageUrl: 'https://cdn.movies.how/images/movie/239131/backdrop-1280x720.jpg',
    
  },
  {
    id: 3,
    title: 'Product 8',
    imageUrl: 'https://cdn.movies.how/images/movie/217856/backdrop-1280x720.jpg',
    
  },
  
];

export default function Home() {
  return (
    <>
    <div className="px-10 py-5  mx-auto max-w-[1920px]">
     <div className="ml-4">
    <Title text="Trending"/>

     </div>
    

      <Carousel products={products} />
 
    </div>
    </>
    
  );
}
