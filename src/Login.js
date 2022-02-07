import React from "react";
import 'react-phone-number-input/style.css';
const Login = () => {


  
    return(
        <div>
            <div>
            <form>
                <h1>Login</h1>
                <ul>
                    <li>
                        <label htmlFor="phoneNumber">Phone Number</label>
                    </li>
                    <li>
                    <input
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                             event.preventDefault();
                            }
                        }}
    />
                    </li>
                </ul>
                <ul>
                    <li>
                        <label htmlFor="password">Password</label>
                    </li>
                    <li>
                        <input type="password" placeholder="Enter your password" name="password" />
                    </li>
                </ul>
            </form>

            </div>
        </div>
    )
};
export default Login;