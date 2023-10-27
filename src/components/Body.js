import RestrauntCard from "./RestrauntCard";
import { data as swiggyRestaurantList } from "../../mocks/mockData";
import { useState } from "react";

const Body = () => {
  //State Variable = Powerful variable
  //React Hooks- useState
  const arr = useState(swiggyRestaurantList);
  console.log(arr)
  const [listOfRestraunt, setListOfRestraunt] = useState(swiggyRestaurantList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn btn btn-outline-success"
          onClick={() => {
            let filteredList = listOfRestraunt.filter(
              (res) => res.info.avgRating > 4.4
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
