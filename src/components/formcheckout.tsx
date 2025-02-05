'use client';
import React, { useEffect, useRef, useState } from "react";
import toast  from "react-hot-toast"; 
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import { CartItem } from "@/app/addtocart/page";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);


const CheckoutForm = () => {
      // State for saving address to profile
      const [saveToProfile] = useState(false);
       const [cartItems, setCartItems] = useState<CartItem[]>([]);
       const [isLoading, setIsLoading] = useState(false)
      const subtotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
   
      useEffect(() => {
        const savedCart = localStorage.getItem("checkoutCart");
        if (savedCart) {
          setCartItems(JSON.parse(savedCart));
        }
      }, []);
    
      // Refs for form inputs
      const getFirstName = useRef<HTMLInputElement>(null);
      const getLastName = useRef<HTMLInputElement>(null);
      const getPhone = useRef<HTMLInputElement>(null);
      const getEmail = useRef<HTMLInputElement>(null);
      const getAddress1 = useRef<HTMLInputElement>(null);
      const getAddress2 = useRef<HTMLInputElement>(null);
      const getAddress3 = useRef<HTMLInputElement>(null);
      const getCity = useRef<HTMLInputElement>(null);
      const getProvince = useRef<HTMLInputElement>(null);
      const getPostalCode = useRef<HTMLInputElement>(null);
      const getCountry = useRef<HTMLInputElement>(null);
      const getAddressResidentialIndicator = useRef<HTMLSelectElement>(null);
     
      
              // Handle form submission
              const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                // Construct payload
                const payload = {
                  shipToAddress: {
                    firstname: getFirstName.current?.value || "",
                    lastname: getLastName.current?.value || "",
                    phone: getPhone.current?.value || "",
                    email: getEmail.current?.value || "",
                    addressLine1: getAddress1.current?.value || "",
                    addressLine2: getAddress2.current?.value || "",
                    addressLine3: getAddress3.current?.value || "",
                    cityLocality: getCity.current?.value || "",
                    stateProvince: getProvince.current?.value || "",
                    postalCode: getPostalCode.current?.value || "",
                    countryCode: getCountry.current?.value || "",
                    residentialIndicator: getAddressResidentialIndicator.current?.value || "",
                  },
                  packages: [
                    {
                      weight: { value: 5, unit: "ounce" },
                      dimensions: { height: 3, width: 15, length: 10, unit: "inch" },
                    },
                  ],
                  saveToProfile,
                };
      
                try {
                  // Send POST request to the API
                  const res = await fetch("http://localhost:3000/api/shipengine", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                  });
            
                  if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                  }
            
                  const data = await res.json();
                  console.log("Response from API:", data);
            
                  // Display success message or handle response
                  toast.success("Form submitted successfully!");
                } catch (error) {
                  console.error("Error submitting form:", error);
                  toast.error("An error occurred. Please try again.");
                };
              };


       const handlePlaceOrder = async () => {
          console.log("Cart Items before sending to API:", cartItems);
          try {
            setIsLoading(true);
            const stripe = await stripePromise;
      
            if (!stripe) {
              throw new Error("Stripe failed to initialize.");
            }

            const customerEmail = getEmail.current?.value.trim();
            const customerName = `${getFirstName.current?.value.trim()} ${getLastName.current?.value.trim()}`;
            const customerAddress = {
              line1: getAddress1.current?.value.trim(),
              city: getCity.current?.value.trim(),
              postal_code: getPostalCode.current?.value.trim(),
              country: getCountry.current?.value.trim(),
            };
            
            // Validate required fields
            if (!getEmail.current?.value || !getFirstName.current?.value || !getLastName.current?.value) {
              alert("Please fill in all required fields.");
              return;
            }
    
           const items = cartItems.map(item => ({
              name: item.name,
              price: item.price,
              image: item.imageUrl, // Ensure this field exists
              quantity: item.quantity
            })); 

            console.log("Items to be sent to Stripe:", items); 


            const res = await fetch("/api/stripe-checkout", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                items,
                customerEmail,
                customerName,
                customerAddress,
              }),
            });
            console.log("Response from /api/stripe-checkout:", res);
            if (!res.ok) {
              const errorData = await res.json();
              toast.error(`Stripe checkout failed: ${errorData.error || 'Unknown error'}`);
              throw new Error(errorData.error || "Checkout failed");
            }
      
            const { id: sessionId } = await res.json();
            const result = await stripe.redirectToCheckout({ sessionId });
      
            if (result.error) {
              throw result.error;
            }

          const orderPayload = {
              customerEmail,
              customerName,
              items,
              totalAmount: subtotal,
              shippingAddress: customerAddress,
              stripeSessionId: sessionId,
              createdAt: new Date().toISOString(), // Ensure a timestamp is added
              status: "pending", // Default order status
              paymentStatus: "unpaid", // Track payment status
              orderId: `ORDER-${Date.now()}`, 
            };
         
         
         const orderRes = await fetch("/api/create-order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify( orderPayload )
           
            });
            console.log("Order data sent to /api/create-order:", orderPayload);

       const orderData = await orderRes.json();
            console.log('Order creation response:', orderData); 
            
            if (!orderRes.ok) {
              const errorData = await orderRes.json();
              throw new Error("Failed to save order to Sanity", errorData);
            }
        
            console.log("Order saved to Sanity", orderData);
            toast.success("Order placed successfully!");




          } catch (err) {
            setIsLoading(false);
            
            // Proper error type handling
            let errorMessage = "There was an error during the checkout process. Please try again.";
            
            if (err instanceof Error) {
              errorMessage = err.message;
            } else if (typeof err === "string") {
              errorMessage = err;
            }
      
            console.error("Checkout Error:", err);
            alert(errorMessage);
          }
      
        }
       
        
    
              

  return (
    <div className="max-w-5xl mx-auto p-6 grid lg:grid-cols-2 gap-32">
      {/* Left Section - Shipping Form */}
      <div className="bg-white p-6 shadow-md rounded-lg lg:w-[500px]">
        <h2 className="text-xl font-semibold mb-4">How would you like to get your order?</h2>
        <p className="text-gray-600 text-sm">Customs regulation for India require a copy of the recipient&apos;s KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used safely for the purpose of clearing customs (including shring it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. <span className="underline underline-offset-1">Learn More</span>
        </p>
        <select className="w-full p-2 border rounded mb-4 mt-2">
          <option>Deliver</option>
        </select>

        <h2 className="text-xl font-semibold mb-4">Enter your Name and Shipment Address:</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <input ref={getFirstName} type="text" placeholder="First Name" className="border p-2 rounded" />
          <input ref={getLastName} type="text" placeholder="Last Name" className="border p-2 rounded" />
          <div className="w-full">
          <input ref={getAddress1} type="text" placeholder="Address Line 1" className="border p-2 rounded w-full" /><br/>
          <span className="text-gray-400 text-sm ml-1">We do not ship to P.O boxes</span>
          </div>
          <input ref={getAddress2} type="text" placeholder="Address Line 2" className="border p-2 rounded" />
          <input ref={getAddress3} type="text" placeholder="Address Line 3" className="border p-2 rounded" />
          <div className="grid grid-cols-1 gap-4 relative">
            <input 
            ref={getPostalCode} 
            type="text" 
            placeholder="Postal Code" 
            className="border p-2 rounded" 
            required
            pattern="[0-9]{5}"
            onInvalid={(e) => {
              e.currentTarget.setCustomValidity(
                "Please enter a 6-digit postal code"
              );
            }}
            onInput={(e) => e.currentTarget.setCustomValidity('')}
            />
            <span className="absolute right-2 top-3 text-red-500 peer-valid:hidden">*</span>
  <span className="text-red-500 text-sm hidden peer-invalid:block">
    6-digit postal code required
  </span>

            <input ref={getCity} type="text" placeholder="CityLocality" className="border p-2 rounded" />
          
          </div>
         {/*<select className="w-full p-2 border rounded">
            <option>India</option>
          </select> */}
            <div className="grid grid-cols-1 gap-4">
            <input 
            ref={getProvince} 
            type="text" 
            placeholder="State/Province" 
            className="border p-2 rounded" 
            required
      pattern="[A-Za-z ]{3,}"
      onInvalid={(e) => {
        e.currentTarget.setCustomValidity(
          "Please enter a valid state/province (min 3 characters)"
        );
      }}
      onInput={(e) => e.currentTarget.setCustomValidity('')}
            />
              <span className="absolute right-2 top-3 text-red-500 peer-valid:hidden">*</span>
    <span className="text-red-500 text-sm hidden peer-invalid:block">
      Required field - min 3 characters
    </span>
            <input 
            ref={getCountry}
            type="text" 
            placeholder="Country" 
            className="border p-2 rounded"
            required
            pattern="[A-Za-z ]{3,}"
            onInvalid={(e) => {
              e.currentTarget.setCustomValidity(
                "Please enter a valid country name (min 3 characters)"
              );
            }}
            onInput={(e) => e.currentTarget.setCustomValidity('')}
             />
               <span className="absolute right-2 top-3 text-red-500 peer-valid:hidden">*</span>
    <span className="text-red-500 text-sm hidden peer-invalid:block">
      Required field - enter valid country
    </span>
          </div>
          <div>
                <label htmlFor="residentialIndicator" className="sr-only">
                  Residential Indicator
                </label>
                <select
                  id="residentialIndicator"
                  ref={getAddressResidentialIndicator}
                  className="border border-gray-300 rounded-md p-3 w-full"
                  required
                >
                  <option value="">Select Residential Indicator</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>


          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Save this address to my profile</span>
          </label>
          <h2 className="text-xl font-semibold mt-4">What&apos;s your contact information?</h2>
          <div className="relative">
          <input 
          ref={getEmail} 
          type="email" 
          placeholder="Email" 
          className="border p-2 rounded w-full" 
          required
    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
    onInvalid={(e) => {
      e.currentTarget.setCustomValidity(
        "Please enter a valid email address"
      );
    }}
    onInput={(e) => e.currentTarget.setCustomValidity('')}
          />
            <span className="absolute right-2 top-3 text-red-500 peer-valid:hidden">*</span>
  <span className="text-red-500 text-sm hidden peer-invalid:block">
    Valid email required
  </span>
          <br />
          <span className="text-gray-400 ml-1 text-sm">A confirmation email will be sent after checkout.</span>
          </div>
          <div className="">
          <input 
          ref={getPhone} 
          type="tel" 
          placeholder="Phone Number" 
          className="border p-2 rounded w-full"
    required
           />
          <span className="text-gray-400 ml-1 text-sm">A carrier might contact you to confirm delivery.</span>
          </div>
      {/*    <h2 className="text-xl font-bold mt-4">What’s your PAN?</h2>
          <input type="text" placeholder="PAN" className="border p-2 rounded" /> */}
          <button type="submit" className="w-full bg-black text-white p-3 rounded mt-4 hover:bg-gray-400">Continue</button>
        </form>
      </div>

      {/* Right Section - Order Summary */}
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="flex-col items-center gap-4 border-b pb-4">
        {cartItems.map((item) => (
          <div key={item._id} className="flex space-x-4 p-4 border">
            <Image src={item.imageUrl} alt={item.name} width={100} height={100} />
            <div>
              <p className="font-bold">{item.name}</p>
              <p className="text-sm text-gray-500">{item.category}</p>
              <p>Size: {item.selectedSize}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ₹{item.price.toFixed(2)}</p>
              <p>Total: ₹{item.totalPrice.toFixed(2)}</p>
            </div>
          </div>
        ))}
        </div> 
        <div className="border-t mt-4 pt-4">
          <p className="flex justify-between"><span>Subtotal:</span> <span>₹{subtotal.toFixed(2)}</span></p>
          <p className="flex justify-between"><span>Shipping:</span> <span>Free</span></p>
          <p className="flex justify-between font-bold text-lg"><span>Total:</span> <span>₹{subtotal.toFixed(2)}</span></p>
        </div>
        <button onClick={handlePlaceOrder}
        disabled={isLoading}
        className="bg-black text-white py-2 w-full mt-6 hover:bg-slate-500 cursor-pointer">
           {isLoading ? "Processing..." : "Place Order"}
      </button>
      </div>
    </div>
  )
}; 


export default CheckoutForm;