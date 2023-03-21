import styles from "./Input.module.scss";

const Input = ({inputId, labelContent, value, onChange, onBlur, errors, touched, placeholder}) => {
    return (
        <div className={styles.inputWrapper}>
            {!labelContent ? null : <label className={styles.label} htmlFor={inputId}>
                {labelContent}
            </label>}

            <input
                id={inputId}
                className={styles.input}
                type="text"
                name={inputId}
                value={value}
                placeholder={placeholder}
                onBlur={onBlur}
                onChange={onChange}
            />

            {
                !errors ? null : errors[inputId] && touched[inputId] ?
                    <div className={styles.error}>
                        {errors[inputId] && touched[inputId] && errors[inputId]}
                    </div>
                    : null
            }
        </div>
    );
};

export default Input;
