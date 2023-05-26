import React from 'react'
import currentone from '../assets/current1.jpg'

const Champion = () => {
  return (
    <div>
        <section className="showcase">
  <div className="container">
    <div className="row">
      <div data-aos="zoom-in" className="col-12 col-md-6 pt-5">
        <img className="img-fluid" src={currentone} alt="" />
      </div>
      <div data-aos="slide-left" className="col-12 col-md-6 showcase_c">
        <h1>Current WBO World Champion: Mark Rumble</h1>
        <p>
          After winning a second Olympic gold medal at the London Olympics, has
          signed a contract with the newly-minted semi-professional team of
          Rumble, for which, by the way, I came up with the name. This season
          Rumble reached the final of a series of WSB. I won the first place at
          individual rankings WSB in the category up to 61 kg.
        </p>
        <a href="/atheletes.html">
          <button>Learn More</button>
        </a>
        <br />
        <iframe
          data-aos="fade-in"
          className="video"
          width="100%"
          height={315}
          src="https://www.youtube.com/embed/eOHkP0VuiPQ"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; 
          encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Champion