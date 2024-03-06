import SectionTitle from "../ui/section-title";
import CarouselContainer from "../ui/carousel-container";
import { UserIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

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

interface Props{
    title: string;
    audienceCount: string;
    eventSize: string;
    summary: string
}

const PortfolioItem:React.FC<Props> = ({title, audienceCount, eventSize, summary}) => {
    return(
        <>
            <SectionTitle title={title} size="md"/>
            <div className='ml-2 mb-2 flex items-center'>
            <UserIcon className="h-6 w-6 inline"/>
            <span className='text-xl leading-9 font-light text-gray-900 sm:text-1xl sm:tracking-tight'>
                {`: ${audienceCount}`}
            </span> 
            </div>
            <div className='ml-2 mb-2 flex items-center'>
            <BuildingOfficeIcon className="h-6 w-6 inline"/>
            <span className='text-xl leading-9 font-light text-gray-900 sm:text-1xl sm:tracking-tight'>
            {`: ${eventSize}`}
            </span> 
            </div>
            <div className='ml-2 mb-2'>
                <h4 className='text-lg leading-9 font-light text-gray-900 sm:text-1xl sm:tracking-tight'>
                    {summary}
                </h4> 
            </div>
            <CarouselContainer images={images} />
        </>
    )
}

export default PortfolioItem