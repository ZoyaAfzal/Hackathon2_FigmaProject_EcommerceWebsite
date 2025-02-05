'use client'
import React from "react";
import CheckoutForm from "../../components/formcheckout";
import MobileNavbar from "@/components/mobileNavbar";


export default function CheckoutPage (){

  return (
    <div className="w-full max-w-[1344px] h-auto">
      <div className="md:hidden">
<MobileNavbar/>
      </div>
<CheckoutForm />    
    </div>
  );
};  

