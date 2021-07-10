import React from "react";
import Photo from "./Photo/Photo";
import "./Photos.scss";

const Photos = ({ photos }) => {
  return (
    <div className="photos">
      {photos.map((p) => (
        <Photo key={p.id} thumbnailUrl={p.thumbnailUrl} title={p.title} />
      ))}
    </div>
  );
};

export default Photos;
