
interface Props{
    title: string;
    height?: string;
    colorThemeFrom?: string;
    colorThemeTo?: string;
    colorDirection?: string;
}


const PageTitle: React.FC<Props> = ({title, height='lg', colorThemeFrom='from-yellow-500', colorThemeTo='to-amber-600', colorDirection='b'}) => {
    
    let tHeight = '';
    const to = colorThemeTo ? colorThemeTo : '';
    const direction = colorDirection === 'b' ? 'bg-gradient-to-b' : 'bg-gradient-to-r';

    switch(height){
        case 'sm':
            tHeight = 'h-16';
            break;
        case 'md':
            tHeight = 'h-28';
            break;
        default:
            tHeight = 'h-48';
            break;
    }



    return(
    <div className={`${tHeight} flex justify-center items-center text-center ${direction} ${colorThemeFrom} ${to}`}>
        <h1 className='text-3xl mx-2 text-white capitalize font-light'>{title}</h1>
    </div>
    )
}

export default PageTitle;