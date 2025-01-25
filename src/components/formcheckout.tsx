'use client'

import React, { useRef, useState } from "react";

export default function FormCheckout (){
  // State for saving address to profile
  const [saveToProfile, setSaveToProfile] = useState(false);

  // Refs for form inputs
  const getName = useRef<HTMLInputElement>(null);
  const getPhone = useRef<HTMLInputElement>(null);
  const getEmail = useRef<HTMLInputElement>(null);
  const getAddress1 = useRef<HTMLInputElement>(null);
  const getAddress2 = useRef<HTMLInputElement>(null);
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
        name: getName.current?.value || "",
        phone: getPhone.current?.value || "",
        email: getEmail.current?.value || "",
        addressLine1: getAddress1.current?.value || "",
        addressLine2: getAddress2.current?.value || "",
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

    console.log("Payload:", payload);

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
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12">
      <h1 className="text-2xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Shipment Address Section */}
        <div className="md:col-span-2">
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Shipment Address</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                  <label htmlFor="firstName" className="sr-only">
                    Full Name
                  </label>
                  <input
                    type="text"
                    ref={getName}
                    id="Name"
                    placeholder="Full Name"
                    className="border border-gray-300 rounded-md p-3 w-full"
                    required
                  />
              </div>  
              </div>   
              <div>
                <label htmlFor="address1" className="sr-only">
                  Address Line 1
                </label>
                <input
                  type="text"
                  ref={getAddress1}
                  id="address1"
                  placeholder="Address Line 1"
                  className="border border-gray-300 rounded-md p-3 w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="address2" className="sr-only">
                  Address Line 2 (Optional)
                </label>
                <input
                  type="text"
                  ref={getAddress2}
                  id="address2"
                  placeholder="Address Line 2 (Optional)"
                  className="border border-gray-300 rounded-md p-3 w-full"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="postalCode" className="sr-only">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    ref={getPostalCode}
                    id="postalCode"
                    placeholder="Postal Code"
                    className="border border-gray-300 rounded-md p-3 w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="city" className="sr-only">
                    City
                  </label>
                  <input
                    type="text"
                    ref={getCity}
                    id="city"
                    placeholder="City"
                    className="border border-gray-300 rounded-md p-3 w-full"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <input
                    type="text"
                    ref={getCountry}
                    id="country"
                    placeholder="Country"
                    className="border border-gray-300 rounded-md p-3 w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="province" className="sr-only">
                    State/Province
                  </label>
                  <input
                    type="text"
                    ref={getProvince}
                    id="province"
                    placeholder="State/Province"
                    className="border border-gray-300 rounded-md p-3 w-full"
                    required
                  />
                </div>
              </div>

                <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
                <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    ref={getEmail}
                    id="email"
                    placeholder="Email"
                    className="border border-gray-300 rounded-md p-3 w-full"
                    required
                  />
                  </div>
                   <div>
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                <input
                  type="tel"
                  ref={getPhone}
                  id="phone"
                  placeholder="Phone Number"
                  className="border border-gray-300 rounded-md p-3 w-full"
                  required
                />
                </div>
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


              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="saveToProfile"
                  checked={saveToProfile}
                  onChange={() => setSaveToProfile(!saveToProfile)}
                  className="h-4 w-4"
                />
                <label htmlFor="saveToProfile" className="text-sm">
                  Save this address to my profile
                </label>
              </div>
              <button
                type="submit"
                className="bg-black hover:bg-gray-400 text-white p-3 rounded-md w-full md:w-auto"
              >
                Submit
              </button>
            </form>
          </section>
        

          {/* Billing Address Section */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Billing Address</h2>
            <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                  <label htmlFor="firstName" className="sr-only">
                    Full Name
                  </label>
                  <input
                    type="text"
                    ref={getName}
                    id="Name"
                    placeholder="Full Name"
                    className="border border-gray-300 rounded-md p-3 w-full"
                    required
                  />
              </div>  
              </div>   
              <div>
                <label htmlFor="address1" className="sr-only">
                  Address Line 1
                </label>
                <input
                  type="text"
                  ref={getAddress1}
                  id="address1"
                  placeholder="Address Line 1"
                  className="border border-gray-300 rounded-md p-3 w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="address2" className="sr-only">
                  Address Line 2 (Optional)
                </label>
                <input
                  type="text"
                  ref={getAddress2}
                  id="address2"
                  placeholder="Address Line 2 (Optional)"
                  className="border border-gray-300 rounded-md p-3 w-full"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="postalCode" className="sr-only">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    ref={getPostalCode}
                    id="postalCode"
                    placeholder="Postal Code"
                    className="border border-gray-300 rounded-md p-3 w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="city" className="sr-only">
                    City
                  </label>
                  <input
                    type="text"
                    ref={getCity}
                    id="city"
                    placeholder="City"
                    className="border border-gray-300 rounded-md p-3 w-full"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <input
                    type="text"
                    ref={getCountry}
                    id="country"
                    placeholder="Country"
                    className="border border-gray-300 rounded-md p-3 w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="province" className="sr-only">
                    State/Province
                  </label>
                  <input
                    type="text"
                    ref={getProvince}
                    id="province"
                    placeholder="State/Province"
                    className="border border-gray-300 rounded-md p-3 w-full"
                    required
                  />
                </div>
              </div>

                <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
                <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    ref={getEmail}
                    id="email"
                    placeholder="Email"
                    className="border border-gray-300 rounded-md p-3 w-full"
                    required
                  />
                  </div>
                   <div>
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                <input
                  type="tel"
                  ref={getPhone}
                  id="phone"
                  placeholder="Phone Number"
                  className="border border-gray-300 rounded-md p-3 w-full"
                  required
                />
                </div>
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


              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="saveToProfile"
                  checked={saveToProfile}
                  onChange={() => setSaveToProfile(!saveToProfile)}
                  className="h-4 w-4"
                />
                <label htmlFor="saveToProfile" className="text-sm">
                  Save this address to my profile
                </label>
              </div>
              <button
                type="submit"
                className="bg-black hover:bg-gray-400 text-white p-3 rounded-md w-full md:w-auto"
              >
                Submit
              </button>
            </form>
          </section>
        </div>

        {/* Order Summary Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <p>Subtotal:</p>
              <p>$200.00</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping:</p>
              <p>$10.00</p>
            </div>
            <div className="flex justify-between">
              <p>Tax:</p>
              <p>$15.00</p>
            </div>
            <hr />
            <div className="flex justify-between font-bold">
              <p>Total:</p>
              <p>$225.00</p>
            </div>
          </div>
          <button className="mt-6 w-full bg-black text-white py-3 rounded-md hover:bg-gray-800">
            Continue to Payment
          </button>
        </div>
      </div>
      </div>  
      
  );
};

