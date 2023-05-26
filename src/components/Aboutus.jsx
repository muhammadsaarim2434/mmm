import React from 'react'
import admin from '../assets/admin.jpg'

const Aboutus = () => {
  return (
    <div>
        <>
  {/*-----------------------------------------aboutus--------------------------------------*/}
  <section className="about" id="aboutsection">
    <div className="container">
      <div className="row">
        <h1>How We Started</h1>
        <div data-aos="zoom-in" className="col-12 col-md-6 pt-5 text-center">
          <img
            className="img-fluid"
            src={admin}
            width="70%"
            alt=""
          />
        </div>
        <div data-aos="slide-left" className="col-12 col-md-6 showcase_c">
          <h5>
            Ali AbdulAziz <span>Founder &amp; CEO</span>
          </h5>
          <p>
            Ali has been managing top fighters for the past couple of decades
            now. He has a plethora of contacts throughout the industry and has
            formed some amazing relationships throughout his journey. If Ali
            isn't with his family or negotiating contracts, you will find him on
            the mats rolling with his clients. Not often do you see a manager on
            the mats, but Ali isn't your typical manager. He can relate to his
            clients on a different level, which has given Dominance a
            family-like culture.
          </p>
          <a href="/aboutus.html">
            <button>Learn More</button>
          </a>
          <br />
        </div>
      </div>
    </div>
  </section>
</>

    </div>
  )
}

export default Aboutus