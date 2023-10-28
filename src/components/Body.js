import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
//import { data as swiggyRestaurantList } from "../../mocks/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  //State Variable = Powerful variable
  //React Hooks- useState

  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("rash");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonResponseData = await data.json();

    setListOfRestraunt(
      //Optional Chaining
      jsonResponseData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      //Optional Chaining
      jsonResponseData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  //Conditional Rendering

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search input-group">
          <input
            type="text"
            className="searchbox form-control"
            placeholder="Search Restraunts"
            value={searchText}
            onChange={(text) => {
              setSearchText(text.target.value);
            }}
          ></input>
          <button
            className="btn btn-outline-success"
            onClick={() => {
              //Filter the restraunts and update the UI
              //Search Test
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((item) =>
                item.info.name.includes(searchText)
              );
              console.log(filteredRestaurant);
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn btn btn-outline-success"
          onClick={() => {
            let filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );
            setFilteredRestaurant(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restraunt
        </button>
      </div>
      <div className="restraunt-container">
        {filteredRestaurant.map((restaurant) => (
          <RestrauntCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;