import React from 'react'

export default function Sidebar({ id1 }) {
    return (
        <main style={{ height: '0vh' }}>
            <div className="sidebar" id="side">
                <div className="sidebar_main">
                    <div className="sidebar_copy">
                        <div className="sidebar_copy_main" id='side_copy'>
                            <svg className="cross" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                                document.getElementById(id1).style.filter = 'brightness(1) blur(0px) drop-shadow(0px 0px 0px black)'
                                document.getElementById('side').style.display = 'none'
                            }}><path d="M18.53 17.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.748.748 0 0 1-1.06 0 .75.75 0 0 1 0-1.06L10.94 12 5.47 6.53a.75.75 0 1 1 1.06-1.06L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47z" fill="currentColor"></path></svg>
                            <div className="sidebar_links">
                                <a href='/'>Existing Inventory</a>
                                <a href='/'>Used Inventory</a>
                                <a href='/'>Trade-In</a>
                                <a href='/'>Test Drive</a>
                                <a href='/cyber'>Cybertruck</a>
                                <a href='/'>Roadster</a>
                                <a href='/'>Semi</a>
                                <a href='/'>Charging</a>
                                <a href='/'>Powerwall</a>
                                <a href='/'>Commercial Energy</a>
                                <a href='/'>Utilities</a>
                                <a href='/'>Find Us</a>
                                <a href='/'>Support</a>
                                <a href='/'>Invester Relations</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
