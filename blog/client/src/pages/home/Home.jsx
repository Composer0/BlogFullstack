import "./home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import {useState, useEffect} from "react";
import {useLocation} from "react-router";


export default function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  // console.log(location);

  useEffect(() =>{
    const fetchPosts = async () => {
      const res = await axios.get("https://orionblogserver.up.railway.app/api/posts" + search)
      // console.log(res);
      setPosts(res.data)
    }
    fetchPosts();
  }, [search]) //search will useLocation function to find the blog posts of specific authors or categories. ?user=Orion or ?user=Nandor
  return (
    <>

        <Header />
    <div className="home">
      <Posts posts={posts} />
      <Sidebar />
    </div>
    </>
  )
}
