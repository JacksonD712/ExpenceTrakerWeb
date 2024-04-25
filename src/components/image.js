import React from "react";
import image1 from "../assets/Removal-769.png";
import image2 from "../assets/Removal-404.png";

const Images = () => {
  return (
    <div className="relative flex  justify-end mr-10 mt-20">
      <img
        src={image1}
        loading="lazy"
        alt=""
        className="max-w-72 max-h-72 m-2"
      />
      <img
        src={image2}
        loading="lazy"
        alt=""
        className="max-w-72 max-h-72 m-2 absolute  -top-5 right-28 "
      />
    </div>
  );
};

export default Images;
