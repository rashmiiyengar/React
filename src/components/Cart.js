import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    //Always subscribe to the right portion of store to ave goot performance
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m4 p-4">
      <h1 className="text-xl font-bold text-success">Cart</h1>
      <button
        className="btn btn-outline-success flex m-2"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length==0 &&  
      <div className="w-6/12 m-auto bg-gray-80 shadow-md p-2 " >
      <h3 className="text-success ">Cart is Empty! Add items to you Cart</h3> </div>} 
      <div className="w-6/12 h-auto m-auto bg-gray-80 shadow-lg">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
