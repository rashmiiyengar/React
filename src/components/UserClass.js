import React from "react"

class UserClass extends React.Component {

constructor(props){
    super(props);

}


  render() {
    return (
      <div className="transparent-background user-card">
        <h5>Name: {this.props.name} </h5>
        <p>Location : California</p>
        <p>Contact : rashmiiyengar255@gmail.com</p>
      </div>
    );
  }


}

export default UserClass;