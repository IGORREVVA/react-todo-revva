
import styles from "./Select.module.scss"

const Select = ({id, options, defaultValue, value, onChange, labelContent, errors, touched, }) => {

    return (
        <div className={styles.selectWrapper}>
            {!labelContent ? null : (
                <label className={styles.selectWrapperLabel} htmlFor={id}>
                    {labelContent}
                </label>
            )}

            <select
                id={id}
                className={styles.selectWrapperSelect}
                value={value}
                onChange={onChange}
            >
                <option disabled value="">
                    {defaultValue}
                </option>

                {options.map((option) => (
                    <option key={option.id} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>

            {
                !errors ? null : errors[id] && touched[id] ?
                    <div className={styles.selectWrapperError}>
                        {errors[id] && touched[id] && errors[id]}
                    </div>
                    : null
            }
        </div>
    );
};

export default Select;
