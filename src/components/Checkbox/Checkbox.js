import styles from "./Checkbox.module.scss";

const Checkbox = ({name, inputId, labelContent, value, onChange}) => {
    return (
        <div className={styles.checkboxWrapper}>
            <input
                className={styles.input}
                id={inputId}
                type="checkbox"
                name={name}
                checked={value}
                onChange={onChange}
            />

            <label className={styles.label} htmlFor={inputId}>
                {labelContent}
            </label>
        </div>
    );
};

export default Checkbox;
