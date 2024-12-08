import Banner from "@/components/banner";
import BannerBottom from "@/components/bannerbottom";
import Essentials from "@/components/essentials";
import Footer from "@/components/footer";
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
    <Footer />
   </div>
  );
}
