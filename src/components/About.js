import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    //used to make API calls
    console.log("Parent  Component did mount");
  }

  render() {
    console.log("parent render");
    return (
      <div className="">
        <h1 className="m-4 p-2 shadow-sm">About us</h1>
        <div className="user-card m-4 p-4 bg-green-100 rounded-lg border-black">
          Logged in User{" "}
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h2 className="text-lg font-bold">{loggedInUser}</h2>
            )}
          </UserContext.Consumer>
        </div>

        <UserClass name={"First"} location={"San Jose"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div >
//       <User name={"Rashmi"} location={"San Jose"}/>
//       <UserClass name={"Rashmi"} location={"San Jose"}/>
//     </div>
//   );
// };

export default About;

/*
Parent Constructor
Parent Render

 First Constructor
 First Render

 Second Constructor 
 Second Render

 <DOM UPDATED IN SINGLE BATCH>

 -First Component Did Mount
 -Second Component Dit Mount
*/
