import Button from "../Button/Button";

import styles from "./Todo.module.scss";
import favorite from "../../images/favorite.svg";
import notFavorite from "../../images/not-favorite.svg";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import TodoListContext from "../../context/context";

const Todo = ({element}) => {
    const context = useContext(TodoListContext);
    const {todoList, setTodoList} = context;
    const navigate = useNavigate();
    const deleteTodo = (deletedTodo) => {
        const newTodoList = todoList.filter(todo => todo.index !== deletedTodo.index);

        setTodoList(newTodoList);
    };
    const editTodo = (element) => {
        navigate(`/react-todo-revva/todos/edit/${element.index}`);
    };

    return (
        <li className={styles.todo}>
            <div className={styles.headingWrapper}>
                <img
                    className={styles.todoIcon}
                    src={element.favorite ? favorite : notFavorite}
                    alt={`${element.favorite ? "Favorite todo" : "Not favorite todo"}`}
                />

                <h2 className={styles.todoHeading}>{element.name}</h2>
            </div>

            <div>
                <Button
                    buttonType="button"
                    buttonStyle="secondary"
                    handleClick={() => deleteTodo(element)}
                >
                    Delete
                </Button>

                <Button
                    buttonType="button"
                    buttonStyle="yellow"
                    handleClick={() => editTodo(element)}
                >
                    Edit
                </Button>
            </div>
        </li>
    );
};

export default Todo;
