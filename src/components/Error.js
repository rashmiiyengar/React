import { useRouteError } from "react-router-dom";

const Error = () => {
    const err= useRouteError();
   
  return (
    <div className="container p-5 my-5 bg-dark text-white">
      <h1>Oops! Something went wrong</h1>
      <p>
       The URL Seems wrong,Please try again with the correct URL/
      </p>
      <p>{err.status}:{err.data}</p>
    </div>
  );
};


export default Error;