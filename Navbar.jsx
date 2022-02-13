import React from 'react'
import Sidebar from './Sidebar'

export default function Navbar({top ,id1}) {
    return (
        <main style={{ position: 'sticky', top: '0', left: '0', bottom: '0', marginTop: top + 'vh' }}>
            <div className="navbar">
                <a href='/' className='logo_link'><svg className="logo" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z" fill="currentColor"></path></svg></a>
                <div className="navbar_main_icons">
                    <a href="/models" className="models">Model S</a>
                    <a href="/model3" className="model3">Model 3</a>
                    <a href="/modelx" className="modelx">Model X</a>
                    <a href="/modely" className="modely">Model Y</a>
                    <a href="/roof" className="roof">Solar Roof</a>
                    <a href="/panels" className="panels">Solar Panels</a>
                </div>
                <div className="navbar_sec_icons">
                    <a href="/shop" className="shop">Shop</a>
                    <a href="/account" className="acc">Account</a>
                    <button className="menu" onClick={() => {
                        document.getElementById('side').style.display = 'flex'
                        document.getElementById(id1).style.filter = 'brightness(0.7) blur(4px) drop-shadow(0px 0px 18px black)'
                        document.getElementById('side_copy').style.animationPlayState = 'running'
                        document.getElementById('side_copy').style.animationDirection = 'normal'
                    }}>Menu</button>
                </div>
                <button className="main_menu" onClick={() => {
                    document.getElementById('side').style.display = 'flex'
                    document.getElementById(id1).style.filter = 'brightness(0.7) blur(4px) drop-shadow(0px 0px 18px black)'
                    document.getElementById('side_copy').style.animationPlayState = 'running'
                    document.getElementById('side_copy').style.animationDirection = 'normal'
                }}>Menu</button>

            </div>
        </main>
    )
}
