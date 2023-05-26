import React from 'react'

const Footer = () => {
  return (
    <div>
        <section className="footer pt-5 pb-2">
  <div data-aos="zoom-in" className="container">
    <div className="row pt-md-5 px-3">
      <div className="col-12 col-md-3 ">
        <a href="#">
          <span className="f_icon">
            <i className="fa fa-phone me-2 py-3" aria-hidden="true" /> +1 (773)
            598-0500
          </span>{" "}
          <br />
          <span className="f_icon">
            <i className="fa fa-envelope me-2 py-3" aria-hidden="true" />{" "}
            info@sparkmma.com
          </span>{" "}
          <br />
          <span className="f_icon">
            <i className="fa fa-map-marker me-2 py-3" aria-hidden="true" />{" "}
            24117 W. 103rd Street, Suite L, Naperville, IL 60564
          </span>
        </a>
        <a href="#">
          <div className="d-flex gap-5 mt-5 pb-4">
            <div className="f_icon1">
              <i className="fa fa-facebook-square" aria-hidden="true" />
            </div>
            <div className="f_icon1">
              <i className="fa fa-twitter-square" aria-hidden="true" />
            </div>
            <div className="f_icon1">
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </div>
          </div>
        </a>
      </div>
      <div className="col-12 col-md-2">
        <p className="f_icon2">Services</p>
        <a href="#">
          <ul className="list1">
            <li>Atheletes</li>
            <li>Shop</li>
            <li>Clients</li>
          </ul>
        </a>
      </div>
      <div className="col-12 col-md-2">
        <p className="f_icon2">The Company</p>
        <a href="#">
          <ul className="list1">
            <li>About the Spark</li>
            <li>Contact</li>
          </ul>
        </a>
      </div>
      <div className="col-12 col-md-2">
        <p className="f_icon2">Resources</p>
        <a href="#">
          <ul className="list1">
            <li>Blog</li>
            <li>News</li>
          </ul>
        </a>
      </div>
      <div className="col-12 col-md-3">
        <p className="f_icon2">Quickly Inquiry Form</p>
        <div className="row gy-2 mb-2">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="First name*"
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Last name*"
            />
          </div>
        </div>
        <div className="mb-2">
          <input type="email" className="form-control" placeholder="Email*" />
        </div>
        <div className="mb-2">
          <input type="number" className="form-control" placeholder="Phone*" />
        </div>
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Speciality"
          />
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: 80 }}
            defaultValue={""}
          />
          <label htmlFor="floatingTextarea2">Your message here*</label>
        </div>
        <a href="#" type="button" className="btn btn-warning my-3">
          Submit
        </a>
      </div>
    </div>
  </div>
  <hr style={{ color: "aliceblue" }} className="clearfix w-100" />
  <p className="last_shit pt-3">
    © 2022 Spark MMA Management LLC All Right Reserved.| Privacy Policy
  </p>
</section>

    </div>
  )
}

export default Footer