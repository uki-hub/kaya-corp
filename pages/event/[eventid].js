import LandingHeader from "../../components/Landing/Header/LandingHeader";
import LandingBanner from "../../components/Landing/Banner/LandingBanner";
import LandingEventSchedule from "../../components/Landing/EventSchedule/LandingEventSchedule";
import LandingForm from "../../components/Landing/Form/LandingForm";
import LandingSchedule from "../../components/Landing/Schedule/LandingSchedule";
import LandingProduct from "../../components/Landing/Product/LandingProduct";
import LandingNews from "../../components/Landing/News/LandingNews";
import LandingSponsor from "../../components/Landing/Sponsor/LandingSponsor";
import LandingMap from "../../components/Landing/Map/LandingMap";
import LandingFooter from "../../components/Landing/Footer/LandingFooter";
import BundleScript from "../../components/Landing/BundleScript";
import { PesertaContextProvider } from "../../contexts/PesertaContext";
import axios from "axios";
import { EventContextProvider } from "../../contexts/EventContext";
import NoEvent from "../../components/Landing/NoEvent/NoEvent";
import {
  getEventInitializeData,
  sendPembayaranEvent,
} from "../../repositories/EventRepository";

export default function EventPage({ eventID, initData, d }) {
  if (d) return <>{d}</>;

  if (!initData) return <NoEvent />;

  return (
    <EventContextProvider eventID={eventID} eventData={initData}>
      <PesertaContextProvider>
        <BundleScript />
        <div className="body-inner">
          {/* <LandingHeader /> */}
          <LandingBanner />
          {/* <LandingEventSchedule /> */}
          <LandingForm />
          {/* <LandingSchedule /> */}
          <LandingProduct />
          <LandingNews />
          {/* <LandingSponsor /> */}
          <LandingMap />
          <LandingFooter />
        </div>
      </PesertaContextProvider>
    </EventContextProvider>
  );
}

export async function getServerSideProps(context) {
  const form = context.query["form"];

  if (form != null) {
    const res = await sendPembayaranEvent(form);

    return {
      props: {
        d: res,
      },
    };
  }

  const eventId = context.query["eventid"];

  const data = await getEventInitializeData(eventId);

  if (data == null || data.length == 0)
    return {
      props: {},
    };

  return {
    props: { eventID: eventId, initData: data[0] },
  };
}
