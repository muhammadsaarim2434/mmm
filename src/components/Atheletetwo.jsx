import React from 'react'
import aone from '../assets/athelete1.jpg'
import atwo from '../assets/athelete2.jpg'
import athree from '../assets/athelete3.jpg'
import afour from '../assets/athelete4.jpg'
import afive from '../assets/athelete5.jpg'
import asix from '../assets/athelete6.jpg'

const Atheletetwo = () => {
  return (
    <div>
        <section className="atheletes">
  <div data-aos="zoom-in" className="container">
    <div className="row justify-content-center">
      <h1>Atheletes</h1>
      <div className="col-md-4 d-flex justify-content-center">
        <div className="card shadow" style={{ width: "18rem" }}>
          <div className="inner">
            <img
              src={aone}
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">Nurmagomedov (UFC)</h5>
          </div>
        </div>
      </div>
      <div className="col-md-4 d-flex justify-content-center">
        <div className="card shadow" style={{ width: "18rem" }}>
          <div className="inner">
            <img
              src={atwo}
              className="card-img-top pt-3 pb-3"
              alt="..."
            />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">Henry Cejudo (UFC)</h5>
          </div>
        </div>
      </div>
      <div className="col-md-4 d-flex justify-content-center">
        <div className="card shadow" style={{ width: "18rem" }}>
          <div className="inner">
            <img
              src={athree}
              className="card-img-top pt-3 pb-2"
              alt="..."
            />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">Kamaru Usman (UFC)</h5>
          </div>
        </div>
      </div>
      <div className="col-md-4 d-flex justify-content-center">
        <div className="card shadow" style={{ width: "18rem" }}>
          <div className="inner">
            <img
              src={afour}
              className="card-img-top pt-3 pb-4"
              alt="..."
            />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">Cody Garbrandt (UFC)</h5>
          </div>
        </div>
      </div>
      <div className="col-md-4 d-flex justify-content-center">
        <div className="card shadow" style={{ width: "18rem" }}>
          <div className="inner">
            <img
              src={afive}
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">Kayla Harrison (PFL)</h5>
          </div>
        </div>
      </div>
      <div className="col-md-4 d-flex justify-content-center">
        <div className="card shadow" style={{ width: "18rem" }}>
          <div className="inner">
            <img
              src={asix}
              className="card-img-top pt-3 pb-4"
              alt="..."
            />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">Justin Gaethje (UFC)</h5>
          </div>
        </div>
      </div>
      <div className="btn text-center">
        <a href="/atheletes.html">
          <button>View More</button>
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Atheletetwo