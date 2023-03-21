import styles from "./Input.module.scss";

const Input = ({inputId, labelContent, value, onChange, onBlur, errors, touched, placeholder}) => {
    return (
        <div className={styles.inputWrapper}>
            {!labelContent ? null : <label className={styles.inputWrapperLabel} htmlFor={inputId}>
                {labelContent}
            </label>}

            <input
                id={inputId}
                className={styles.inputWrapperInput}
                type="text"
                name={inputId}
                value={value}
                placeholder={placeholder}
                onBlur={onBlur}
                onChange={onChange}
                autoComplete="off"
            />

            {
                !errors ? null : errors[inputId] && touched[inputId] ?
                    <div className={styles.inputWrapperError}>
                        {errors[inputId] && touched[inputId] && errors[inputId]}
                    </div>
                    : null
            }
        </div>
    );
};

export default Input;
