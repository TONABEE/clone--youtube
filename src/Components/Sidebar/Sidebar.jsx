import React from "react";
import "./Sidebar.css";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automonbiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png"
import news from "../../assets/news.png";
import blogs from "../../assets/blogs.png";
import jack from "../../assets/ayuki.png";
import simon from "../../assets/amiru.png";
import tom from "../../assets/keigo2.png"
import megan from "../../assets/kinya.png";
import cameron from "../../assets/sora.png";




const Sidebar =({sidebar,category, setCategory}) => {

  return (
  <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
    <div className="shortcut-links">
        <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
            <img src={home} alt="" /><p>Home</p>
        </div>
        <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
            <img src={game_icon} alt="" /><p>Game</p>
        </div>
        <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
            <img src={automonbiles} alt="" /><p>Automobiles</p>
        </div>
        <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
            <img src={sports} alt="" /><p>Sports</p>
        </div>
        <div className={`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
            <img src={entertainment} alt="" /><p>Entertainmant</p>
        </div>
        <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
            <img src={tech} alt="" /><p>Tech</p>
        </div>
        <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
            <img src={music} alt="" /><p>Music</p>
        </div>
        <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
            <img src={blogs} alt="" /><p>Blogs</p>
        </div>
        <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
            <img src={news} alt="" /><p>News</p>
        </div>
        <hr />
    </div>
    <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
                <img src={jack} alt="" /><p>STEVENAKATA</p>
            </div>
            <div className="side-link">
                <img src={simon} alt="" /><p>怪傑あみチャンネル</p>
            </div>
            <div className="side-link">
                <img src={tom} alt="" /><p>Justin Bieber</p>
            </div>
            <div className="side-link">
                <img src={megan} alt="" /><p>鼠小僧</p>
            </div>
            <div className="side-link">
                <img src={cameron} alt="" /><p>たかちゃんねる</p>
            </div>
        </div>
 </div>
  )
}

export default Sidebar;