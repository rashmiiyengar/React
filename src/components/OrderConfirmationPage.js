import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../utils/cartSlice";
import { addToOrderHistory } from "../utils/orderSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const OrderConfirmationPage = () => {
  const { data } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orderItems = useSelector((store) => store.order.orders);

    //Always subscribe to the right portion of store to ave goot performance
    const cartItems = useSelector((store) => store.cart.items);
    console.log(orderItems);


  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  function generateRandomOrderId() {
    const randomNumber = Math.floor(Math.random() * 1000000).toString();

    return randomNumber;
  }

  const handleOrderClick = (decodedData) => {
    //Dispatch an action
    const orderDetails = {
      orderId: generateRandomOrderId(),
      orders: orderItems,
    };
    console.log(decodedData);
    //dispatch(clearOrderHistory());
    dispatch(
      addToOrderHistory({
        orderId: orderDetails.orderId,
        orders: orderDetails.orders,
      })
    );
    //dispatch(addToOrderHistory({ orders: decodedData }));
    navigate(`/orderhistory`);
  };

  try {
    const decodedData = JSON.parse(decodeURIComponent(data));
    console.log(decodedData);
    return (
      <div className="p-2 m-60 h-30 w-auto border-grey-50 border-b-4 text-center flex flex-col items-center justify-center shadow-lg">
        <h3 className="justify-center">✅</h3>
        <h4 className="justify-center">We received your order</h4>
        <p className="font-semibold">
          Your order # {orderItems.orderId} is placed and will be delivered soon
        </p>
        <div>
          <p className="text-left m-3 text-gray-500 font-bold">ORDER ITEMS</p>
          <CartItem items={decodedData} />
        </div>
        <button
          className="btn btn-outline-success"
          onClick={() => handleOrderClick(cartItems)}
        >
          {" "}
          Order History{" "}
        </button>
      </div>
    );
  } catch (error) {
    // Handle decoding errors
    console.error("Error decoding data:", error);
    return <div>Error decoding data</div>;
  }
};

export default OrderConfirmationPage;
