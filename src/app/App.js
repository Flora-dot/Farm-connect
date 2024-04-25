import Landing from "./pages/Landing";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { AboutUs } from "./pages/AboutUs";
import { NotFound } from "./pages/NotFound";
import { ContactUsPage } from "./pages/ContactUsPage";
import { ProductDetails } from "./pages/ProductDetails";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FarmerProfile } from "./pages/FarmerProfile";
import { LatestOffersPage } from "./pages/LatestOffersPage";
import { DealsOfTheDay } from "./pages/DealsPage/DealsOfDay";
import { PopularItems } from "../components/PopularItems";
import { EmptyCart } from "./pages/EmptyCart";
import { ProductCategoryPage } from "./pages/ProductCategoryPage";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Aboutus" element={<AboutUs />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ContactUs" element={<ContactUsPage />} />
        <Route path="/LatestOffers" element={<LatestOffersPage />} />
        <Route path="/DealsPage" element={<DealsOfTheDay />} />
        <Route path="/PopularItemsPage" element={<PopularItems />} />

        <Route
          path="/ProductCategory/Crops"
          element={<ProductCategoryPage category="Crops" />}
        />
        <Route
          path="/ProductCategory/FruitsandVeggies"
          element={<ProductCategoryPage category="Fruits and Veggies" />}
        />
        <Route
          path="/ProductCategory/Livestock"
          element={<ProductCategoryPage category="Livestock" />}
        />
        <Route path="/Farmerprofile" element={<FarmerProfile />} />
        <Route path="/ProductDetail" element={<ProductDetails />} />
        <Route path="/EmptyCart" element={<EmptyCart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
