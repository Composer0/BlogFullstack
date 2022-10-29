import NavBar from './components/NavBar/NavBar'
import Home from './pages/home/Home'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import AdminLogin from './pages/adminLogin/AdminLogin'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"
import {useContext} from "react";
import { Context} from "./context/Context"

function App() {
    const {user} = useContext(Context);
    return (
        <div className='App'>
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element=<About />/>
                <Route path="/contact" element=<Contact />/>
                <Route path="/write" element={user ? <Write /> : <Register />} />
                <Route path="/post/:postId" element={<Single />} />
                <Route path="/settings" element={user ? <Settings /> : <Register />} />
                <Route path="/login" element={user ? <Home /> : <Login />} />
                <Route path="/register" element={user ? <Home/> : <Register />} />
                <Route path="/adminLogin" element={user ? <Home /> : <AdminLogin />} />
            </Routes>
        </Router>
        </div>
    )
}

export default App;