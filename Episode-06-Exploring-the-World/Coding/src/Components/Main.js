import Restaurantcard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { FaSearch } from "react-icons/fa";

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

  return (
    <main className="main">
      <div className="searching_Container">
        <div className="search_Box_Div">
          <input
            type="text"
            className="search_Input"
            placeholder="search for restaurant and food"
          ></input>
          <FaSearch className="search_Icon" />
        </div>
      </div>
      <div className="restaurants_Card_Filter_Container">
        <div className="filter_Container">
          <button
            className="filter_button"
            onClick={() => {
              const filterApiData = apiData.filter(
                (data) => data.info.avgRating > 4.3
              );
              setapiData(filterApiData);
            }}
          >
            Top rated
          </button>
          <button
            className="filter_button"
            onClick={() => {
              fetchData();
            }}
          >
            All
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
      </div>
    </main>
  );
};

export default Main;
