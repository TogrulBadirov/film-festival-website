import React from 'react'
import "./index.scss"

const AudienceChoice = () => {
  return (
    <section id='AudienceChoice'>
        <div className="AudienceChoice-container">
        <div>
        <p>AudienceChoice</p>

<video
    className="AudienceChoice-video"
    src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/home4-video.mp4"
    autoPlay
    loop
    muted
    playsInline
    controlsList="nodownload"
    poster="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-img1.jpg"
></video>
        </div>
        <div className="AudienceChoice-content-container">
            <p>DOCUMENTARY</p>
            <h2>LIFE ON THE ISLAND</h2>
            <span>documentary film by Mirela Bagaric / Croatia 2021</span>
            <div className="AudienceChoice-rewards">
                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-icon1.png" alt="" />
                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-icon2.png" alt="" />
            </div>
        </div>
        </div>
        </section>
  )
}

export default AudienceChoice