import Image from "next/image";

// import img from "/public/assets/images/hero_area/banner_img.png";

export default function LandingBanner() {
  return (
    <section className="hero-area">
      <div
        className="banner-item"
        style={{
          backgroundImage: "url(/assets/images/hero_area/banner_bg.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="banner-content-wrap">
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
          </div>
        </div>
      </div>

      <div className="tiles"></div>
    </section>
  );
}
