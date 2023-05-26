import React from 'react'
import atheleteone from '../assets/athelete1.jpg'
import atheletethree from '../assets/athelete3.jpg'

const Atheletes = () => {
  return (
    <div>
        <>
  {/*------------------------------------atheletes---------------------------------------*/}
  <section id="ath">
    <div data-aos="zoom-in" className="container">
      <h1>Atheletes</h1>
      <div className="row slider">
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <div className="card shadow" style={{ width: "18rem" }}>
            <div className="inner">
              <img
                src={atheleteone}
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <div className="card shadow" style={{ width: "18rem" }}>
            <div className="inner">
              <img
                src={atheleteone}
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <div className="card shadow" style={{ width: "18rem" }}>
            <div className="inner">
              <img
                src={atheletethree}
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>
        </div>
        
      </div>
      <div className="text-center">
        <a href="/atheletes.html">
          <button>View More</button>
        </a>
      </div>
    </div>
  </section>
</>

    </div>
  )
}

export default Atheletes