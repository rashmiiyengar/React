import Logo from "../../logo.png";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
