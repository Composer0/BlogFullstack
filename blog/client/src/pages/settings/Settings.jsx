import './settings.css'
import Sidebar from "../../components/sidebar/Sidebar"
import {useContext, useState} from "react";
import { Context} from "../../context/Context"
import axios from "axios"

export default function Settings() {
    const [file, setFile] = useState(null);
    // const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const {user,  dispatch} = useContext(Context);
    const pictureFile = "https://orionblogserver.up.railway.app/images/"

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_START"}); //This was needed in order to stop the crashing from occuring...
        const updatedUser = {
          userId: user._id,
          // username,
          email,
          password
        };
        // const updateAdmin = {
        //   adminId: admin._id,
        //   username,
        //   email,
        //   password
        // }
        if(file){
          const data = new FormData();
          const filename = Date.now() + file.name; //Date was chosen to help make each image unique upon submitting.
          data.append("name", filename);
          data.append("file", file);
          updatedUser.profilePicture = filename;
          try{
              await axios.post("https://orionblogserver.up.railway.app/api/upload", data);
          }catch(err){
        }
        }
        try {
          let res = await axios.put("https://orionblogserver.up.railway.app/api/users/" +  user._id, updatedUser)
          setSuccess(true)
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data})
        } catch (err) {
        //   let res = await axios.put("/admins/" + admin._id, updateAdmin)
        //   setSuccess(true)
        //     dispatch({ type: "UPDATE_SUCCESS", payload: res.data})
        // } finally {
          dispatch({type:"UPDATE_FAILURE"})

        }
      }

      const handleDelete = async() => {
        try {
          await axios.delete(`https://orionblogserver.up.railway.app/api/users/${user._id}`, {data: {userId:user._id}})
          dispatch({type: "LOGOUT"})
          window.location.replace("/")
        } catch(err) {
    
        }
      }

      console.log(user)

  return (
    <div className="settingsPage">
        <div className='settingswrapper'>
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle" onClick={handleDelete}>Delete Account</span>
            </div>
            <form className="settingsForm" onSubmit={handleSubmit}>
                <label>Profile Picture</label>
                <div className="settingsProfilePicture" >
                    <img className="settingsProfilePictureDisplay" 
                    src={file ? URL.createObjectURL(file) : pictureFile+user.profilePicture}
                    alt=""
                    />
                    <label className="settingsProfilePictureIcon" htmlFor="fileInput">
                    <i className="fa-regular fa-circle-user"></i>
                    </label>
                    <input 
                      type="file" 
                      id="fileInput" 
                      style={{display: "none"}} 
                      onChange={(e) => setFile(e.target.files[0])}/>
                </div>
                <label>Username</label>
                <label className="settingsUsername">{user.username}</label>
                <label>Email</label>
                <input 
                  type="email" 
                  autoComplete="on"
                  placeholder={user.email} 
                  onChange={(e) => setEmail(e.target.value)}/>
                <label>Password</label>
                <input 
                  type="password" 
                  onChange={(e) => setPassword(e.target.value)}/>
                <button className="settingsSubmit" type="submit">Update</button>
                {success && <span style={{color: "green", textAlign: "center", marginTop:"20px"}}>Profile has been updated...</span>}
                <button className="settingsSubmitDelete" type="submit" onClick={handleDelete}>Delete Account</button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}