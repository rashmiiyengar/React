import Logo from "../../logo.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

//if no dependency array => useEffect is called on every render
//if dependancy array is empty = [] => useEffect is called on initial render ( Just once)
//if dependancy array is [nthNameReact] =?> 
useEffect(()=>{
  console.log("use effect Called");
},[btnNameReact]);


  return (
    <div className="header">
      <div className="logo-container ">
        <img className="logo" src={Logo} alt="Logo" />
      </div>
      <div className="nav-items ">
        <ul>
          <li className="text-success">Home</li>
          <li className="text-success">AboutUs</li>
          <li className="text-success">ContactUs</li>
          <li className="text-success">Cart</li>
          <button
            className="btn btn-outline-success"
            onClick={() => {
              btnNameReact == "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
