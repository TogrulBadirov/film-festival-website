import React from 'react'
import "./index.scss"

const Speakers = () => {
  return (
    <section id='Speakers'>
        <p>Speakers</p>
        <div className="Speakers-container">
            <div className="Speakers-content">
                <h2>Learning from experts</h2>
                <p>Et pri magna evertitur. Ne qui doctus interesset, ad eum ullum accusam, te nam iusto iisque omittam. Elit nobis magnas iust.</p>
            </div>
            <div className="Speaker-cards">
                <div className="Speaker-card">
                    <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/inner-team-1.jpg" alt="" />
                    <h4>Victor Gray</h4>
                    <p>Sound Designer</p>
                </div>
                <div className="Speaker-card">
                    <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/inner-team-1.jpg" alt="" />
                    <h4>Victor Gray</h4>
                    <p>Sound Designer</p>
                </div>
                <div className="Speaker-card">
                    <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/inner-team-1.jpg" alt="" />
                    <h4>Victor Gray</h4>
                    <p>Sound Designer</p>
                </div>
            </div>
        </div>
        </section>
  )
}

export default Speakers