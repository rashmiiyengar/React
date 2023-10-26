import {CDN_URL} from "../utils/constants"

const RestrauntCard = (props) => {
  const { restaurant } = props;
  const {
    name: restaurantName,
    cuisines: cuisine,
    avgRating: starRating,
    cloudinaryImageId: restaurantImage,
    costForTwo,
    areaName,
  } = restaurant?.info;

  return (
    <div className="restraunt-card" style={{ backgroundColor: "#f0f0f0 " }}>
      <img
        className="restraunt-item"
        alt="res-logo"
        src={CDN_URL+restaurantImage}
      ></img>
      <h5>{restaurantName}</h5>
      <h6>{cuisine.join(", ")}</h6>
      <p>{starRating}</p>
      <p>{costForTwo}</p>
      <p>{areaName}</p>
      <p>{restaurant.info.sla.deliveryTime} min to deliver</p>
    </div>
  );
};


export default RestrauntCard;