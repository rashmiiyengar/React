import Logo from "../../logo.png";
import { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus= useOnlineStatus();
  //if no dependency array => useEffect is called on every render
  //if dependancy array is empty = [] => useEffect is called on initial render ( Just once)
  //if dependancy array is [nthNameReact] =?>
  useEffect(() => {
    console.log("use effect Called");
  }, [btnNameReact]);

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using selector-  Hook
  const cartItems = useSelector((store)=>store.cart.items)

  console.log(cartItems);

  return (
    <div className="flex justify-between shadow-sm px sm:bg-green lg:bg-pink">
      <div className="logo-container ">
        <img className="w-56" src={Logo} alt="Logo" />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4"> 
          <li className="px-4">Status :{onlineStatus? " Online 🟢" :" Offline 🔴" }</li>
          <li className="px-4">
            <Link className="text-success" to="/">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link className="text-success" to="/about">
              AboutUs
            </Link>
          </li>
          <li className="px-4">
            <Link className="text-success" to="/contact">
              ContactUs
            </Link>
          </li>
          <li className="px-4">
            <Link className="text-success" to="/grocery">
              Grocery
            </Link>
          </li>
        
          <li className="text-success px-4 font-bold">
          <Link className="text-success" to="/cart">
          Cart ({cartItems.length} items) 🛒
            </Link>
            </li>
          
          <button
            className="btn btn-outline-success px-4"
            onClick={() => {
              btnNameReact == "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="text-success px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
