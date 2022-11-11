import { useContext } from "react";
import EventContext from "../../../contexts/EventContext";

export default function LandingBanner() {
  const eventCtx = useContext(EventContext);

  const img = require(`/events/${eventCtx.eventID}/background/main_background.jpg`);

  return (
    <section className="hero-area">
      <div
        className="banner-item"
        style={{
          backgroundImage: `url("${img.default.src}")`,
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
