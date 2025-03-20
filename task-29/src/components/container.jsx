import React from "react";

 const image = [
    { title: "John Doe", role: "CEO & Founder", imgSrc: "https://www.w3schools.com/w3images/team2.jpg" },
    { title: "Jane Doe", role: "Architect", imgSrc: "https://www.w3schools.com/w3images/team1.jpg" },
    { title: "Mike Ross", role: "Architect", imgSrc: "https://www.w3schools.com/w3images/team3.jpg" },
    { title: "Dan Star", role: "Architect", imgSrc: "https://www.w3schools.com/w3images/team4.jpg" },
 ];
function Team(){
    return(
        <div className="w3-row-padding w3-grayscale">
        {image.map((image, index) => (
          <div key={index} className="w3-col l3 m6 w3-margin-bottom">
            <img src={image.imgSrc} alt={image.title} style={{ width: "100%"}} />
            <div className="p-4">
              <h3>{image.title}</h3>
              <p className="w3-opacity">{image.role}</p>
              <p>
                Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
              </p>
              <button className="w3-button w3-light-grey w3-block">
                Contact
              </button>
            </div>
          </div>
        ))}
      </div>
    );
}

export default Team