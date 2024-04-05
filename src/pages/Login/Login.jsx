import React from 'react';
import Slider from '../../components/slider/Slider';
import Banner from '../../components/banner/Banner';
import '../../styles/login/style.css'

export default function Login() {
    return (
        <>
            <Slider />
            <Banner />
            <section className="login-wrapper">
                <div className="background-img">
                    <figure>
                        <img src="https://brandio.io/envato/iofrm/html/images/graphic8.svg" alt="background image" width={534} height={442} />
                    </figure>
                </div>
                <div className="login-inner-wrapper">
                    <figure>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="58" viewBox="0 0 60 58">
                            <g id="chat_2_" data-name="chat (2)" transform="translate(0 -1)">
                                <path id="Path_1123" data-name="Path 1123" d="M54.07,1H15.93A5.936,5.936,0,0,0,10,6.93V13H44.07A7.939,7.939,0,0,1,52,20.929V34h2.07A5.936,5.936,0,0,0,60,28.07V6.93A5.936,5.936,0,0,0,54.07,1Z" fill="#fff" opacity="0.446" />
                                <path id="Path_1124" data-name="Path 1124" d="M44.07,15H5.93A5.936,5.936,0,0,0,0,20.929V42.07A5.936,5.936,0,0,0,5.93,48H12V58a1,1,0,0,0,1.74.673L23.442,48H44.07A5.936,5.936,0,0,0,50,42.07V20.929A5.936,5.936,0,0,0,44.07,15ZM12,25.015H26a1,1,0,0,1,0,2H12a1,1,0,1,1,0-2Zm27,14H12a1,1,0,0,1,0-2H39a1,1,0,0,1,0,2Zm0-6H12a1,1,0,0,1,0-2H39a1,1,0,1,1,0,2Z" fill="#fff" />
                            </g>
                        </svg>
                    </figure>
                    <h1>Sign up / Login</h1>
                    <form>
                        <input type="text" placeholder="User Name or Email"  style={{maxWidth:'385px'}}/>
                        <input type="password" placeholder="Password" style={{maxWidth:'385px'}}/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>
        </>
    )
}
