import {useLocation, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import TodoListContext from "../../../context/context";
import {sortOptions} from "../../../utilities/sortOptions";

import Logo from "../../Logo/Logo";
import Button from "../../UI/Button/Button";
import Pagination from "../../UI/Pagination/Pagination";
import TodoList from "../../TodoList/TodoList";
import SearchBar from "../../SearchBar/SearchBar";
import Select from "../../UI/Select/Select";

import styles from "./TodosPage.module.scss";

const TodosPage = () => {
    const context = useContext(TodoListContext);
    const navigate = useNavigate();
    const {todoList, setTodoList} = context;
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const { search } = useLocation();
    const [selectedSort, setSelectedSort] = useState("");

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

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        switch (sort) {
            case "ascending":
                setTodoList([...todoList].sort((a, b) => a.name.localeCompare(b.name)));
                break;
            case "descending":
                setTodoList([...todoList].sort((a, b) => b.name.localeCompare(a.name)));
                break;
            case "favorites":
                setTodoList([...todoList].sort((a, b) => (a.favorite === b.favorite) ? 0 : a.favorite ? -1 : 1));
                break;
        }
        console.log("sort", sort);
    };

    return (
        <div className={styles.todosPage}>
            <div className={styles.todosPageHeader}>
                <Logo />

                <div className={styles.todosPageSearchBar}>
                    <SearchBar />
                </div>

                <div className={styles.todosPageSort}>
                    <Select
                        value={selectedSort}
                        onChange={sortPosts}
                        defaultValue="Sort by"
                        options={sortOptions}
                    />
                </div>

                <div className={styles.todosPageNewTodoButton}>
                    <Button
                        buttonType="button"
                        buttonStyle="primary"
                        handleClick={() => navigate("/react-todo-revva/todos/new")}
                    >
                        Create new
                    </Button>
                </div>
            </div>

            {todoList?.length > 0 ? <TodoList todoList={currentItems} /> : <div className={styles.todosPageNotFound}>Not found todos!!!</div>}

            {todoList?.length > 5 ? <Pagination currentPage={currentPage} totalPages={totalPages} /> : null}
        </div>
    );
};

export default TodosPage;
