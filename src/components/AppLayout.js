import UserContext from "../utils/userContext";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useState,useEffect } from "react";
const AppLayout = () => {
  const [userName, setUserName] = useState();

  //authentication

  useEffect(() => {
    //Make an api calland send username and pwd
    const data = {
      name: "Rashmi Iyengar",
    };
    setUserName(data.name);
  },[]);

  return (
    <UserContext.Provider value = {{loggedInUser: userName,setUserName}}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

export default AppLayout;
