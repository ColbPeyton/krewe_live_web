import CarouselContainer from "./ui/carousel-container";
import PageTitle from "./ui/page-title";

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

export default function Home() {
  return (
    <div className="text-center">
      <PageTitle title={"Bringing to life awe-inspiring set designs with exceptional execution"} />
      <CarouselContainer images={images} />
    </div>
  );
}
