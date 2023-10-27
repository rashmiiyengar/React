import Header from "./Header";
import Body from "./Body";

const AppLayout = () => {
    return (
      <div className="app">
        <Header />
        <Body />
      </div>
    );
  };
   
console.log(<Body/>);
  export default AppLayout;