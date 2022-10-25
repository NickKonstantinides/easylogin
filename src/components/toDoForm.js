import React, {useState} from "react";
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addTodo} from "../slices/todoSlice";
import "../css/toDo.css";

export default function ToDoForm() {

    const [toDo, setToDo] = useState({
        id: "",
        task: "",
        completed: false
    });

    const dispatch = useDispatch();

    function handleTaskInputChange(e) {
        setToDo({...toDo, task: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (toDo.task.trim()) {
            dispatch(addTodo({
                id: uuid(),
                task: toDo.task,
                time: new Date().toLocaleString()
            }));
            alert("Task added successfully!");
        }
        setToDo({...toDo, task: ""});
    }

    return(
        <div className="toDoList">
            <h2>Top G To-Do List</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="task"
                    type="text"
                    value={toDo.task}
                    onChange={handleTaskInputChange}
                />
                <button
                    type="submit"
                />
            </form>
        </div>
    );
}
