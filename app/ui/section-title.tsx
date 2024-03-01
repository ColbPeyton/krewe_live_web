interface Props{
    title: string;
}

const SectionTitle:React.FC<Props> = ({title}) => (
    <div className='flex flex-col justify-center'>
        <h1 className='ml-2 capitalize mt-2 text-xl font-bold leading-9 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>
            {title}
        </h1> 
        <div className='border-b-2 border-b-yellow-600 w-5/6 mt-1 mb-3 sm:w-96'/>
    </div>

)

export default SectionTitle;