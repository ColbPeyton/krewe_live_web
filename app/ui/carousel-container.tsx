import React, {useEffect} from "react";
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem'

import { Image } from "react-bootstrap";


interface Image  {
    id: string;
    url: string;
    alt: string
}

interface Props{
    images: Image[];
}

const CarouselContainer: React.FC<Props> = ({images}) => {
    const renderImages = () => {
        return images.map((image) => (
            <CarouselItem key={image.id}>
                <Image src={image.url} alt={image.alt} />
            </CarouselItem>
        ))
    }
    
    return(
        <Carousel>
            {renderImages()}
        </Carousel>
    )
};

export default CarouselContainer;
