import React,{useState} from "react";
import Login from "./Login";

function LoginPage(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    }

    const onClickLogout = () => {
        setIsLoggedIn(false);
    }

    return(
        <div>
            <Login 
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
        </div>
    );
};

export default LoginPage;