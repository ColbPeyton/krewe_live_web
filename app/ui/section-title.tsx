interface Props{
    title: string;
}

const SectionTitle:React.FC<Props> = ({title}) => (
    <div className='flex flex-col justify-center'>
        <h1 className='ml-2 capitalize mt-2 mb-0 text-3xl font-light leading-9 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>
            {title}
        </h1> 
        <div className="rounded-2xl bg-gradient-to-r from-yellow-500 via-amber-500 to-red-500 h-1 mb-3 w-5/6 mt-1 mb-3 sm:w-96"></div>
    </div>

)

export default SectionTitle;