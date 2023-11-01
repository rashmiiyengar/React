import { useEffect, useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {}, []);
  return (
    <div className="transparent-background user-card">
      <h5>Count: {count}</h5>
      <h5>Name: {name} </h5>
      <p>Location : {location}</p>
      <p>Contact : rashmiiyengar255@gmail.com</p>
    </div>
  );
};

export default User;
