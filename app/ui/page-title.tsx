
interface Props{
    title: string;
    height?: string;
    colorThemeFrom?: string;
    colorThemeTo?: string;
    colorDirection?: string;
}


const PageTitle: React.FC<Props> = ({title, height='lg', colorThemeFrom='yellow-500', colorThemeTo='amber-600', colorDirection='b'}) => {
    
    let tHeight = '';
    const to = colorThemeTo ? `to-${colorThemeTo}` : ''

    switch(height){
        case 'sm':
            tHeight = '16';
            break;
        case 'md':
            tHeight = '28';
            break;
        default:
            tHeight = '48';
            break;
    }


    return(
    <div className={`h-${tHeight} flex justify-center items-center text-center bg-gradient-to-${colorDirection} from-${colorThemeFrom} ${to}`}>
        <h1 className='text-2xl mx-2 text-white capitalize font-light'>{title}</h1>
    </div>
    )
}

export default PageTitle;