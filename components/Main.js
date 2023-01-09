import React from "react"

export default function Main() {
    return (
        <div className="main">
            <h1 className="name">Siu Ru Ching</h1>
            <h2 className="role">Frontend Developer</h2>
            <h3 className="site">siuruching.com</h3>
            <div className="social">
                <a href="#" className="btn btn-1">
                <i className="fa-solid fa-envelope"></i>
                Email</a>
                <a href="#" className="btn btn-2"><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
            </div>
            <div className="main-text">   
                <h2 className="title">About</h2>
                <h3 className="text">I am a frontend developer with a particulat interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</h3>
                <h2 className="title">Interests</h2>
                <h3 className="text">Food expert. Music scholar. Reader. Interenet fanatic. Bacon stuff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</h3>
            </div>
        </div>
    )
}