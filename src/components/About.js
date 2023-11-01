import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component{

  constructor(props){
    super(props)
    console.log("parent constructor")
  }

  componentDidMount(){
    //used to make API calls
    console.log("Parent  Component did mount");
  }

  render(){
    console.log("parent render")
    return(
      <div >
      <UserClass name={"First"} location={"San Jose"}/>
    
    </div>
    )

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