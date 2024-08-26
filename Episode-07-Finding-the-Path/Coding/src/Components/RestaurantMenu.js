import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=426730&catalog_qa=undefined&submitAction=ENTER"
    );
    const toJson = await data.json();
  };
  return (
    <div className="restaurantMenu_Container">
      <h1>This is Restaurant Menu Item page</h1>
    </div>
  );
};

export default RestaurantMenu;
