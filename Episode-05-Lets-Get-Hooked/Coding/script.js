import React from "react";
import ReactDOM from "react-dom/client";
import swiggyApiData from "./dummySwiggyApi";
// Headers
//   website logo
//    Nav Bar
//      Home
//      About
//      Contact
// Body
//   searchContainer
//    Search Bar
// CardContainer
//   card
//    cardImg
//    cardDetails
// Footer
//   address
//   social media icons
//   copyright
//   terms and conditions
//   privacy policy
//   contact us

//root to render
const root = ReactDOM.createRoot(document.getElementById("root"));

//Header Component
const Header = () => {
  return (
    <header className="header">
      <div className="logo_Container">
        <img
          alt="Website Logo"
          className="header_logo"
          src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1717113600&semt=ais_user"
        ></img>
      </div>
      <nav className="nav_Container">
        <ul className="nav_Container_Ul">
          <li>About</li>
          <li>Contact</li>
          <li>Help</li>
          <li>sign in</li>
          <li>cart</li>
        </ul>
      </nav>
    </header>
  );
};

//RestaurantCard Component
// =============> One way to use Props => properties
// const Restaurantcard = (props) => {
//   console.log(props);
//   return (
//     <div className="restaurant_Card">
//       <div className="restaurant_Card_Img_Container">
//         <img
//           alt="recipe_Img"
//           className="recipeImage"
//           src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/19/03972ff7-ca47-4b34-a777-bec55c47869e_8944b667-7b9c-418b-88f3-df885ddadd6b.jpg"
//         />
//       </div>
//       <div className="restaurant_Card_Details_Container">
//         <h2>{props.restaurantName}</h2>
//         <p>{props.rating}</p>
//         <p>{props.cost}</p>
//         <p>{props.cuisines}</p>
//       </div>
//     </div>
//   );
// };

//RestaurantCard Component
// =============> another way to use Props by destructuring => properties
const Restaurantcard = (props) => {
  const { restaurantData } = props;
  return (
    <div className="restaurant_Card">
      <div className="restaurant_Card_Img_Container">
        <img
          alt="recipe_Img"
          className="recipeImage"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            restaurantData.cloudinaryImageId
          }
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

//App Component
const App = () => {
  return (
    <div className="app_layout">
      <Header />
      <Main />
    </div>
  );
};

root.render(<App />);
