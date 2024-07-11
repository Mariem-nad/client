import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
    <div className="headerTitles">
      <span className="headerTitleSm">React & Node</span>
      <span className="headerTitleLg">BLOG</span>
    </div>

     <img className="headerImg" src="https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=300" alt=""></img>
  </div>
  )
}