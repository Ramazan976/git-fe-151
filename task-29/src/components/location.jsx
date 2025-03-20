import React from "react";

const MapImage = [
    {imgSrc: "https://www.w3schools.com/w3images/map.jpg"}
]

function Location() {
    return(
        <div className="w3-container">
            {MapImage.map((MapImage, index) => (
                <div key={index}>
                     <img src={MapImage.imgSrc} style={{width: '100%'}} />
                </div>
            ))}
      </div>
    );
}
export default Location
