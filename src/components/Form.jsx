import React from 'react'

const Form = () => {
  return (
    <div>
        <>
  {/*--------------------------form-------------------------------*/}
  <section id="message">
    <form className="row g-3">
      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="inputEmail4"
          placeholder="Enter Email"
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputPassword4" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword4"
          placeholder="Enter Password"
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputState" className="form-label">
          State
        </label>
        <select id="inputState" className="form-select">
          <option selected="">Choose...</option>
          <option>Pakistan</option>
          <option>India</option>
          <option>Dubai</option>
          <option>United States</option>
          <option>United Kingdom</option>
          <option>Indonesia</option>
          <option>DenMark</option>
        </select>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputCity" className="form-label">
          City
        </label>
        <input
          type="text"
          className="form-control"
          id="inputCity"
          placeholder="Enter City"
        />
      </div>
      <br />
      <div className="col-md-12">
        <label htmlFor="inputZip" className="form-label">
          Message
        </label>
        <input type="text" className="form-control" id="inputmessage" />
      </div>
      <div className="col-12">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label" htmlFor="gridCheck">
            Save Message
          </label>
        </div>
      </div>
      <div className="col-12">
        <button type="submit">Send Message</button>
      </div>
    </form>
  </section>
</>

    </div>
  )
}

export default Form