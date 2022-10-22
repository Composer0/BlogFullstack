import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleLg">Orion's Blog</span>
            <span className="headerTitleSm">Developed with React & Node</span>
        </div>
        <img className="headerImg" 
        // src='https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg' 
        // src='https://th.bing.com/th/id/R.a3c099bf1e9da32f274105a771505b15?rik=Ot2%2bTkOvC0CCpg&pid=ImgRaw&r=0'
        src="https://wallpaper.dog/large/20414995.jpg"
        alt=''></img>
    </div>
  )
}
