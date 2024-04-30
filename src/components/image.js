import React from "react";
import image1 from "../assets/app.png";


const Images = () => {
  return (
    <div className="relative flex  justify-end mr-10 mt-20">
      <img
        src={image1}
        loading="lazy"
        alt=""
        className="  max-h-80 m-2"
      />
    </div>
  );
};

export default Images;
