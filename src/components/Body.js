import RestrauntCard from "./RestrauntCard";
import { data as swiggyRestaurantList } from "../../mocks/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="serach-restaurant">
          <label>Search : </label>
          <input type="text" id="search"/>
          </div>
        <div className="restraunt-container">
          {swiggyRestaurantList.card.gridElements.infoWithStyle.restaurants.map(
            (restaurant) => (
              <RestrauntCard key={restaurant.info.id} restaurant={restaurant} />
            )
          )}
        </div>
      </div>
    );
  };

  export default Body;