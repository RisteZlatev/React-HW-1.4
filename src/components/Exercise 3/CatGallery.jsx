import React from "react";
import CatImg from "./CatImg";
import { useState } from "react";

const CatGallery = () => {
    const [catImages, setCatImages] = useState([]);

    const fetchCatImages = async () => {
        try{
            const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10')
            const data = await response.json();
            setCatImages(data);
        }catch(err){
            console.log(err);
        }
    }
    return(
        <div className="content">
            <h2>Cat Gallery</h2>
            <button onClick={fetchCatImages}>Fetch Cat Images</button>
            <div className="cats">
                {catImages.map((cat) => (
                    <CatImg key={cat.id} url={cat.url} />
                ))}
            </div>
        </div>
    )
}

export default CatGallery;