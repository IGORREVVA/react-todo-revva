import styles from "./TodoList.module.scss";

import Todo from "../Todo/Todo";

const TodoList = ({todoList}) => {


    return (
        <div className={styles.todoList}>
            {todoList.map((item, index) => {
                return <Todo key={index} element={item} />
            })}
        </div>
    );
};

export default TodoList;
