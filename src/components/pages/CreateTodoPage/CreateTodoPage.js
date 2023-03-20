import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import TodoListContext from "../../../context/context";

import Logo from "../../Logo/Logo";
import Form from "../../Form/Form";

import styles from "./CreateTodoPage.module.scss";

const CreateTodoPage = () => {
    const context = useContext(TodoListContext);
    const {todoList, setTodoList} = context;
    const navigate = useNavigate();

    const addTodo = (values) => {
        setTodoList([...todoList, {
            index: todoList.length + 1,
            name: values.name,
            favorite: values.favorite
        }]);
        navigate("/react-todo-revva/todos");
    }

    return (
        <div className={styles.createTodoPage}>
            <Logo />

            <h1 className={styles.heading}>Create new</h1>

            <Form onSubmit={addTodo} />
        </div>
    );
};

export default CreateTodoPage;
