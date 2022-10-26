import React from "react";
import "../css/toDo.css";
import {useDispatch} from "react-redux";
import {deleteTodo} from "../slices/todoSlice";

export default function ToDo({toDo}) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTodo(toDo.id));
    }

    return(
        <div className="toDoItem">
            <li>
                <text
                    className="taskText"
                >
                    {toDo.task}
                </text>
                <span
                    className="deleteTask"
                    onClick={handleDelete}
                >
                    x
                </span>
            </li>
        </div>
    );
}