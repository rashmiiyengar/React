import { useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./Shimmer";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import ResCategory from "./ResCategory";

const RestrauntMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestrauntMenu(resId);
  const [sIndex, setsIndex] = useState(0);

  // console.log(resId);
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const menuData = await fetch(
  //     MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
  //   );

  //   const jsonMenuResponse = await menuData.json();
  //   setResInfo(jsonMenuResponse?.data);
  // };

  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo.cards[0].card.card.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h3 className="font-bold mt-2 text-2xl">{name}</h3>
      <p className="mt-2 text-lg">
        {cuisines.join(" , ")} - {costForTwoMessage}
      </p>
      {
        /*Accordian*/
        categories.map((category, index) => (
          //Controlled component
          <ResCategory
            key={category?.card?.card.name}
            cardData={category?.card?.card}
            showItems={index == sIndex ? true : false}
            setsIndex={() => setsIndex(index)}
          />
        ))
      }
    </div>
  );
};

export default RestrauntMenu;
