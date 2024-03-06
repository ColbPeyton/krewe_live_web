interface Props{
    title: string;
    size?: string;
}

const SectionTitle:React.FC<Props> = ({title, size='lg'}) => {

    let textSize = '';

    switch(size){
        case 'sm':
            textSize = 'text-xl';
            break;
        case 'md':
            textSize = 'text-2xl';
            break;
        default:
            textSize = 'text-3xl';
            break;
    }


    return (
        <div className='flex flex-col justify-center'>
            <h1 className={`ml-2 capitalize mt-2 mb-0 ${textSize} font-light leading-9 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight`}>
                {title}
            </h1> 
            <div className="rounded-2xl bg-gradient-to-r from-yellow-500 via-amber-500 to-red-500 h-1 mb-3 w-5/6 mt-1 mb-3 sm:w-96"></div>
        </div>
    )
}

export default SectionTitle;