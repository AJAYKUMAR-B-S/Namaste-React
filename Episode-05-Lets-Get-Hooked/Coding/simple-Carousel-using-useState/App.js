import React from "react";
import ReactDOM from "react-dom/client";
import { Image, URL } from "./ImageComponent.js";
import dummySwiggyApiData from "./dummySwiggyAPI.js";
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Gallery = () => {
  let [currentindex, setcurrentindex] = useState(0);
  return (
    <div className="gallery_Container">
      <div className="image_Container">
        <Image
          addres={URL + dummySwiggyApiData[currentindex].info.cloudinaryImageId}
        />
      </div>
      <div
        className="right_Button"
        onClick={() => {
          if (currentindex < dummySwiggyApiData.length - 1) {
            currentindex++;
            setcurrentindex(currentindex);
          }
        }}
      ></div>
      <div
        className="left_Button"
        onClick={() => {
          if (!currentindex <= 0) {
            currentindex--;
            setcurrentindex(currentindex);
          }
        }}
      ></div>
    </div>
  );
};

root.render(<Gallery />);
