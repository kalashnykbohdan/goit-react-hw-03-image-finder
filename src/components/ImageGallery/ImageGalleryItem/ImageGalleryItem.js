import React from 'react';

export default function ImageGallery({items}){

    return(
        <>
            {items.map( item  => (
                <li key={item.id} className="ImageGalleryItem">
                    <img src={item.webformatURL} data-sourse={item.largeImageURL} className="ImageGalleryItem-image" ></img>
                </li>       
            ))}
        </>
    );
}
