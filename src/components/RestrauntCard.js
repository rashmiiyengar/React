import { CDN_URL } from "../utils/constants";

const RestrauntCard = (props) => {
  const { restaurant } = props;
  console.log(restaurant);

  const {
    name: restaurantName,
    cuisines: cuisine,
    avgRating: starRating,
    cloudinaryImageId: restaurantImage,
    costForTwo,
    areaName,
  } = restaurant?.info;

  const maxCuisineLength = 25; // You can adjust this value as needed

  // Trim the cuisine string if it exceeds the maximum length
  const trimmedCuisine = cuisine.join(", ").length > maxCuisineLength
    ? cuisine.join(", ").slice(0, maxCuisineLength) + "..."
    : cuisine.join(", ");

  return (
    <div className="m-4 p-4 w-[350px] h-[500px] rounded-lg bg-slate-100 hover:bg-slate-200 flex flex-col">
    <img
      className="rounded-lg w-full h-3/4 object-cover"
      alt="res-logo"
      src={CDN_URL + restaurantImage}
    />
    <div className="h-1/4 flex flex-col justify-between overflow-hidden">
        <div>
          <h6>{trimmedCuisine}</h6>
          <p>{starRating}</p>
         
          <p className="font-bold ">{restaurantName}</p>
          
        </div>
        <div>
          <p>{restaurant.info.sla.deliveryTime} min to deliver</p>
          
        </div>
        
      </div>
      
      
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
