import Image from "next/image";

export default function LandingFooter(props) {
  return (
    <div className="footer-area">
      <section
        className="ts-book-seat"
        style={{ backgroundImage: "url(/assets/images/book_seat_img.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="book-seat-content text-center mb-100">
                <h2 className="section-title white">
                  <span>Hurry up!</span>
                  Book your Seat
                </h2>
                <a href="#" className="btn">
                  Buy Ticket
                </a>
              </div>
            </div>
          </div>

          {/* <div className="ts-footer-newsletter">
            <div
              className="ts-newsletter"
              style={{
                backgroundImage:
                  "url(/assets/images/shap/subscribe_pattern.png)",
              }}
            > */}
          {/* <div className="row">
                <div className="col-lg-6 mx-auto">
                  <div className="ts-newsletter-content">
                    <h2 className="section-title">
                      <span>sUBSCRIBE TO nEWSLETTER</span>
                      Want something extra?
                    </h2>
                  </div> */}
          {/* <div className="newsletter-form">
                    <form
                      action="#"
                      method="post"
                      className="media align-items-end"
                    >
                      <div className="email-form-group media-body">
                        <input
                          type="email"
                          name="email"
                          id="newsletter-form-email"
                          className="form-control"
                          placeholder="Your Email"
                          required=""
                        />
                      </div>
                      <div className="d-flex ts-submit-btn">
                        <button className="btn">Subscribe</button>
                      </div>
                    </form>
                  </div>
                </div> */}
          {/* </div>
              </div> */}
        </div>
        {/* </div>
        </div> */}
      </section>

      <footer className="ts-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="ts-footer-social text-center mb-30">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/bantengriderun">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  {/* <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li> */}
                  {/* <li>
                    <a href="#">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li> */}
                  {/* <li>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li> */}
                  <li>
                    <a href="https://www.instagram.com/bantengriderun/">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>

              {/* <div className="footer-menu text-center mb-25">
                <ul>
                  <li>
                    <a href="#">About Eventime</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Tickets</a>
                  </li>
                  <li>
                    <a href="#">Venue</a>
                  </li>
                </ul>
              </div> */}

              <div className="copyright-text text-center">
                <p>
                  <a href="https://www.kayacorp.co.id">
                    Copyright © 2022 kayacorp.co.id . All rights reserved.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="BackTo" style={{ display: "none" }}>
        <a href="#" className="fa fa-angle-up" aria-hidden="true"></a>
      </div>
    </div>
  );
}
