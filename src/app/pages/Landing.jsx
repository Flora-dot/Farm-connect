import { Link } from "react-router-dom";
// import { AboutUs } from "./AboutUs";

export default function Landing() {
    return(
        <div>
            This is the landing page
            <Link to='/AboutUs'>About us</Link>
        </div>
    );
}