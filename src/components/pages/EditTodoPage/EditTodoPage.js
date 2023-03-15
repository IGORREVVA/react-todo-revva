import {useParams, useNavigate} from "react-router-dom";
import TodoListContext from "../../../context/context";
import {useContext, useState} from "react";

import Logo from "../../Logo/Logo";
import Form from "../../Form/Form";

import styles from "./EditTodoPage.module.scss";


const EditTodoPage = () => {
    const {todoList, setTodoList} = useContext(TodoListContext);
    const editElementIndex = useParams().index;
    const navigate = useNavigate();
    const [favorite, setFavorite] = useState(todoList[editElementIndex - 1].favorite);

    function editTodo(values) {
        const newTodoList = todoList.map((element, index) => {
            if (editElementIndex - 1 === index) {
                element.name = values.name;
                element.favorite = values.favorite;
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
                name={todoList[editElementIndex - 1].name}
                onSubmit={editTodo}
                checked={favorite}
                setChecked={setFavorite}
            />
        </div>
    );
};

export default EditTodoPage;
