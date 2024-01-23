import { useRouteError } from "react-router-dom";

const Offline = () => {
    const err= useRouteError();
    console.log(err)
  return (
    <div class="container p-5 my-5 bg-dark text-white">
      <h1>Looks like you are offline</h1>
      <p>
       Please check your Internet Connection
      </p>
      <p>{err.status}:{err.data}</p>
    </div>
  );
};


export default Offline;