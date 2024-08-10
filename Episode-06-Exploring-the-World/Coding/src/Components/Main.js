import Restaurantcard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";

const Main = () => {
  const [apiData, setapiData] = useState([]);

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

  //Conditional Rendering

  // if (apiData.length === 0) {
  //   return <Shimmer />;
  // }

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
            setapiData(apiData);
          }}
        >
          All Restaurant
        </button>
      </div>
      <div className="restaurants_Card_Container">
        {/* //Conditional Rendering */}
        {apiData.length === 0 ? (
          <Shimmer />
        ) : (
          apiData.map((data) => {
            return (
              <Restaurantcard key={data.info.id} restaurantData={data.info} />
            );
          })
        )}
      </div>
    </main>
  );
};

export default Main;
