import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countClass: 0,
    };
    console.log("Child constructor");
  }

  componentDidMount() {
    console.log("Child Component did mount");

    //API Calls are made here
  }

  render() {
    const { name, location } = this.props;
    console.log("Child render");
    return (
      <div className="transparent-background user-card">
        <h5>Count: {this.state.countClass}</h5>
        <button
          className="btn btn-outline-success shimmer-container"
          onClick={() => {
            //Never update state variables directly with =
            this.setState({
              countClass: this.state.countClass + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h5>Name: {name} </h5>
        <p>Loation :{location}</p>
        <p>Contact : rashmiiyengar255@gmail.com</p>
      </div>
    );
  }
}

export default UserClass;
