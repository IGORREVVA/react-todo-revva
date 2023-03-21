import styles from "./Button.module.scss";

const Button = ({buttonType, buttonStyle, handleClick, children}) => {
    return (
        <button type={buttonType} className={styles.button + " " + styles[buttonStyle]} onClick={handleClick}>
            {children}
        </button>
    );
};

export default Button;
