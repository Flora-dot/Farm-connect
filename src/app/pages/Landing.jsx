
// import { ContactUs } from "../../Component/Contact";
import { Link } from "react-router-dom";
// import { AboutUs } from "./AboutUs"; main

export default function Landing() {
    return(
        <div>
            This is the landing page

            <Link to='/AboutUs'>About us</Link>
            <Link to='*'>NotFound</Link>
        </div>
    );
}