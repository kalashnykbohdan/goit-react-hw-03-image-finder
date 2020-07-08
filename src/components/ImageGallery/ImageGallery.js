import React from 'react';
import ImageGalleryItem from './ImageGalleryItem'

export default function ImageGallery({items}){
    // console.log(images);
    return(
        <ul className="ImageGallery">
            <ImageGalleryItem items={items} data-sourse={items.largeImageURL}/>
        </ul> 
    );
}
