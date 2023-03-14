

import styles from "./Checkbox.module.scss";

const Checkbox = ({name, inputId, labelContent, checked, setChecked}) => {
    return (
        <div>
            <label htmlFor={inputId}>
                <input
                    id={inputId}
                    type="checkbox"
                    name={name}
                    checked={checked}
                    onChange={() => {setChecked(!checked)}}
                />

                {labelContent}
            </label>
        </div>
    );
};

export default Checkbox;
