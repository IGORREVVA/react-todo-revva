import React from "react";

const TodoListContext = React.createContext({
    todoList: [],
    setTodoList: () => {},
    indexOfElementToEdit: null,
    onError: null
});

export default TodoListContext;
