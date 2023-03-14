import {useNavigate} from "react-router-dom";

import logo from "../../../images/logo-big.svg";
import styles from "./Homepage.module.scss";
import Button from "../../Button/Button";

const PreloadPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/todos");
    };

    return (
        <div className={styles.homepageContainer}>
            <div className={styles.homepageLogo}>
                <img src={logo} alt="Logo"/>
            </div>

            <h1 className={styles.homepageHeading}>
                Make successful your day
            </h1>

            <p className={styles.homepageText}>
                Make small somethings to get big gift in your life
            </p>

            <Button
                buttonType="button"
                buttonStyle="primary"
                handleClick={handleClick}
            >
                Start
            </Button>
        </div>
    );
};

export default PreloadPage;
