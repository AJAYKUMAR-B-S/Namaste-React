import { API_URL } from "../utils/constants.js";
import Restaurantcard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Shimmer, NoResultFoundCard } from "./Shimmer.js";
import { FaSearch } from "react-icons/fa";

const Main = () => {
  const [apiData, setapiData] = useState([]);

  const [filteredAPIData, setFilteredAPIData] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [DefaultComponent, setDefaultComponent] = useState(() => Shimmer);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const toJson = await data.json();
    setapiData(
      toJson.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );

    setFilteredAPIData(
      toJson.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
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
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <FaSearch
            className="search_Icon"
            onClick={() => {
              let filteredRestaurant = apiData.filter((data) =>
                data.info.name
                  .toLocaleLowerCase()
                  .includes(searchText.toLocaleLowerCase().trim())
              );
              setFilteredAPIData(filteredRestaurant);
              setDefaultComponent(() => NoResultFoundCard);
            }}
          />
        </div>
      </div>
      <div className="restaurants_Card_Filter_Container">
        <div className="filter_Container">
          <button
            className="filter_button"
            onClick={() => {
              const filterApiData = filteredAPIData.filter(
                (data) => data.info.avgRating > 4.5
              );
              setFilteredAPIData(filterApiData);
              setSearchText("");
            }}
          >
            Top rated
          </button>
          <button
            className="filter_button"
            onClick={() => {
              setFilteredAPIData(apiData);
              setSearchText("");
            }}
          >
            All
          </button>
        </div>
        <div className="restaurants_Card_Container">
              
          {/* //Conditional Rendering */}
  
          {filteredAPIData.length === 0 ? (
            <DefaultComponent />
          ) : (
            filteredAPIData.map((data) => {
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
