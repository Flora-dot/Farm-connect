import { Link } from "react-router-dom";
// import { AboutUs } from "./AboutUs";

export default function Landing() {
    return(
        <div>
            This is the landing page
            <Link to='/AboutUs'>About us</Link>
            <Link to='*'>NotFound</Link>
            <Link to='/ContactUs'>Contactus</Link>
            <Link to='/Login'>Login</Link>
            <Link to='/SignUp'>SignUp</Link>
            <Link to='/FArmerProfile'>FarmerProfile</Link>
            <Link to='/Productdetails'>Product details</Link>
        </div>
    );
}