import UserContext from "../utils/userContext";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //authentication

  useEffect(() => {
    //Make an api calland send username and pwd
    const data = {
      name: "Rashmi Iyengar",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

export default AppLayout;
