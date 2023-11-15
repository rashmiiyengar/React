import { CDN_URL } from "../utils/constants";

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
    <div className="m-4 p-4 w-[250px] rounded-lg bg-slate-100 hover:bg-slate-200">
      <img
        className="rounded-lg h-38 w-42"
        alt="res-logo"
        src={CDN_URL + restaurantImage}
      ></img>
      <h5 className="font-bold py-4">{restaurantName}</h5>
      <h6>{cuisine.join(", ")}</h6>
      <p>{starRating}</p>
      <p>{costForTwo}</p>
      <p>{areaName}</p>
      <p>{restaurant.info.sla.deliveryTime} min to deliver</p>
    </div>
  );
};

//Higher Order Component4
// It takes input as RestrauntCard and output will be RestrauntCardOpen

 export const withOpenLabel = (RestrauntCard) => {
  return (props) => {
    return (
      <div>
       <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Open</span>
        <RestrauntCard {...props}/>
      </div>
    );
  };
};

export default RestrauntCard;
