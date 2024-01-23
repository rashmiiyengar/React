import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     userInfo:{
      name:"Dummy",
      location: "Dummy",
      PublicRepository:"Dummy",
      avatar_url:"dummy"
     }
    };
    console.log("Child constructor");
  }

  async componentDidMount() {
    console.log("Child Component did mount");
    //API Calls are made here
    const data = await fetch("https://api.github.com/users/rashmiiyengar")
    const jsonData = await data.json();
    //console.log(jsonData)

    this.setState({
      userInfo: jsonData
    })
    // this.timer= setInterval(()=>{
    //   console.log("namaste")
    // },1000)
  }

  componentDidUpdate(prevProps,prevState){
    if(this.state.count!= prevState.count){

    }
    console.log("Component did update");
  }
  
  componentWillUnmount(){
    //clearInterval(this.timer);
    console.log("Component will unmount");
  }

  render() {
    const {name,location,public_repos,avatar_url} = this.state.userInfo;
    console.log("Child render");
    return (
      <div className="user-card m-4 p-4 bg-green-100 rounded-lg border-black">
        <h5 className="bg-green-50 shadow-lg">Name: {name} </h5>
        <p>Loation :{location}</p>
        <p>Public Repository :{public_repos}</p>
        <p>Contact : rashmiiyengar255@gmail.com</p>
        <img  className="w-40 h-40 rounded-lg" src={avatar_url}></img>
      </div>
    );
  }
}

export default UserClass;