import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";


const Cart = () => {


  //Always subscribe to the right portion of store to ave goot performance
  const cartItems = useSelector((store) => store.cart.items);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };


  const handleButtonClick = () => {
   
    const dataArray = cartItems

    const encodedData = encodeURIComponent(JSON.stringify(dataArray));

    // Navigate to the confirmation page with the encoded data
    navigate(`/confirmation/${encodedData}`);
  };

  // let navigate = useNavigate();
  // const routeChange = () => {
  //   let path = `/confirmation`;
  //   navigate(path);
  // };

  return (
    <div className="text-center m4 p-4">
      <h1 className="text-xl font-bold text-success">Cart</h1>
      <button
        className="btn btn-outline-success flex m-2"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>

      {cartItems.length>0 &&<button
        className="btn btn-outline-success flex m-2"
        onClick={handleButtonClick}
      >
        Proceed to Checkout
      </button> }

      {cartItems.length == 0 && (
        <div className="w-6/12 m-auto bg-gray-80 shadow-md p-2 ">
          <h3 className="text-success ">
            Cart is Empty! Add items to you Cart
          </h3>{" "}
        </div>
      )}
      <div className="w-6/12 h-auto m-auto bg-gray-80 shadow-lg">
        <CartItem items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
