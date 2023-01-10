import "./settings.css"
import Sidebar from "../../components/sidebar/sidebar"
import SettingsImg from "./my-photo.jpg"

export default function settings() {
    return (
        <div className="settings-wrapper">
            <div className="settings">
                <div className="settings-title">
                    <span className="settings-update-title">Update your Account</span>
                    <span className="settings-delete-title">Delete yout Account</span>
                </div>
                <div className="settings-form">
                    <label style={{ 'fontSize': '20px' }}>Profile Picture</label>
                    <div className="settings-pp">
                        <img src={SettingsImg} alt="" className="settings-img" />
                        <label htmlFor="file-input"> <i className="settings-pp-icon far fa-user-circle"></i> </label>
                        <input type="file" id="file-input" style={{ 'display': 'none' }}></input>
                    </div>
                    <div className="form-entry">
                        <div>
                            <label>Username</label>
                            <input type="text" placeholder="yash" className="settings-input"></input>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="text" placeholder="yash@gmail.com" className="settings-input"></input>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="text" placeholder="Yash@123" className="settings-input"></input>
                        </div>
                    </div>
                    <button className="settings-submit"> Update </button>
                </div>
              
            </div>
            <Sidebar />
        </div>
    )
}
