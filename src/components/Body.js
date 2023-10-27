import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
//import { data as swiggyRestaurantList } from "../../mocks/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  //State Variable = Powerful variable
  //React Hooks- useState

  const [listOfRestraunt, setListOfRestraunt] = useState([]);

  useEffect(() => {
    console.log("rash");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonResponseData = await data.json();
    console.log(jsonResponseData);
    setListOfRestraunt(
      //Optional Chaining
      jsonResponseData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  //Conditional Rendering

  return listOfRestraunt.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button 
          className="filter-btn btn btn-outline-success"
          onClick={() => {
            let filteredList = listOfRestraunt.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfRestraunt(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restraunt
        </button>
      </div>
      <div className="restraunt-container">
        {listOfRestraunt.map((restaurant) => (
          <RestrauntCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
