'use client'
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Image from "next/image";

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
  image: string;
}

interface ShippingAddress {
  line1: string;
  city: string;
  country: string;
  postalCode: string;
}

interface OrderType {
  orderId: string;
  customerName: string;
  totalAmount: number;
  status: string;
  items: OrderItem[];
  shippingAddress: ShippingAddress;
}

function SuccessPageContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  
  const [order, setOrder] = useState<OrderType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    if (!sessionId) {
      setError("❌ No session ID found in the URL.");
      setLoading(false);
      return;
    }

    const fetchOrder = async () => {
      try {
        console.log("📌 Fetching order for session ID:", sessionId);

        const response = await fetch(`/api/create-order?session_id=${sessionId}`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "❌ Failed to fetch order.");
        }

        const orderData = await response.json();
        console.log("✅ Order received:", orderData);
        setOrder(orderData);
      } catch (err:unknown) {
     const errorMessage = err instanceof Error ? err.message : "Unknown error";
     console.error("❌ Error fetching order:", errorMessage);
     setError((prev) => prev + "\n" + errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [sessionId]);

  if (loading) return <p>⏳ Loading your order...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-green-600">🎉 Payment Successful!</h1>
      <p className="text-gray-700">Thank you, {order?.customerName}, for your purchase.</p>

      <div className="mt-4 p-4 bg-white shadow rounded-lg">
        <h2 className="text-lg font-semibold">🛍 Order Summary</h2>
        <p><strong>Order ID:</strong> {order?.orderId}</p>
        <p><strong>Total Amount:</strong> ₹{order?.totalAmount.toFixed(2)}</p>
        <p><strong>Status:</strong> {order?.status}</p>

        <h3 className="mt-4 font-semibold">📦 Items Purchased:</h3>
        <ul>
          {order?.items.map((item, index: number) => (
            <li key={index} className="border-b py-2">
              <Image src={item.image} alt={item.name} width={16} height={16} className="w-16 h-16 inline-block mr-2"/>
              {item.name} - {item.quantity} x ₹{item.price.toFixed(2)}
            </li>
          ))}
        </ul>

        <h3 className="mt-4 font-semibold">📍 Shipping Address</h3>
        <p>{order?.shippingAddress.line1}, {order?.shippingAddress.city}-{order?.shippingAddress.country}  {order?.shippingAddress.postalCode}</p>
      </div>
    </div>
  );
}
export default function SuccessPage() {
  return (
    <Suspense fallback={<p>⏳ Loading...</p>}>
      <SuccessPageContent />
    </Suspense>
  );
}




