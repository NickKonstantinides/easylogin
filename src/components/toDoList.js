import React from "react";
import ToDo from "./toDo";
import "../css/toDo.css";
import {useSelector} from "react-redux";

export default function ToDoList() {

    const todoList = useSelector((state) => state.todo.todoList);

    return (
        <div className="toDoDisplay">
            <ul>
                {todoList?.map(toDoItem => (
                    <ToDo
                        key={toDoItem.id}
                        toDo={toDoItem}
                    />
                ))}
            </ul>
        </div>
    );
}