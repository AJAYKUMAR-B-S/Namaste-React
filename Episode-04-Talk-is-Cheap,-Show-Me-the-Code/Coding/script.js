import React from "react";
import ReactDOM from "react-dom/client";

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
const Restaurantcard = ({ restaurantName, rating, cost, cuisines }) => {
  // We could also use like this
  // const { restaurantName, rating, cost, cuisines} = props;
  return (
    <div className="restaurant_Card">
      <div className="restaurant_Card_Img_Container">
        <img
          alt="recipe_Img"
          className="recipeImage"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/19/03972ff7-ca47-4b34-a777-bec55c47869e_8944b667-7b9c-418b-88f3-df885ddadd6b.jpg"
        />
      </div>
      <div className="restaurant_Card_Details_Container">
        <h2>{restaurantName}</h2>
        <p>{rating}</p>
        <p>{cost}</p>
        <p>{cuisines}</p>
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
        <Restaurantcard
          restaurantName="Burger king"
          rating="Rating: 4.5"
          cost="Average Cost: Rs. 150"
          cuisines="Fast food"
        />
        <Restaurantcard
          restaurantName="Pizza hut"
          rating="Rating: 4.1"
          cost="Average Cost: Rs. 100"
          cuisines="Fresh food"
        />
        <Restaurantcard
          restaurantName="Food point"
          rating="Rating: 3.4"
          cost="Average Cost: Rs. 200"
          cuisines="Home food"
        />
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
