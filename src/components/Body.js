import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
//import { data as swiggyRestaurantList } from "../../mocks/mockData";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { withOpenLabel } from "./RestrauntCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";
import UserContext from "../utils/UserContext";

const Body = () => {
  //State Variable = Powerful variable
  //React Hooks- useState

  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestrauntCardOpen = withOpenLabel(RestrauntCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonResponseData = await data.json();
   
    setListOfRestraunt(
      //Optional Chaining
      jsonResponseData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      //Optional Chaining
      jsonResponseData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // const onlineStatus = useOnlineStatus();
  // if (onlineStatus ===false) return
  // <h1>You are Offline</h1>
  //Conditional Rendering
   console.log(listOfRestaurants)
  // console.log(filteredRestaurant)

  const { loggedInUser, setUserName } = useContext(UserContext);

  return  listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search input-group m-2 p-2">
          <input
            type="text"
            className="searchbox form-control"
            placeholder="Search Restraunts"
            data-testid="searchInput"
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
            
              const filteredRestaurant = listOfRestaurants.filter((item) =>
                item.info.name.includes(searchText)
              );
            
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex">
          <button
            className="filter-btn btn btn-outline-success ml-4 mb-2 p-2"
            onClick={() => {
              let filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.4
              );
              setFilteredRestaurant(filteredList);
             
            }}
          >
            Top Rated Restraunt
          </button>
          <div className="flex">
            <label className="text-success font-semibold font-green-700 ml-4 mb-2 p-2">
              UserName:
            </label>
            <input
              className="border border-green-700 searchbox form-control ml-4 mb-2 p-2"
              value ={loggedInUser}
              onChange={(text) => setUserName(text.target.value)
              }
            />
          </div>
        </div>
      </div>
      <div data-testid="resCard" className="flex flex-wrap m-8">
        {filteredRestaurant.map((restaurant) => (
          <Link
            className="app-theme"
            key={restaurant?.info?.id}
            to={"restaurants/" + restaurant?.info?.id}
          >
            {
              /* if Restraunt is open add a open label to it*/

              restaurant.info.isOpen ? (
                <RestrauntCardOpen restaurant={restaurant} />
              ) : (
                <RestrauntCard restaurant={restaurant} />
              )
            }
          </Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
