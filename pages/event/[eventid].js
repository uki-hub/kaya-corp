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
import { EventContextProvider } from "../../contexts/EventContext";
import NoEvent from "../../components/Landing/NoEvent/NoEvent";
import { getEventInitializeData } from "../../repositories/EventRepository";
import { useEffect, useState } from "react";

export default function EventPage({ eventID, initData }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [isLoaded]);

  if (!initData) window.location.href = "/event/brr";

  return (
    <EventContextProvider eventID={eventID} eventData={initData}>
      <PesertaContextProvider>
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
        {isLoaded && <BundleScript />}
      </PesertaContextProvider>
    </EventContextProvider>
  );
}

// export async function getServerSideProps(context) {
//   const eventId = context.query["eventid"];

//   let data;

//   try {
//     data = await getEventInitializeData(eventId);
//   } catch (error) {
//     console.log(error);
//   }

//   console.log(data);

//   if (data == null || data.length == 0)
//     return {
//       props: {},
//       redirect: {
//         permanent: true,
//         destination: "/event/brr",
//       },
//     };

//   return {
//     props: { eventID: eventId, initData: data[0] },
//   };
// }

export async function getStaticPaths() {
  return {
    paths: [{ params: { eventid: "brr" } }],
    fallback: "blocking",
  };
}

export async function getStaticProps({params }) {
  const eventId = params.eventid;

  const data = await getEventInitializeData(eventId);

  return {
    props: {
      eventID: eventId,
      initData: data[0],
    },
  };
}
