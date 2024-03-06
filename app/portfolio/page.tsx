import PageTitle from "../ui/page-title";
import SectionTitle from "../ui/section-title";
import PortfolioItem from "./portfolio-item";
import ContactBox from "../ui/contact-box";

export default function Gallery() {
  return (
    <div className="">
      <PageTitle 
        title={"Bringing to life awe-inspiring set designs with exceptional execution"} 
        colorThemeFrom='from-yellow-500'
        colorThemeTo='to-orange-700'
      />
      <div className="mt-2" />
      <SectionTitle title={'The Krewe Way'} />
      <div className='ml-2 mb-2'>
          <h4 className='text-xl leading-9 font-light text-gray-900 sm:text-1xl sm:tracking-tight'>
            Where every frame, every note, and every detail reflects our dedication to excellence. 
            Explore the culmination of our passion and expertise in audio, visual, stage set design, 
            and production staffing. Let our work speak for itself.
          </h4> 
      </div>
      <div className='text-center text-xl my-3 py-2 font-light text-white italic bg-gradient-to-r from-yellow-500 to-orange-700'>
        "It all begins right here"
      </div>
      <PortfolioItem
        title={'New Orleans Event #1'}
        audienceCount="10,000+"
        eventSize='25,000 sqft'
        summary="Short summary of the event and what Krewe Live provided." />
      <div className="mb-2" />
      <PortfolioItem
        title={'New Orleans Event #2'}
        audienceCount="10,000+"
        eventSize='25,000 sqft'
        summary="Short summary of the event and what Krewe Live provided." />
      <div className="mb-2" />
      <PortfolioItem
        title={'New Orleans Event #3'}
        audienceCount="10,000+"
        eventSize='25,000 sqft'
        summary="Short summary of the event and what Krewe Live provided." />
      <div className="mb-2" />

      <div className="flex items-center justify-center mb-2">
        <ContactBox />
      </div>
    </div>
  );
  }
  