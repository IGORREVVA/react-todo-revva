import Todo from "../Todo/Todo";

import styles from "./TodoList.module.scss";

const TodoList = ({todoList}) => {


    return (
        <div className={styles.todoList}>
            <div className={styles.todoListHeader}>
                <div className={styles.todoListHeaderName}>Name</div>
                <div className={styles.todoListHeaderFavorite}>Favorite</div>
                <div className={styles.todoListHeaderStatus}>Status</div>
            </div>

            {todoList.map((item, index) => {
                return <Todo key={index} element={item} />
            })}
        </div>
    );
};

export default TodoList;
