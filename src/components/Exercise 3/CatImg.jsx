import React from "react";

const CatImg = ({url}) => {
    return(
        <div>
            <img className="img" src={url} alt="Cat" />
        </div>
    )
}

export default CatImg;
