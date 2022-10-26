import ToDoForm from "../components/toDoForm";
import ToDoList from "../components/toDoList";
import React from "react";

export default function Todo() {
    return (
        <div className="ToDoList">
            <ToDoForm/>
            <ToDoList/>
        </div>
    );
}