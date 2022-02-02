import React from "react";

const Form = () => {
  return (
    <div className="bg-dark rounded p-5">
      <div className="text-white mb-5">
        <h3>Still have more questions?</h3>
      </div>
      <div>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Your Name"
              name="name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Your Email"
              name="email"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Your Subject"
              name="subject"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control mb-3"
              id=""
              cols="30"
              rows="5"
              placeholder="Your Message"
              name="message"
            ></textarea>
          </div>
          <div className="form-group text-center">
            <button type="submit" className="btn btn-danger w-100">
              {" "}
              Send{" "}
            </button>
          </div>
          <h6 className="text-white text-center mt-3">
            or Call Now 01718556127
          </h6>
        </form>
      </div>
    </div>
  );
};

export default Form;
