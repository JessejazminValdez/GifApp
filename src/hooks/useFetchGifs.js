import { useEffect,useState } from 'react';
import { getGifs } from '../services/getGifs';

export const useFetchGifs = ( category ) => {
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);

        console.log('mig');
        console.log(images);
    }
    
    useEffect( () => {
        getImages();
    }, []);

 return {
    images,
    isLoading
 }
}
