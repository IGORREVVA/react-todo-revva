import styles from "./Checkbox.module.scss";

const Checkbox = ({name, inputId, labelContent, checked, setChecked}) => {
    return (
        <div className={styles.checkboxWrapper}>
            <input
                className={styles.input}
                id={inputId}
                type="checkbox"
                name={name}
                checked={checked}
                onChange={() => setChecked(!checked)}
            />

            <label className={styles.label} htmlFor={inputId}>
                {labelContent}
            </label>
        </div>
    );
};

export default Checkbox;
