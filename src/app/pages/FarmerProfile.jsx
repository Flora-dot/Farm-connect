import { FarmerReviewsAndProducts } from "../../components/FarmerProfile/FarmerProducts";
import { FarmersDetails } from "../../components/FarmerProfile/FarmersDetails";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header/Header";

export const FarmerProfile = () => {
    return(
        <>
        <Header />
        <FarmersDetails />
        <FarmerReviewsAndProducts />
        <Footer />
        </>
    );
}