// import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { HeroSection } from "../../components/HeroSection/Hero";
import { FarmConnectInfo } from "../../components/FarmConnectInfo";
import { Deals } from "../../components/Deals";
import { PopularItems } from "../../components/PopularItems";
import { Reviews } from "../../components/Reviews";
import { BecomeAgent } from "../../components/BecomeAgent";
import { OnSale } from "../../components/OnSale";
import { Footer } from "../../components/Footer";

export default function Landing() {
    return(
        <>
           <Header />
           <HeroSection />
           <FarmConnectInfo />
           <Deals />
           <PopularItems />
           <BecomeAgent />
           <Reviews />
           <OnSale />
           <Footer />
        </>
    );
}