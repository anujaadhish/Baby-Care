import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      {/* <div className="contact-page">
      <h2>Contact Us</h2>
      <p>If you have any questions or feedback, please feel free to get in touch with us.</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
        </form>
        </div> */}

      <>
        {/*Section: Contact v.2*/}
        <section className="mb-4">
          {/*Section heading*/}
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Contact us
          </h2>
          {/*Section description*/}
          <p className="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </p>
          <div className="row">
            {/*Grid column*/}
            <div className="col-md-9 mb-md-0 mb-5">
              <form
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
              >
                {/*Grid row*/}
                <div className="row">
                  {/*Grid column*/}
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="name" className="">
                        Your name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                      />
                    </div>
                  </div>
                  {/*Grid column*/}
                  {/*Grid column*/}
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="email" className="">
                        Your email
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                      />
                    </div>
                  </div>
                  {/*Grid column*/}
                </div>
                {/*Grid row*/}
                {/*Grid row*/}
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <label htmlFor="subject" className="">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                {/*Grid row*/}
                {/*Grid row*/}
                <div className="row">
                  {/*Grid column*/}
                  <div className="col-md-12">
                    <div className="md-form">
                      <label htmlFor="message">Your message</label>

                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows={2}
                        className="form-control md-textarea"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                {/*Grid row*/}
              </form>
              <div className="text-center text-md-left">
                <button
                  className="btn btn-primary"
                  onclick="document.getElementById('contact-form').submit();"
                >
                  Send
                </button>
              </div>
              <div className="status" />
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fas fa-map-marker-alt fa-2x" />
                  <p>Calicut,Kerala,India</p>
                </li>
                <li>
                  <i className="fas fa-phone mt-4 fa-2x" />
                  <p>+ 0495 243 10 44</p>
                </li>
                <li>
                  <i className="fas fa-envelope mt-4 fa-2x" />
                  <p>contact@babycare.com</p>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
          </div>
        </section>
        {/*Section: Contact v.2*/}
      </>
    </div>
  );
};

export default Contact;
