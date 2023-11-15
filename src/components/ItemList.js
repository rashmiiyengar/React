import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((i) => (
        <div
          key={i.card.info.id}
          className="p-2 m-2 border-grey-50 border-b-4 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{i.card.info.name}</span>
              <span>
                {" "}
                -₹{" "}
                {i.card.info.price
                  ? i.card.info.price / 100
                  : i.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs ">{i.card.info.description}</p>
          </div>
          <div className="h-24 w-3/12  p-2 shadow-lg ">
           <div className="absolute"> 
            <button className="p-2 shadow-lg  margin-auto btn btn-success">Add+</button>
            </div>
            <img src={CDN_URL + i.card.info.imageId} className="h-full w-full object-cover"/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
