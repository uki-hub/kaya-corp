import { useContext } from "react";
import EventContext from "../../../contexts/EventContext";

export default function LandingBanner() {
  const eventCtx = useContext(EventContext);

  const img = require(`/events/${eventCtx.eventID}/background/main_background.jpg`);

  return (
    <section className="hero-area">
      <div
        // className="banner-item"
        style={{
          backgroundImage: `url("${img.default.src}")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          // backgroundPosition: 'center center',
          height: '100vh',
          width: '100wh',
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "8rem",
            right: 0,
            left: "0",
            textAlign: "center",
          }}
        >
          <div
            href="#ticket-form"
            style={{
              backgroundImage: 'url("/assets/images/splash.png")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center center",
            }}
          >
            <a href="#ticket-form">
              <label
                className="buy-ticket"
                style={{
                  fontSize: "2rem",
                  height: "6rem",
                  lineHeight: "6.5rem",
                  color: "ghostwhite",
                  cursor: "pointer",
                }}
              >
                Buy Ticket
              </label>
            </a>
          </div>
        </div>
      </div>

      {/* <div className="tiles"></div> */}
    </section>
  );
}
