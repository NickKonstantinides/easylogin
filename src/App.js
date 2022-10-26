import React, {useState} from "react";
import LoginForm from "./components/loginForm";
import ToDoForm from "./components/toDoForm";
import ToDoList from "./components/toDoList";
import "./css/App.css";

export default function App() {

    const userDatabase = [
        {
            name: "adminUser",
            info: {
                username: "admin",
                password: "pass"
            }
        },
        {
            name: "rickroll",
            info: {
                username: "rick",
                password: "roll"
            }
        }
    ];

    const [user, setUser] = useState("");
    const [error, setError] = useState("");

    const Login = loginInfo => {
        console.log(loginInfo);

        const userData = userDatabase.find(validUser => {
            return(validUser.info.username === loginInfo.username);
        });
        if (!userData || !(userData.info.username === loginInfo.username && userData.info.password === loginInfo.password)) {
            setError("Invalid Username or Password");
        } else {
            setUser(loginInfo.username);
            if (userData.info.username === "rick") {
                window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
            }
        }
    }

    return (
        <div className="app">
            <div className="loginProject">
                <div className="Sign In">
                    {((user !== "")) ? (
                        <div className="ToDoList">
                            <ToDoForm/>
                            <ToDoList/>
                        </div>
                    ) : (
                        <div className="LoginForm">
                        <LoginForm
                            Login={Login}
                            error={error}
                        />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
