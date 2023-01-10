import "./register.css"
import {Link} from "react-router-dom"
export default function register() {
    return (
        <div className='register' >
            <form className='register-form'>

                <h1 className='register-title'>Register</h1>
                <div className="register-form-section">
                    <label>Username</label>
                    <input type="text" placeholder='Enter your username..'></input>
                </div>
                <div className="register-form-section">
                    <label>Email</label>
                    <input type="text" placeholder='Enter your email..'></input>
                </div>
                <div className="register-form-section">
                    <label>Password</label>
                    <input type="text" placeholder='Enter your password..'></input>
                </div>
                <button className='register-submit'>Register</button>
            </form>
            <button className='login-submit'><Link to="/login">Login</Link></button>
        </div>
    )
}
