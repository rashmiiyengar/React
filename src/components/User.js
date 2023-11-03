import { useEffect, useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const tim =setInterval(()=>{
      console.log("namaste")
    },1000)

    return ()=>{
      clearInterval(tim)
      console.log("Use effect unmount");
    }
  }, [count]);

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
