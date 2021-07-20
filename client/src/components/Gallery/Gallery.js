import React from 'react'
import Card from '../Card/Card';
import './Gallery.css'
export default function Gallery({images}) {
    return (
        <div className="gallery-container">
            {images.map(item => {
                return <Card key={item.url} name={item.name} url={item.url} description={item.description} user={item.username}/>
            })}
        </div>
    )
}
