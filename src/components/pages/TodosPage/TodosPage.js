import {useLocation, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import TodoListContext from "../../../context/context";

import Logo from "../../Logo/Logo";
import Button from "../../Button/Button";
import Pagination from "../../Pagination/Pagination";
import TodoList from "../../TodoList/TodoList";

import styles from "./TodosPage.module.scss";

const TodosPage = () => {
    const context = useContext(TodoListContext);
    const navigate = useNavigate();
    const {todoList} = context;
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const { search } = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(search);
        const page = parseInt(params.get('page'));

        setTotalPages(Math.ceil(todoList.length / 5));

        if (page && page <= totalPages) {
            setCurrentPage(page);
        }
    }, [search, totalPages, todoList.length]);

    const startIndex = (currentPage - 1) * 5;
    const endIndex = startIndex + 5;
    const currentItems = todoList.slice(startIndex, endIndex);

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

            {todoList?.length > 0 ? <TodoList todoList={currentItems} /> : <div className={styles.todosPageNotFound}>Not found todos!!!</div>}

            {todoList?.length > 5 ? <Pagination currentPage={currentPage} totalPages={totalPages} /> : null}
        </div>
    );
};

export default TodosPage;
