import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import TodoListContext from "../../../context/context";

import Todo from "../../Todo/Todo";
import Logo from "../../Logo/Logo";
import Button from "../../Button/Button";

import styles from "./TodosPage.module.scss";

const TodosPage = () => {
    const context = useContext(TodoListContext);
    const navigate = useNavigate();
    const {todoList, setTodoList} = context;
    const deleteTodo = (deletedTodo) => {
        const newTodoList = todoList.filter(todo => todo.index !== deletedTodo.index);

        setTodoList(newTodoList);
    };
    const editTodo = (element) => {
        navigate(`/react-todo-revva/todos/edit/${element.index}`);
    };

    const actions = {
        delete: deleteTodo,
        edit: editTodo
    };

    return (
        <div className={styles.todosPage}>
            <div className={styles.todosPageHeader}>
                <Logo />

                <Button
                    buttonType="button"
                    buttonStyle="primary"
                    handleClick={() => navigate("/react-todo-revva/todos/new")}
                >
                    Create new
                </Button>
            </div>

            <div className={styles.todosPageList}>
                {todoList?.length > 0 ? (
                    todoList.map(element => {
                        return <Todo key={element.index} element={element} actions={actions} />;
                    })
                ) : (
                    <div>
                        <h3 className={styles.todosPageHeading}>No Todo found!!!</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TodosPage;
