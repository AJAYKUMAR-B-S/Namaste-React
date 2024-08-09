import SWIGGY_MOCK_API_DATA from "../utils/swiggyMockApiData";
import Restaurantcard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Main = () => {
  const [apiData, setapiData] = useState(SWIGGY_MOCK_API_DATA);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const toJson = await data.json();

    setapiData(
      toJson.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

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
