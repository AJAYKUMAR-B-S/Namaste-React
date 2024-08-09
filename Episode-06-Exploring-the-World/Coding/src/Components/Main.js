import SWIGGY_MOCK_API_DATA from "../utils/swiggyMockApiData";
import Restaurantcard from "./RestaurantCard";
import { useState } from "react";

console.log(SWIGGY_MOCK_API_DATA);
//Main Component
const Main = () => {
  const [apiData, setapiData] = useState(SWIGGY_MOCK_API_DATA);
  return (
    <main className="main">
      <div className="filter_Container">
        <span>Filter : </span>
        <button
          className="filter_button"
          onClick={() => {
            const filterApiData = apiData.filter(
              (data) => data.info.avgRating > 4.3
            );
            setapiData(filterApiData);
          }}
        >
          Top rated Restaurant
        </button>
        <button
          className="filter_button"
          onClick={() => {
            setapiData(SWIGGY_MOCK_API_DATA);
          }}
        >
          All Restaurant
        </button>
      </div>
      <div className="restaurants_Card_Container">
        {apiData.map((data) => {
          return (
            <Restaurantcard key={data.info.id} restaurantData={data.info} />
          );
        })}
      </div>
    </main>
  );
};

export default Main;
