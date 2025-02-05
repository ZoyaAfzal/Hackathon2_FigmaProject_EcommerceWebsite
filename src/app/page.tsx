import Banner from "@/components/banner";
import BannerBottom from "@/components/bannerbottom";
import Essentials from "@/components/essentials";
import Categories from "@/components/categories";
import Header from "@/components/header";
import NikeAir from "@/components/nikeAir";
import Products from "@/components/products";
import { Suspense } from "react";


export default function Home() {
  return (
   <div>
    <Header />
    <Banner />
    <Suspense fallback={<div>Loading NikeAirMax...</div>}>
    <NikeAir />
    </Suspense>
    <BannerBottom />
    <Products />
    <Essentials />
    <Categories />
   </div>
  );
}
