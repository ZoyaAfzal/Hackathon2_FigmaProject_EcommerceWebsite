import Banner from "@/components/banner";
import BannerBottom from "@/components/bannerbottom";
import Essentials from "@/components/essentials";
import Categories from "@/components/categories";
import Header from "@/components/header";
import NikeAir from "@/components/nikeAir";
import Products from "@/components/products";


export default function Home() {
  return (
   <div>
    <Header />
    <Banner />
    <NikeAir />
    <BannerBottom />
    <Products />
    <Essentials />
    <Categories />
   </div>
  );
}
