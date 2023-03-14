import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import TodoListContext from "../../../context/context";
import {Formik, Form} from "formik";

import Input from "../../Input/Input";
import Button from "../../Button/Button";
import Logo from "../../Logo/Logo";
import Checkbox from "../../Checkbox/Checkbox";

import styles from "./CreateTodoPage.module.scss";

const CreateTodoPage = () => {
    const [favorite, setFavorite] = useState(false);
    const [name, setName] = useState("");
    const context = useContext(TodoListContext);
    const {todoList, setTodoList} = context;
    const navigate = useNavigate();

    function addTodo() {
        if (!context.onError.status) {
            setTodoList([...todoList, {
                index: todoList.length + 1,
                name: name,
                favorite: favorite
            }]);
            navigate("/todos");
        }
    }

    return (
        <div className={styles.createTodoPage}>
            <Logo />

            <h1 className={styles.createTodoPageHeading}>Create new</h1>

            <Formik initialValues={{name: name}} onSubmit={() => addTodo()}>
                <Form>
                    <Input
                        inputId="Title"
                        labelContent="Title"
                        value={name}
                        setValue={setName}
                    />

                    <Checkbox
                        inputId="favorites"
                        labelContent="Add to favorites"
                        checked={favorite}
                        setChecked={setFavorite}
                    />

                    <Button
                        buttonType="submit"
                        buttonStyle="primary"
                        handleClick={() => addTodo()}
                    >
                        Add Todo
                    </Button>

                    <Button
                        buttonType="button"
                        buttonStyle="secondary"
                        handleClick={() => navigate("/todos")}
                    >
                        Back
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default CreateTodoPage;
