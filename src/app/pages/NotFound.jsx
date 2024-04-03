import style from './NotFound.module.css';
import { Link } from "react-router-dom";
import OopsIcon from '../../assets/icons/oops-icon.png';

export function NotFound() {
    return(
        <section className={style['not-found']}>
        <div className={style['not-found-content']}>
            <img src={OopsIcon} alt="" />
            <h1>4<span>0</span>4 Page not found</h1>
            <p>The page you are looking for might have been removed, had it's name changed or is temporarily unavailable. </p>
            <Link to="/"><button>Homepage</button></Link>
        </div>
    </section>
    );
}