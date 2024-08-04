import { RESTAURANT_CARD_IMG_CDN_URL } from "../utils/constants";

console.log(RESTAURANT_CARD_IMG_CDN_URL);

const Restaurantcard = (props) => {
  const { restaurantData } = props;

  console.log();
  return (
    <div className="restaurant_Card">
      <div className="restaurant_Card_Img_Container">
        <img
          alt="recipe_Img"
          className="recipeImage"
          src={RESTAURANT_CARD_IMG_CDN_URL + restaurantData.cloudinaryImageId}
        />
      </div>
      <div className="restaurant_Card_Details_Container">
        <h3>{restaurantData.name}</h3>
        <p>⭐ {restaurantData.avgRating}</p>
        <p>{restaurantData.costForTwo}</p>
        <p>{restaurantData.cuisines.join(",  ")}</p>
      </div>
    </div>
  );
};

export default Restaurantcard;
