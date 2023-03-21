import {useContext, useEffect, useState} from 'react';
import TodoListContext from "../../context/context";

import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

import styles from "./SearchBar.module.scss"

const SearchBar = () => {
    const context = useContext(TodoListContext)
    const {todoList} = context;
    const [search, setSearch] = useState("");

    const searchTodoList = (search, todoList) => {
        const arr = todoList.filter((item) => {
            return item.name.toLowerCase().includes(search.toLowerCase());
        });
    };

    return (
        <div className={styles.searchBar}>
            <Input
                inputId="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search todos"
            />

            <Button
                buttonType="button"
                buttonStyle="primary"
                handleClick={() => searchTodoList(search, todoList)}
            >
                Search
            </Button>
        </div>
    );
};

export default SearchBar;
