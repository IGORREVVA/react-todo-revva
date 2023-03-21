import {useNavigate} from "react-router-dom";
import TodoListContext from "../../context/context";
import {useContext} from "react";

import Button from "../UI/Button/Button";

import favorite from "../../images/favorite.svg";
import notFavorite from "../../images/not-favorite.svg";
import statusUntouched from "../../images/status-untouched.svg";
import statusPending from "../../images/status-pending.svg";
import statusDone from "../../images/status-done.svg";
import styles from "./Todo.module.scss";

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

    const todoStatus = (status) => {
        switch (status) {
            case "untouched":
                return (
                    <img src={statusUntouched} aria-hidden="true" alt=""/>
                );
            case "pending":
                return (
                    <img src={statusPending} aria-hidden="true" alt=""/>
                );
            case "done":
                return (
                    <img src={statusDone} aria-hidden="true" alt=""/>
                );
        }
    };

    return (
        <li className={styles.todo}>
            <div className={styles.todoBodyWrapper}>
                <h2 className={styles.todoHeading}>{element.name}</h2>

                <div className={styles.todoFavorite}>
                    <img
                        className={styles.todoFavoriteIcon}
                        src={element.favorite ? favorite : notFavorite}
                        alt={`${element.favorite ? "Favorite todo" : "Not favorite todo"}`}
                    />
                </div>

                <div className={styles.todoStatus}>
                    {todoStatus(element.status)}
                </div>
            </div>

            <div className={styles.todoButtonsWrapper}>
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
