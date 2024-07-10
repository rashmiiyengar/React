import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestrauntMenu = (resId) => {
  //fetch data

  const [resInfo,setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

const fetchMenu = async() =>{
    const menuData = await fetch(
            MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
          );

         const jsonMenuResponse = await menuData.json();
         console.log(jsonMenuResponse)
         setResInfo(jsonMenuResponse?.data)
}

  return resInfo;
};

export default useRestrauntMenu;
