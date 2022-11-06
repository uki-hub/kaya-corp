import Image from "next/image";

import img from "/public/assets/images/hero_area/banner_img.png";

export default function LandingBanner() {
  return (
    <section className="hero-area">
      <div
        className="banner-item"
        style={{
          "background-image": "url(assets/images/hero_area/banner_bg.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="banner-content-wrap">
                <p
                  className="banner-info wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="500ms"
                >
                  5 to 7 June 2019, Waterfront Hotel, London
                </p>
                <h1
                  className="banner-title wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="700ms"
                >
                  digital thinkers Meet up
                </h1>
                <div
                  className="banner-btn wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="800ms"
                >
                  <a href="#" className="btn">
                    Buy Ticket
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 align-self-end">
              <div className="banner-img">
                asd
                <Image src={img} alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tiles">
        <div
          className="tile"
          data-scale="1.1"
          data-image="assets/images/hero_area/banner_slices.png"
        ></div>
      </div>
    </section>
  );
}
