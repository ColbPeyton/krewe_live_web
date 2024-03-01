import PageTitle from "../ui/page-title";
import SectionTitle from "../ui/section-title";

interface AboutProps {
    title: String;
    color?: String;
    children: React.ReactNode
}


const AboutSections:React.FC<AboutProps> = ({title, color ='yellow-600', children}) =>{
    return(
        <div className="">
            <div className={`h-16 flex items-center bg-gradient-to-r from-${color} from-35% mb-1`}>
                <h1 className='text-2xl mx-2 text-white capitalize font-light'>{title}</h1>
            </div>
            <p className='ml-2 mb-3 text-base tracking-wide	'>{children}</p>
        </div>
    )
}


export default function About(){


    return(
        <div>
            <PageTitle title={'30+ years of innovation and creativity'} />
            <SectionTitle title={'Who We Are'} />
            <div className='ml-2'>
                <h4 className='text-1xl leading-9 text-gray-900 sm:text-1xl sm:tracking-tight'>
                    Krewe Live is your premier destination for top-tier production resources and staffing solutions. With over 30 years of industry experience, we specialize in delivering unparalleled expertise in audio, visual, and stage set design, along with comprehensive production staffing services. Whether you're planning a live event, concert, corporate function, or any other production, we've got you covered with a wealth of knowledge and a commitment to excellence. Our team is dedicated to ensuring your vision comes to life seamlessly, providing the resources and support you need to create unforgettable experiences. Trust Krewe Live for all your production needs and elevate your event to the next level.
                </h4>  
            </div>

            <SectionTitle title={'What we bring to the table'} />
            <AboutSections title={'Design'}>
                We are passionate about delivering cutting-edge environmentally friendly solutions for live events needs. Our state-of-the-art set designs are not only visually stunning but also100% eco-friendly recyclable, reusable and expandable.
            </AboutSections> 
            <AboutSections title={'Branding'} color='amber-600'>
                Custom venue theme branding,  bus and airport branding, registration desk and designs, for workshops. Our design team will help you to engage with your attendees.
            </AboutSections>
            <AboutSections title={'Production'} color='orange-600'>
                Our team will work with your team to establish your production needs, provide a full assessment of venue capabilities, power and internet capabilities and provide 3D renderings and autoCAD documentation.
            </AboutSections>
            <AboutSections title={'Management'} color='orange-800'>
                This is your event, we will team-up with your team to provide stage set design, AV equipment, production support and rigging for your general session, workshops and award shows if needed. This way you can focus on telling your story
            </AboutSections>

            
        </div>
    )
}

