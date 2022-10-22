import './settings.css'
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
        <div className='settingswrapper'>
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsProfilePicture">
                    <img 
                    src="https://www.orionpalmer.com/static/media/orionpalmer.ba51d754.webp"
                    alt=""
                    />
                    <label className="settingsProfilePictureIcon" htmlFor="fileInput">
                    <i className="fa-regular fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Orion" />
                <label>Email</label>
                <input type="email" placeholder="opalmer1989@gmail.com" />
                <label>Password</label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}
