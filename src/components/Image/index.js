import React from "react";
//css
import "./Image.css";

const Image = ({ img }) => {
  console.log(img);
  return (
    <div className="img-item">
      <img
        src={img.urls.small}
        className="w-100 rounded"
        alt={img.alt_description}
      />
    </div>
  );
};

export default Image;
