import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import {Formik} from "formik";
import {useNavigate} from "react-router-dom";

const Form = ({name, onSubmit, checked, setChecked}) => {
    const navigate = useNavigate();
    return (
        <Formik
            initialValues={{name: name ? name : ""}}
            validate={values => {
                const errors = {};

                if (!values.name) {
                    errors.name = "Required field";
                } else if (values.name.length < 2) {
                    errors.name = "Minimum 2 symbols";
                } else if (values.name.length > 50) {
                    errors.name = "Maximum 50 symbols";
                }

                return errors;
            }}
            onSubmit={(values) => {
                onSubmit(values);
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit
            }) => (
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Input
                        inputId="name"
                        labelContent="Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        errors={errors}
                        touched={touched}
                    />

                    <Checkbox
                        inputId="favorites"
                        labelContent="Add to favorites"
                        checked={checked}
                        setChecked={setChecked}
                    />

                    <div className={styles.buttonsWrapper}>
                        <Button
                            buttonType="submit"
                            buttonStyle="primary"
                        >
                            Apply
                        </Button>

                        <Button
                            buttonType="button"
                            buttonStyle="secondary"
                            handleClick={() => navigate("/todos")}
                        >
                            Back
                        </Button>
                    </div>
                </form>
            )}
        </Formik>
    );
};

export default Form;
