import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
  try {
    const orderData = await request.json();
    console.log("📦 Received order data:", orderData);

    if (
      !orderData.customerEmail ||
      !orderData.customerName ||
      !orderData.items.length ||
      !orderData.shippingAddress ||
      !orderData.stripeSessionId ||
      !orderData.status ||
      !orderData.paymentStatus ||
      !orderData.orderId ||
      !orderData.createdAt ||
      !orderData.productImages.length
    ) {
      return NextResponse.json(
        { error: "❌ Missing required fields in order data" },
        { status: 400 }
      );
    }

    const createdOrder = await client.create({
      _type: "order",
      customerEmail: orderData.customerEmail,
      customerName: orderData.customerName,
      items: orderData.items,
      totalAmount: orderData.totalAmount,
      shippingAddress: {
        ...orderData.shippingAddress,
        postal_code: orderData.shippingAddress.postalCode,
      },
      stripeSessionId: orderData.stripeSessionId,
      status: orderData.status,
      paymentStatus: orderData.paymentStatus,
      orderId: orderData.orderId,
      createdAt: orderData.createdAt,
      productImage: orderData.productImages[0] || "",
    });

    console.log("✅ Order Created:", createdOrder);

    return NextResponse.json(createdOrder, { status: 201 });
  } catch (error) {
    console.error("❌ Error creating order:", error);
    return NextResponse.json(
      { error: "Failed to create order in Sanity" },
      { status: 500 }
    );
  }
}

// 🔹 ADD SUPPORT FOR GET REQUESTS
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const session_id = searchParams.get("session_id");

    if (!session_id) {
      return NextResponse.json({ error: "❌ Session ID is required" }, { status: 400 });
    }

    // Fetch order by session_id from Sanity
    const query = `*[_type == "order" && stripeSessionId == $session_id][0]`;
    const order = await client.fetch(query, { session_id });

    if (!order) {
      return NextResponse.json({ error: "❌ Order not found" }, { status: 404 });
    }

    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.error("❌ Error fetching order:", error);
    return NextResponse.json({ error: "Failed to fetch order" }, { status: 500 });
  }
}
