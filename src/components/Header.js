import Logo from "../../logo.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  //if no dependency array => useEffect is called on every render
  //if dependancy array is empty = [] => useEffect is called on initial render ( Just once)
  //if dependancy array is [nthNameReact] =?>
  useEffect(() => {
    console.log("use effect Called");
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container ">
        <img className="logo" src={Logo} alt="Logo" />
      </div>
      <div className="nav-items ">
        <ul>
          <li>
            <Link className="text-success" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-success" to="/about">
              AboutUs
            </Link>
          </li>
          <li>
            <Link className="text-success" to="/contact">
              ContactUs
            </Link>
          </li>
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
