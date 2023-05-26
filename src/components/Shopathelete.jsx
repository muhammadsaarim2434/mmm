import React from 'react'
import aone from '../assets/athelete1.jpg'
import atwo from '../assets/athelete2.jpg'
import athree from '../assets/athelete3.jpg'

const Shopathelete = () => {
  return (
    <div>
        <section className="shop">
  <div className="container">
    <div className="row">
      <h1>Shop Now</h1>
      
      <div className="col-md-4 d-flex justify-content-center">
        <div className="card rounded-3 ">
          <div className="top p-3 d-flex justify-content-between">
            {" "}
            <i className="fa fa-arrow-left" /> <i className="fa fa-heart-o" />{" "}
          </div>
          <div
            id="carouselExampleIndicators"
            className="carousel slide p-3 "
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              {" "}
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />{" "}
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />{" "}
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />{" "}
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                {" "}
                <img
                  src={aone}
                  className="d-block w-100 h-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                {" "}
                <img
                  src={atwo}
                  className="d-block w-100"
                  alt="..."
                />{" "}
              </div>
              <div className="carousel-item">
                {" "}
                <img
                  src={athree}
                  className="d-block w-100"
                  alt="..."
                />{" "}
              </div>
            </div>{" "}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              {" "}
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              />{" "}
              <span className="visually-hidden">Previous</span>{" "}
            </button>{" "}
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              {" "}
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              />{" "}
              <span className="visually-hidden">Next</span>{" "}
            </button>
          </div>
          <div className="card2 w-100">
            <h5>Adidas</h5>
            <p>Shoes</p>
            <div className="size">
              <h6 className="fw-bold">Size</h6>
              <div className="diff_sizes d-flex justify-content-between ">
                {" "}
                <span>Small</span> <span>Medium</span>
                <span>Large</span>
              </div>
            </div>
            <div className="button mt-4">
              {" "}
              <button>Add to cart</button>
              <p>$280</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 d-flex justify-content-center">
        <div className="card rounded-3 ">
          <div className="top p-3 d-flex justify-content-between">
            {" "}
            <i className="fa fa-arrow-left" /> <i className="fa fa-heart-o" />{" "}
          </div>
          <div
            id="carouselExampleIndicators"
            className="carousel slide p-3 "
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              {" "}
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />{" "}
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />{" "}
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />{" "}
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                {" "}
                <img
                  src={aone}
                  className="d-block w-100 h-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                {" "}
                <img
                  src={atwo}
                  className="d-block w-100"
                  alt="..."
                />{" "}
              </div>
              <div className="carousel-item">
                {" "}
                <img
                  src={athree}
                  className="d-block w-100"
                  alt="..."
                />{" "}
              </div>
            </div>{" "}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              {" "}
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              />{" "}
              <span className="visually-hidden">Previous</span>{" "}
            </button>{" "}
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              {" "}
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              />{" "}
              <span className="visually-hidden">Next</span>{" "}
            </button>
          </div>
          <div className="card2 w-100">
            <h5>Jordan</h5>
            <p>Shoes</p>
            <div className="size">
              <h6 className="fw-bold">Size</h6>
              <div className="diff_sizes d-flex justify-content-between ">
                {" "}
                <span>Small</span> <span>Medium</span>
                <span>Large</span>
              </div>
            </div>
            <div className="button mt-4">
              {" "}
              <button>Add to cart</button>
              <p>$280</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 d-flex justify-content-center">
        <div className="card rounded-3 ">
          <div className="top p-3 d-flex justify-content-between">
            {" "}
            <i className="fa fa-arrow-left" /> <i className="fa fa-heart-o" />{" "}
          </div>
          <div
            id="carouselExampleIndicators"
            className="carousel slide p-3 "
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              {" "}
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />{" "}
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />{" "}
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />{" "}
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                {" "}
                <img
                  src={aone}
                  className="d-block w-100 h-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                {" "}
                <img
                  src={atwo}
                  className="d-block w-100"
                  alt="..."
                />{" "}
              </div>
              <div className="carousel-item">
                {" "}
                <img
                  src={athree}
                  className="d-block w-100"
                  alt="..."
                />{" "}
              </div>
            </div>{" "}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              {" "}
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              />{" "}
              <span className="visually-hidden">Previous</span>{" "}
            </button>{" "}
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              {" "}
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              />{" "}
              <span className="visually-hidden">Next</span>{" "}
            </button>
          </div>
          <div className="card2 w-100">
            <h5>Nike</h5>
            <p>Shoes</p>
            <div className="size">
              <h6 className="fw-bold">Size</h6>
              <div className="diff_sizes d-flex justify-content-between ">
                {" "}
                <span>Small</span> <span>Medium</span>
                <span>Large</span>
              </div>
            </div>
            <div className="button mt-4">
              {" "}
              <button>Add to cart</button>
              <p>$280</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Shopathelete