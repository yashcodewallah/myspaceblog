import "./login.css"
import {Link} from "react-router-dom"
export default function login() {
    return (
        <div className='login'>
            <form className='login-form'>

                <h1 className='login-title'>Login</h1>
                <div className="login-form-section">
                    <label>Email</label>
                    <input type="text" placeholder='Enter your email'></input>
                </div>
                <div className="login-form-section">
                    <label>Password</label>
                    <input type="text" placeholder='Enter your password'></input>
                </div>
                {/* <button className='login-submit'>Login</button> */}
                <button className="login-button">Login</button>
            </form>
            <button className='register-button'> <Link to="/register">Register</Link></button>
        </div>
    )
}
