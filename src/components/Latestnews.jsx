import React from 'react'
import current from '../assets/current.jpg'
import currentthree from '../assets/current3.jpg'
import currentfour from '../assets/current4.jpg'

const Latestnews = () => {
  return (
    <div>
        <>
  {/*------------------------------------------latestnews-------------------------------------*/}
  <section className="latestnews">
    <div data-aos="zoom-in" className="container">
      <div className="row justify-content-center">
        <h1>Latest News</h1>
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card shadow" style={{ width: "18rem" }}>
            <div className="inner">
              <img
                src={current}
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">Khabib becomes No.1 Pound Fighter</h5>
              <p className="card-text">
                Congratulations to Khabib on his title defense and becoming the
                No.1 Pound-for-pound fighter in the world. It is an honor to be
                a part of this
              </p>
              <a href="/news.html">
                <button>Read More</button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card shadow" style={{ width: "18rem" }}>
            <div className="inner">
              <img
                src={currentthree}
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">Khabib becomes No.1 Pound Fighter</h5>
              <p className="card-text">
                Congratulations to Khabib on his title defense and becoming the
                No.1 Pound-for-pound fighter in the world. It is an honor to be
                a part of this
              </p>
              <a href="/news.html">
                <button>Read More</button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card shadow" style={{ width: "18rem" }}>
            <div className="inner">
              <img
                src={currentfour}
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">Khabib becomes No.1 Pound Fighter</h5>
              <p className="card-text">
                Congratulations to Khabib on his title defense and becoming the
                No.1 Pound-for-pound fighter in the world. It is an honor to be
                a part of this
              </p>
              <a href="/news.html">
                <button>Read More</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

    </div>
  )
}

export default Latestnews