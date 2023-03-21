import {useParams, useNavigate} from "react-router-dom";
import TodoListContext from "../../../context/context";
import {useContext} from "react";

import Logo from "../../Logo/Logo";
import Form from "../../Form/Form";

import styles from "./EditTodoPage.module.scss";


const EditTodoPage = () => {
    const {todoList, setTodoList} = useContext(TodoListContext);
    const editElementIndex = useParams().index;
    const navigate = useNavigate();

    function editTodo(values) {
        const newTodoList = todoList.map((element, index) => {
            if (editElementIndex - 1 === index) {
                element.name = values.name;
                element.favorite = values.favorite;
                element.status = values.status;
            }
            return element;
        });

        setTodoList([...newTodoList]);
        navigate("/react-todo-revva/todos");
    }

    return (
        <div className={styles.editTodoPage}>
            <Logo />

            <h2 className={styles.editTodoPageHeading}>Edit Todo</h2>

            <Form
                values={todoList[editElementIndex - 1]}
                onSubmit={editTodo}
            />
        </div>
    );
};

export default EditTodoPage;
