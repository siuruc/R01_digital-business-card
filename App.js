import React from "react"
import Profile from "./components/Profile.js"
import Main from "./components/Main.js"
import Footer from "./components/Footer.js"



export default function App() {
    return (
        <div className="container">
            <Profile />
            <Main />
            <Footer />
        </div>
    )
}