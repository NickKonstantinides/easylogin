import './App.css';
import React, { useState } from "react";

function App() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        },
        {
            username: "rick",
            password: "roll"
        }
    ];

    const errors = {
        uname: "Invalid Username",
        pass: "Invalid Password"
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let { uname, pass } = document.forms[0];

        const userData = database.find((user) => user.username === uname.value);

        if (userData) {
            if (userData.password !== pass.value) {
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                if (userData.username === "rick") window.location.href ="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
                setIsSubmitted(true);
                setErrorMessages({});
            }
        } else {
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const renderForm = (
        <div className="form">
            <div>
                <h2 id="formTitle">Test Form</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <input type="text" name="uname" placeholder="Username" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <input type="password" name="pass" placeholder="Password" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    const renderLoggedIn = (
        <div className="loggedIn">
            <div>
                <h2>User is successfully logged in</h2>
            </div>
            <div>
                <button onClick={() => setIsSubmitted(false)} className="backToLogin">Back to Login</button>
            </div>
        </div>
    );



    return (
        <div className="app">
            <div className="loginProject">
                <div className="Sign In">
                    {isSubmitted ? renderLoggedIn : renderForm}
                </div>
            </div>
        </div>
    );
}

export default App;
