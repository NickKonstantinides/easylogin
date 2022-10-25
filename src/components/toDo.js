import React from "react";
import "../css/toDo.css";

export default function ToDo({toDo}) {

    return(
        <div className="toDoItem">
            <input
                type="checkbox"
            />
            <li
                style = {{
                    color: "black",
                    textDecoration: toDo.completed ? "line-through" : null
                }}
            >
                {toDo.task}
            </li>
            <button
                value="X"
            />
        </div>
    );
}