import { useSelector } from "react-redux";

const OrderHistory = () => {
  const orderHistory = useSelector((store) => store.order.orders);

  // Group orders by orderId
  const groupedOrders = orderHistory.reduce((acc, order) => {
    const orderId = order.orderId || "Unknown";
  
    if (!acc[orderId]) {
      acc[orderId] = [];
    }
  
    // If orders property exists and is an array, push each item in the orders array
    if (Array.isArray(order.orders)) {
      acc[orderId].push(...order.orders);
    } else {
      acc[orderId].push(order);
    }
  
    return acc;
  }, {});
console.log(groupedOrders);
  return (
    <div>
      <h3 className="text-success justify-center items-center">Order History Page</h3>
      {Object.keys(groupedOrders).length > 0 ? (
        Object.keys(groupedOrders).map((orderId) => (
          <div key={orderId} className="p-2 m-20 h-20 w-auto border-grey-50 border-b-4 text-center flex flex-col items-center justify-center shadow-lg">
            <h3 className="text-success">Order #{orderId === "Unknown" ? "Unknown" : orderId}</h3>
            <ul>
              {groupedOrders[orderId].map((order, index) => (
                <li key={index}>
                  {/* Check if card info exists before rendering */}
                  {order.card && (
                    <div>
                      <p>Name: {order.card.info?.name || "Unknown"}</p>
                      <p>Category: {order.card.info?.category || "Unknown"}</p>
                      {/* Add more details as needed */}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No orders in history.</p>
      )}
    </div>
  );
};

export default OrderHistory;