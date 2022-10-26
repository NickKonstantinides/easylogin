import React from "react";
import "../css/homepage.css"
import {useNavigate} from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();

    function handleGotoLogin() {
        navigate("/login");
    }
    return(
        <div className="homepage">
            <h2>Welcome</h2>
            <div className="gotoLogin">
                <button
                    className="gotoLoginButton"
                    type="submit"
                    onClick={handleGotoLogin}
                >
                    Go to Login
                </button>
            </div>
        </div>
    );
}