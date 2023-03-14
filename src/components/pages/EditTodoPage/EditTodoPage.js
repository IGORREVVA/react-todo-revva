import {useParams, useNavigate} from "react-router-dom";
import TodoListContext from "../../../context/context";
import {useContext, useState} from "react";

import Input from "../../Input/Input";
import Button from "../../Button/Button";
import Logo from "../../Logo/Logo";
import Checkbox from "../../Checkbox/Checkbox";

import styles from "./EditTodoPage.module.scss";

const EditTodoPage = () => {
    const {todoList, setTodoList} = useContext(TodoListContext);
    const editElementIndex = useParams().index;
    const navigate = useNavigate();

    const [name, setName] = useState(todoList[editElementIndex - 1].name);
    const [favorite, setFavorite] = useState(todoList[editElementIndex - 1].favorite);

    function editTodo(name, favorite) {
        const newTodoList = todoList.map((element, index) => {
            if (editElementIndex - 1 === index) {
                element.name = name;
                element.favorite = favorite;
            }
            return element;
        });

        setTodoList([...newTodoList]);
        navigate("/todos");
    }

    return (
        <div className={styles.editTodoPage}>
            <Logo />

            <h2 className={styles.editTodoPageHeading}>Edit Todo</h2>

            <Input
                inputId="Title"
                labelContent="Title"
                value={name}
                setValue={setName}
            />

            <Checkbox
                inputId="favorites"
                labelContent="Add to favorites"
                checked={favorite}
                setChecked={setFavorite}
            />

            <Button
                handleClick={() => editTodo(name, favorite)}
                buttonType="button"
                buttonStyle="primary"
            >
                Apply
            </Button>

            <Button
                handleClick={() =>navigate("/todos")}
                buttonType="button"
                buttonStyle="secondary"
            >
                Back
            </Button>
        </div>
    );
};

export default EditTodoPage;
