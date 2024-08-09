import swiggyApiData from "../utils/dummySwiggyAPI.js";
import Restaurantcard from "./RestaurantCard";
import { useState } from "react";

//Main Component
const Main = () => {
  const [apiData, setapiData] = useState(swiggyApiData);
  return (
    <main className="main">
      <div className="filter_Container">
        <span>Filter : </span>
        <button
          className="filter_button"
          onClick={() => {
            const filterApiData = apiData.filter(
              (data) => data.card.card.info.avgRating > 4.3
            );
            setapiData(filterApiData);
          }}
        >
          Top rated Restaurant
        </button>
        <button
          className="filter_button"
          onClick={() => {
            setapiData(swiggyApiData);
          }}
        >
          All Restaurant
        </button>
      </div>
      <div className="restaurants_Card_Container">
        {apiData.map((data) => {
          return (
            <Restaurantcard
              key={data.card.card.info.id}
              restaurantData={data.card.card.info}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Main;
