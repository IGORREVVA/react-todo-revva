import React, {Suspense, useState} from "react";
import styles from './App.module.scss';
import {Route, Routes} from "react-router-dom";
import TodoListContext from "../../context/context";

const Homepage = React.lazy(() => import("../pages/Homepage/Homepage"));
const TodosPage = React.lazy(() => import("../pages/TodosPage/TodosPage"));
const CreateTodoPage = React.lazy(() => import("../pages/CreateTodoPage/CreateTodoPage"));
const EditTodoPage = React.lazy(() => import("../pages/EditTodoPage/EditTodoPage"));

const App = () => {
    const [todoList, setTodoList] = useState([]);
    const onError = {
        status: false,
        text: ""
    };

    return (
        <>
            <div className={styles.App}>
                <Suspense>
                    <Routes>
                        <Route
                            path="/react-todo-revva"
                            element={<Homepage/> }
                        />

                        <Route
                            path="/react-todo-revva/todos"
                            element={
                                <TodoListContext.Provider value={{todoList, setTodoList}}>
                                    <TodosPage/>
                                </TodoListContext.Provider>
                            }
                        />

                        <Route
                            path="/react-todo-revva/todos/new"
                            element={
                                <TodoListContext.Provider value={{todoList, setTodoList, onError}}>
                                    <CreateTodoPage/>
                                </TodoListContext.Provider>
                            }
                        />

                        <Route
                            path="/react-todo-revva/todos/edit/:index"
                            element={
                                <TodoListContext.Provider value={{todoList, setTodoList}}>
                                    <EditTodoPage />
                                </TodoListContext.Provider>
                            }
                        />
                    </Routes>
                </Suspense>
            </div>
        </>
    );
}

export default App;
