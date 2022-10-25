import React , {useState} from "react";
import '../css/loginForm.css'

// eslint-disable-next-line react/prop-types
export default function LoginForm({Login, error}) {

    const [loginInfo, setLoginInfo] = useState({username: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(loginInfo);
    }

    function renderErrorMessage() {
        return(
            <div className="errorMessage">
                {error}
            </div>
        );
    }

    return (
        <div className="form">
            <div>
                <h2 id="formTitle">Login to Test</h2>
                {(error !== "") ? renderErrorMessage() : ""}
            </div>
            <form onSubmit={submitHandler}>
                <div className="input-container">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        required
                        onChange={e => setLoginInfo({...loginInfo, username: e.target.value})}
                        value = {loginInfo.username}
                    />
                </div>
                <div className="input-container">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        onChange={e => setLoginInfo({...loginInfo, password: e.target.value})}
                        value = {loginInfo.password}
                    />
                </div>
                <div className="button-container">
                    <input
                        type="submit"
                        value ="Login"
                    />
                </div>
            </form>
        </div>
    );
}