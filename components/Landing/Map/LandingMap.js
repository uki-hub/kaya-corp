import Image from "next/image";

import img_direction1 from "/public/assets/images/shap/Direction_memphis1.png";
import img_direction2 from "/public/assets/images/shap/Direction_memphis2.png";
import img_direction3 from "/public/assets/images/shap/Direction_memphis3.png";
import img_direction4 from "/public/assets/images/shap/Direction_memphis4.png";

export default function LandingMap(props) {
  return (
    <section
      className="ts-map-direction wow fadeInUp"
      data-wow-duration="1.5s"
      data-wow-delay="400ms"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <h2 className="column-title">
              <span>Reach us</span>
              Get Direction to the Event Hall
            </h2>

            <div className="ts-map-tabs">
              <ul className="nav" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="#profile"
                    role="tab"
                    data-toggle="tab"
                  >
                    Venue
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#buzz"
                    role="tab"
                    data-toggle="tab"
                  >
                    Time
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#references"
                    role="tab"
                    data-toggle="tab"
                  >
                    How to get there
                  </a>
                </li>
              </ul>

              <div className="tab-content direction-tabs">
                <div role="tabpanel" className="tab-pane active" id="profile">
                  <div className="direction-tabs-content">
                    <h3>Brighton Waterfront Hotel, Brighton, London</h3>
                    <p className="derecttion-vanue">
                      1Hd- 50, 010 Avenue, NY 90001
                      <br />
                      United States
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="contact-info-box">
                          <h3>Tickets info</h3>
                          <p>
                            <strong>Name:</strong> Ronaldo König
                          </p>
                          <p>
                            <strong>Phone:</strong> 009-215-5595
                          </p>
                          <p>
                            <strong>Email: </strong> info@example.com
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="contact-info-box">
                          <h3>Programme Details</h3>
                          <p>
                            <strong>Name:</strong> Ronaldo König
                          </p>
                          <p>
                            <strong>Phone:</strong> 009-215-5595
                          </p>
                          <p>
                            <strong>Email: </strong> info@example.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div role="tabpanel" className="tab-pane fade" id="buzz">
                  <div className="direction-tabs-content">
                    <h3>Brighton Waterfront Hotel, Brighton, London</h3>
                    <p className="derecttion-vanue">
                      1Hd- 50, 010 Avenue, NY 90001
                      <br />
                      United States
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="contact-info-box">
                          <h3>Tickets info</h3>
                          <p>
                            <strong>Name:</strong> Ronaldo König
                          </p>
                          <p>
                            <strong>Phone:</strong> 009-215-5595
                          </p>
                          <p>
                            <strong>Email: </strong> info@example.com
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="contact-info-box">
                          <h3>Programme Details</h3>
                          <p>
                            <strong>Name:</strong> Ronaldo König
                          </p>
                          <p>
                            <strong>Phone:</strong> 009-215-5595
                          </p>
                          <p>
                            <strong>Email: </strong> info@example.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="references">
                  <div className="direction-tabs-content">
                    <h3>Brighton Waterfront Hotel, Brighton, London</h3>
                    <p className="derecttion-vanue">
                      1Hd- 50, 010 Avenue, NY 90001
                      <br />
                      United States
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="contact-info-box">
                          <h3>Tickets info</h3>
                          <p>
                            <strong>Name:</strong> Ronaldo König
                          </p>
                          <p>
                            <strong>Phone:</strong> 009-215-5595
                          </p>
                          <p>
                            <strong>Email: </strong> info@example.com
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="contact-info-box">
                          <h3>Programme Details</h3>
                          <p>
                            <strong>Name:</strong> Ronaldo König
                          </p>
                          <p>
                            <strong>Phone:</strong> 009-215-5595
                          </p>
                          <p>
                            <strong>Email: </strong> info@example.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 offset-lg-1">
            <div className="ts-map">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9028133968723!2d-73.99208268505396!3d40.74216397932861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a4119ce269%3A0x9dec0c979b575972!2sEataly+NYC+Flatiron!5e0!3m2!1sen!2sbd!4v1541577288827"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="speaker-shap">
        <Image
          className="shap1 wow fadeInLeft"
          data-wow-duration="1.5s"
          data-wow-delay="300ms"
          src={img_direction3}
          alt=""
        />
        <Image
          className="shap2 wow fadeInRight"
          data-wow-duration="1.5s"
          data-wow-delay="400ms"
          src={img_direction2}
          alt=""
        />
        <Image
          className="shap3 wow fadeInLeft"
          data-wow-duration="1.5s"
          data-wow-delay="500ms"
          src={img_direction4}
          alt=""
        />
        <Image
          className="shap4 wow fadeInUp"
          data-wow-duration="1.5s"
          data-wow-delay="600ms"
          src={img_direction1}
          alt=""
        />
      </div>
    </section>
  );
}
