import {Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {todoStatus} from "../../utilities/todoStatus";

import Input from "../UI/Input/Input";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../UI/Button/Button";
import Select from "../UI/Select/Select";

import styles from "./Form.module.scss";

const Form = ({values, onSubmit}) => {
    const navigate = useNavigate();
    const name = values?.name ? values.name : "";
    const favorite = values?.favorite ? values.favorite : false;
    const status = values?.status ? values.status : "";

    return (
        <Formik
            initialValues={{name: name, favorite: favorite, status: status}}
            validate={values => {
                const errors = {};

                if (!values.name) {
                    errors.name = "Required field";
                } else if (values.name.length < 2) {
                    errors.name = "Minimum 2 symbols";
                } else if (values.name.length > 50) {
                    errors.name = "Maximum 50 symbols";
                }

                if (!values.status) {
                    errors.status = "Required field";
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
                        placeholder="Create new Todo"
                    />

                    <Select
                        id="status"
                        defaultValue="Status"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.status}
                        options={todoStatus}
                        labelContent="Status"
                        errors={errors}
                        touched={touched}
                    />

                    <Checkbox
                        inputId="favorite"
                        labelContent="Add to favorites"
                        onChange={handleChange}
                        value={values.favorite}
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
                            handleClick={() => navigate("/react-todo-revva/todos")}
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
