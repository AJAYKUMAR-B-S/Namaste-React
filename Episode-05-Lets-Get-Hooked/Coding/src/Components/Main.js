import swiggyApiData from "../utils/dummySwiggyAPI.js";
import Restaurantcard from "./RestaurantCard";

//Main Component
const Main = () => {
  return (
    <main className="main">
      <div className="search_Container">
        <span>Search : </span>
        <input type="text" placeholder="Search for food" />
      </div>
      <div className="restaurants_Card_Container">
        {swiggyApiData.map((data) => {
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
