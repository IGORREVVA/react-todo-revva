import {Link} from "react-router-dom";

import logoSmall from "../../images/logo-small.svg";
import styles from "./Logo.module.scss"

const Logo = () => {
    return (
        <Link to="/">
            <div className={styles.logo}>
                <img src={logoSmall} alt="Logo"/>
            </div>
        </Link>
    );
};

export default Logo;
