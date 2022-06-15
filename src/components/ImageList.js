import React from "react";
import ImageCard from "./ImageCard";
import "./imageList.css";

const ImageList = (props) => {
  return (
    <>
      <div className="image_list">
        {props.images.map((image) => {
          return <ImageCard key={image.id} image={image} />;
        })}
      </div>
    </>
  );
};

export default ImageList;
