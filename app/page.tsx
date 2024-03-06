import CarouselContainer from "./ui/carousel-container";
import Link from "next/link";
import ContactBox from "./ui/contact-box";

const images = [
  {
    id: '1',
    url: '/assets/images/placeholder_hero.png',
    alt: 'placeholder 1'
  },
  {
    id: '2',
    url: '/assets/images/placeholder_hero.png',
    alt: 'placeholder 2'
  },
  {
    id: '3',
    url: '/assets/images/placeholder_hero.png',
    alt: 'placeholder 3'
  },
  {
    id: '4',
    url: '/assets/images/placeholder_hero.png',
    alt: 'placeholder 4'
  },
]
// bg-gradient-to-b from-yellow-500 to-orange-700

export default function Home() {
  return (
    <div className="mt-2">
      <div className="w-full flex items-center justify-center">
        <div className="text-center my-4 shadow-lg w-96 rounded-md p-3 border-solid rounded bg-gradient-to-b from-neutral-600 to-stone-200 text-white">
          <h1 className="font-medium text-3xl">Welcome To Krewe Live</h1>
            <h4 className="font-normal italic text-yellow-500 text-xl	">"It all begins right here"</h4>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col text-center mb-3">
        <p className="mb-3 mx-2 text-xl leading-9 font-light text-gray-900 sm:text-1xl sm:tracking-tight">
          Krewe Live, where three decades of passion and expertise converge to elevate your productions 
          to unparalleled heights. As a premier provider of comprehensive production solutions, we 
          specialize in delivering top-tier resources, audiovisual excellence, captivating stage set 
          designs, and skilled production staffing. 
        </p>
        <Link type="button" href='/about' className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white py-2 px-4 rounded-md">
          Learn More
        </Link>
      </div>
      <CarouselContainer images={images} />
      <div className="flex items-center justify-center flex-col text-center my-3">
        <p className="mb-3 mx-2 text-xl leading-9 font-light text-gray-900 sm:text-1xl sm:tracking-tight">
          Discover the Magic Behind Krewe Live! Click here to explore our captivating portfolio 
          and witness the essence of creativity brought to life.
        </p>
        <Link type="button" href='/portfolio' className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-2 px-4 rounded-md">
          Our Work
        </Link>
      </div>

      <div className="flex items-center justify-center mb-2">
        <ContactBox />
      </div>
    </div>
  );
}
