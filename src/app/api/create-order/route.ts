//import { sanityClient } from "@/lib/sanity";
//import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";


// app/api/create-order/route.ts
{/*import { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '@/lib/sanity';

export async function POST(req: NextApiRequest) {
  console.log("Received order payload:", req.body); // Log the payload

  try {
    const { customerEmail, customerName, items, totalAmount, shippingAddress, stripeSessionId, paymentStatus, orderId } = req.body;

    // Validate required fields before creating the order
    if (!customerEmail || !customerName || !items || !totalAmount || !shippingAddress) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Items array is required and cannot be empty' });
    }

    for (let item of items) {
      if (!item.name || !item.price || !item.quantity) {
        return res.status(400).json({ error: 'Each item must have a name, price, and quantity' });
      }
    }

    const newOrder = {
      _type: 'order', 
      customerEmail,
      customerName,
      items,
      totalAmount,
      shippingAddress,
      stripeSessionId,
      status: 'pending',
      paymentStatus,
      orderId, 
      createdAt: new Date().toISOString(),
    };

    console.log("Creating order in Sanity:", newOrder); // Log the order being created

    const createdOrder = await sanityClient.create(newOrder);

    return res.status(200).json({ success: true, orderId: createdOrder._id });
  } catch (error) {
    console.error('Error creating order in Sanity:', error);
    return res.status(500).json({ error: 'Error creating order' });
  }
}*/}

{/*import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const sessionId = url.searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json({ error: "Missing session_id" }, { status: 400 });
    }

    console.log("Fetching order for session ID:", sessionId); // Debugging

    // ✅ Updated: Ensure correct query syntax
    const query = `*[_type == "order" && stripeSessionId == $sessionId][0]`;
    const params = { sessionId };

    console.log("Query:", query);  // Log the query
    console.log("Params:", params);
    const order = await sanityClient.fetch(query, params);

    if (!order) {
      console.warn(`No order found for session ID: ${sessionId}`); // Warning instead of error
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    console.log("Order found:", order); // Debugging: Show the retrieved order

    return NextResponse.json({ order }, { status: 200 });
  } catch (error) {
    console.error("Error fetching order:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}*/}





export async function POST(req: Request) {
  try {
    const orderData = await req.json(); // Get the order data sent in the request
    console.log('Received order data:', orderData);

    const orderId = `ORD${Math.floor(Math.random() * 10000)}`;
    const totalAmount = orderData.totalAmount; // Add additional logic to calculate total if needed

    const orderResponse = {
      orderId,
      totalAmount,
    };

    return NextResponse.json(orderResponse, { status: 201 }); // Respond with the order ID and amount
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
  }
}
