import Button from "../Button/Button";

import styles from "./Todo.module.scss";
import favorite from "../../images/favorite.svg";
import notFavorite from "../../images/not-favorite.svg";

const Todo = ({element, actions}) => {

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
                    handleClick={() => actions.delete(element)}
                >
                    Delete
                </Button>

                <Button
                    buttonType="button"
                    buttonStyle="yellow"
                    handleClick={() => actions.edit(element)}
                >
                    Edit
                </Button>
            </div>
        </li>
    );
};

export default Todo;
