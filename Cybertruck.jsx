import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function Cybertruck() {
    let element = ""
    let element1 = ""
    let element2 = ""
    let element3 = ""
    let count = 0

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('on-scroll')
            }
            else {
                entry.target.classList.remove('on-scroll')
            }
        });
    });

    const observer1 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('text-on-scroll')
            }
            else {
                entry.target.classList.remove('text-on-scroll')
            }
        });
    });

    const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('img-on-scroll')
            }
            else {
                entry.target.classList.remove('img-on-scroll')
            }
        });
    });

    const observer3 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('text-on-scroll')
            }
            else {
                entry.target.classList.remove('text-on-scroll')
            }
        });
    });

    setInterval(function () {
        element = document.getElementById('cyber_im')
        element1 = document.getElementById('n_t')
        element2 = document.getElementById('c_e_img')
        element3 = document.getElementById('e_t')
        observer.observe(element)
        observer1.observe(element1)
        observer2.observe(element2)
        observer3.observe(element3)
    }, 1000)

    return (
        <>
            <main id="main_c" style={{ height: '100%', background: 'black' }}>
                <Navbar top='-7.5' id1="main_c" />
                <section className='cybertruck'>
                    <div className="cyber_main">
                        <div className="cyber_page">
                            <div className="cyber_texts">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Cybertrucklogo.svg/1280px-Cybertrucklogo.svg.png" />
                                <p>BETTER UTILITY THAN A TRUCK WITH MORE PERFORMANCE THAN A SPORTS CAR</p>
                            </div>
                            <button>ORDER NOW</button>
                        </div>
                    </div>
                </section>
                <section className="cybertruck_next">
                    <div className="cyberT">
                        <img id="cyber_im" src="https://www.tesla.com/xNVh4yUEc3B9/02_Desktop.jpg" />
                    </div>
                    <div className="next_texts" id="n_t">
                        <h1>EXOSKELETON</h1>
                        <p>Cybertruck is built with an exterior shell made for ultimate durability and passenger protection. Starting with a nearly impenetrable exoskeleton, every component is designed for superior strength and endurance, from Ultra-Hard 30X Cold-Rolled stainless-steel structural skin to Tesla armor glass.</p>
                    </div>
                    <div className="cyber_ext">
                        <img src="https://www.tesla.com/xNVh4yUEc3B9/03_Desktop.jpg" alt="" id="c_e_img" />
                    </div>
                    <div className="ext_texts" id='e_t'>
                        <h1>ULTRA-HARD 30X COLD-ROLLED STAINLESS STEEL</h1>
                        <p>If there was something better, we'd use it. Help eliminate dents, damage and long-term corrosion with a smooth monochrome exoskeleton that puts the shell on the outside of the car and provides you and your passengers maximum protection.</p>
                    </div>
                    <div className="cy">
                        <img src="https://www.tesla.com/xNVh4yUEc3B9/04_Desktop.jpg" alt="" />
                        <div className="cy_end">
                            <h1>TESLA ARMOR GLASS</h1>
                            <p>Ultra-strong glass and polymer-layered composite can absorb and redirect impact force for improved performance and damage tolerance.</p>
                        </div>
                    </div>
                    <div className="cybertruck_slides">
                        <div className="image_btns">
                            <button onClick={() => {
                                if (count > 0) {
                                    count -= 1
                                    document.getElementById('ims').children[count + 1].style.display = 'none'
                                    document.getElementById('ims').children[count].style.display = 'block'
                                }
                            }}><svg class="tds-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width='2vw'>
                                    <path d="M57.1 75.4l7.1-7.1L45.9 50l18.3-18.3-7.1-7.1L31.8 50" fill="currentColor"></path>
                                </svg></button>

                            <button onClick={() => {
                                if (count < 5) {
                                    count += 1
                                    document.getElementById('ims').children[count - 1].style.display = 'none'
                                    document.getElementById('ims').children[count].style.display = 'block'
                                }
                            }}><svg class="tds-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width='2vw'>
                                    <polyline points="42.9 24.6 35.8 31.7 54.1 50 35.8 68.3 42.9 75.4 68.2 50" fill="currentColor"></polyline>
                                </svg></button>
                        </div>
                        <div className="images" id="ims">
                            <img src="https://www.tesla.com/xNVh4yUEc3B9/05_Desktop.jpg" style={{ display: 'block' }} />
                            <img src="https://www.tesla.com/xNVh4yUEc3B9/06_Desktop.jpg" style={{ display: 'none' }} />
                            <img src="https://www.tesla.com/xNVh4yUEc3B9/07_Desktop.jpg" style={{ display: 'none' }} />
                            <img src="https://www.tesla.com/xNVh4yUEc3B9/08_Desktop.jpg" style={{ display: 'none' }} />
                            <img src="https://www.tesla.com/xNVh4yUEc3B9/09_Desktop.jpg" style={{ display: 'none' }} />
                            <img src="https://www.tesla.com/xNVh4yUEc3B9/10_Desktop.jpg" style={{ display: 'none' }} />
                        </div>
                    </div>
                    <video className="cybertruck_video" loop controls poster="https://www.tesla.com/xNVh4yUEc3B9/performance_desktop_still.png" src="https://www.tesla.com/xNVh4yUEc3B9/performance_video_desktop.mp4"></video>
                    <video className="cybertruck_video_mob" loop controls poster="https://www.tesla.com/xNVh4yUEc3B9/performance_mobile_still.png" src="https://www.tesla.com/xNVh4yUEc3B9/peformance_video_mobile.mp4"></video>

                    <div className="video_texts">
                        <h1>PERFORMANCE AND EFFICIENCY</h1>
                        <p>Now entering a new class of strength, speed and versatility—only possible with an all-electric design. The powerful drivetrain and low center of gravity provides extraordinary traction control and torque—enabling acceleration from 0-60 mph in as little as 2.9 seconds and up to 500 miles of range.</p>
                    </div>

                    <div className="cybertruck_end">
                        <div className="end_sub">
                            <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/ec50302e-b850-44af-b51d-139a43751d88/bvlatuR/std/800x297/Cybertruck-Logo-Global" alt="" />
                            <button>ORDER NOW</button>
                        </div>
                        <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/c834642e-bd02-47d1-a16d-eddabd15ddb8/bvlatuR/std/1251x704/Cybertruck-Order-Hero-Global" className='cyber_end_img' alt="" />
                    </div>
                </section>
            </main>
            <Sidebar id1="main_c" />
        </>
    )
}
