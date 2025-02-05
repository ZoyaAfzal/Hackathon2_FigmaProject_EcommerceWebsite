'use client'
import { useEffect, useState } from 'react';



/*interface Order {
  orderId: string;
  customerEmail: string;
  items: OrderItem[];
  totalAmount: number;
  shippingAddress: {
    addressLine1: string;
    city: string;
    stateProvince: string;
    postalCode: string;
    countryCode: string;
  };
  stripeSessionId: string;
  status: string;
  paymentStatus: string;
  createdAt: string;
}*/
interface Order {
  id: string;
  amount: number;
}


{/*const SuccessPage = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [order, setOrder] = useState<Orders | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionId) return;

    const fetchOrder = async () => {
      const sessionId = new URLSearchParams(window.location.search).get("session_id");

      if (!sessionId) {
        console.error("Session ID not found in URL");
        return;
      }
      try {
        const response = await fetch(`/api/create-order?session_id=${sessionId}`);
        console.log("Fetching order from:", response); 

        if (!response.ok) throw new Error("Failed to fetch order");
        const data = await response.json();
        setOrder(data.order);
      } catch (error) {
        console.error("Error fetching order:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [sessionId]);

  if (loading) return <p>Loading...</p>;
  if (!order) return <p>Order not found.</p>;

  return (
    <div>
      <h1>Order Successful!</h1>
      <p>Order ID: {order.orderId}</p>
      <p>Total: ${order.totalAmount}</p>
      <p>Status: {order.status}</p>
    </div>
  );
};

export default SuccessPage; */}

const SuccessPage = () => {
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrder = async () => {
      const sessionId = new URLSearchParams(window.location.search).get("session_id");

      if (!sessionId) {
        setError("Session ID not found in URL");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/create-order?session_id=${sessionId}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setOrder(data);
      } catch (error) {
        console.error("Error fetching order:", error);
        setError("Failed to fetch order. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!order) return <p>No order data found.</p>;

  return (
    <div>
      <h1>Order Successful</h1>
      <p>Order ID: {order.id}</p>
      <p>Amount: {order.amount}</p>
    </div>
  );
};

export default SuccessPage;