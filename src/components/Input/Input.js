import styles from "./Input.module.scss";

const Input = ({inputId, labelContent, value, setValue}) => {
    return (
        <div className={styles.inputWrapper}>
            <label htmlFor={inputId}>
                {labelContent}
            </label>

            <input
                id={inputId}
                className={styles.input}
                type="text"
                name={inputId}
                value={value}
                placeholder="Create new Todo"
                onChange={(event) => setValue(event.target.value)}
            />
        </div>
    );
};

export default Input;
