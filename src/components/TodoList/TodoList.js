import styles from "./TodoList.module.scss";
import {Link} from "react-router-dom";

const TodoList = () => {
    return (
        <div>
            TO DO LIST

            <div className={styles.counter}>
                8 Todos
            </div>

            <Link to="/tasks/new">
                New todo
            </Link>
        </div>
    );
};

export default TodoList;
