import React, { useState, useEffect } from "react";
//unsplash
import unsplash from "../../utils/unsplash";
//components
import Image from "../Image/";

const ImagesList = ({ term }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    unsplash.search
      .getPhotos({
        query: term,
        page: 1,
        perPage: 16,
      })
      .then((res) => {
        setImages(res.response.results);
      });
  }, [term]);

  return (
    <>
      <div className="container-fluid">
        <div className="img-row">
          {images.map((img) => (
            <Image img={img} key={img.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ImagesList;
