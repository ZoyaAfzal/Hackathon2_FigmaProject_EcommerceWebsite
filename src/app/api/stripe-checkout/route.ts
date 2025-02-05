import { NextRequest, NextResponse } from 'next/server';
import Stripe from "stripe";

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-01-27.acacia", 
});
type Item = {
  name: string;
  price: number; 
  quantity: number;
  image:string
};

export async function POST(req: NextRequest) {
  try {
    console.log("✅ Stripe Checkout API called...");

    const { items, customerEmail, customerName, customerAddress }: 
    { items: Item[]; customerEmail: string; customerName: string; customerAddress: { line1: string; city: string; country: string, postalCode: string } } = await req.json();

  console.log("📦 Received Items:", items);
  console.log("👤 Customer Info:", { customerEmail, customerName, customerAddress });



    // 🔹 Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"], // Accept card payments
      line_items: items.map((item) => ({
        price_data: {
          currency: "inr",
          product_data: {
            name: item.name,
            images: [item.image],
          },
          unit_amount: item.price * 100, // Convert INR to paise
        },
        quantity: item.quantity,
      })),
      customer_email: customerEmail, // Add customer email
      shipping_address_collection: {
        allowed_countries: ['IN', 'US', 'CA'], // Restrict to India, US, and Canada
      },
      metadata: {
        customerName,
        customerEmail,
      },
     
     // billing_address_collection: 'required', // Collect billing address
  
      mode: "payment",
     success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
  

      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
    });

    console.log("✅ Stripe Session Created:", session.id);

    // Return session ID to client for redirect
    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error("❌ Error in Stripe Checkout:", error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
  }
} 

