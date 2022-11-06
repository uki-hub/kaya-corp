import Image from "next/image";

import img_dot from "/public/assets/images/pricing/dot.png";
import img_pricing from "/public/assets/images/shap/pricing_memphis1.png";

export default function LandingProduct() {
  return (
    <section
      className="ts-pricing gradient"
      style={{
        "background-image": "url(images / pricing / pricing_img.jpg)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="section-title white">
              <span>Pricing Plans</span>
              Get your Ticket
            </h2>
          </div>
        </div>

        <div className="row">
          <div
            className="col-lg-4 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="400ms"
          >
            <div className="pricing-item">
              <Image
                className="pricing-dot"
                src={img_dot}
                alt=""
              />
              <div className="ts-pricing-box">
                <div className="ts-pricing-header">
                  <h2 className="ts-pricing-name">Early Bird</h2>
                  <h3 className="ts-pricing-price">
                    <span className="currency">$</span>219
                  </h3>
                </div>
                <div className="ts-pricing-progress">
                  <p className="amount-progres-text">
                    Available tickets for this price
                  </p>
                  <div className="ts-progress">
                    <div
                      className="ts-progress-inner"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                  <p className="ts-pricing-value">500/500</p>
                </div>
                <div className="promotional-code">
                  <p className="promo-code-text">Enter Promotional Code</p>
                  <a href="#" className="btn pricing-btn">
                    Buy Ticket
                  </a>
                  <p className="vate-text">All prices exclude 25% VAT</p>
                </div>
              </div>
              <Image
                className="pricing-dot1"
                src={img_dot}
                alt=""
              />
            </div>
          </div>

          <div
            className="col-lg-4 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="500ms"
          >
            <div className="pricing-item">
              <Image
                className="pricing-dot"
                src={img_dot}
                alt=""
              />
              <div className="ts-pricing-box">
                <span className="big-dot"></span>
                <div className="ts-pricing-header">
                  <h2 className="ts-pricing-name">Regular</h2>
                  <h3 className="ts-pricing-price">
                    <span className="currency">$</span>399
                  </h3>
                </div>
                <div className="ts-pricing-progress">
                  <p className="amount-progres-text">
                    Available tickets for this price
                  </p>
                  <div className="ts-progress">
                    <div
                      className="ts-progress-inner"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <p className="ts-pricing-value">350/500</p>
                </div>
                <div className="promotional-code">
                  <p className="promo-code-text">Enter Promotional Code</p>
                  <a href="#" className="btn pricing-btn">
                    Buy Ticket
                  </a>
                  <p className="vate-text">All prices exclude 25% VAT</p>
                </div>
              </div>

              <Image
                className="pricing-dot1"
                src={img_dot}
                alt=""
              />
            </div>
          </div>

          <div
            className="col-lg-4 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="600ms"
          >
            <div className="pricing-item">
              <Image
                className="pricing-dot"
                src={img_dot}
                alt=""
              />
              <div className="ts-pricing-box">
                <span className="big-dot"></span>
                <div className="ts-pricing-header">
                  <h2 className="ts-pricing-name">Platinum</h2>
                  <h3 className="ts-pricing-price">
                    <span className="currency">$</span>699
                  </h3>
                </div>
                <div className="ts-pricing-progress">
                  <p className="amount-progres-text">
                    Available tickets for this price
                  </p>
                  <div className="ts-progress">
                    <div
                      className="ts-progress-inner"
                      sstyle={{ width: "50%" }}
                    ></div>
                  </div>
                  <p className="ts-pricing-value">250/500</p>
                </div>
                <div className="promotional-code">
                  <p className="promo-code-text">Enter Promotional Code</p>
                  <a href="#" className="btn pricing-btn">
                    Buy Ticket
                  </a>
                  <p className="vate-text">All prices exclude 25% VAT</p>
                </div>
              </div>

              <Image
                className="pricing-dot1"
                src={img_dot}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="speaker-shap wow fadeInUp"
        data-wow-duration="1.5s"
        data-wow-delay="400ms"
      >
        <Image
          className="shap2"
          src={img_pricing}
          alt=""
        />
      </div>
    </section>
  );
}
