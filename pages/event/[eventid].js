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

export default function EventPage({ eventID, initData }) {
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
          <LandingSponsor />
          <LandingMap />
          <LandingFooter />
        </div>
      </PesertaContextProvider>
    </EventContextProvider>
  );
}

export async function getServerSideProps(context) {
  const eventId = context.query["eventid"];

  const response = await axios.post(
    "https://api.bantengseries.com//api/ticket/initialize.php",
    {
      idevent: eventId,
    }
  );

  if (response.data == null || response.data.length == 0)
    return {
      props: {},
    };

  return {
    props: { eventID: eventId, initData: response.data[0] },
  };
}
