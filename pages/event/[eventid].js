import Image from "next/image";

import LandingHeader from "../../components/Landing/Header/LandingHeader";
import LandingBanner from "../../components/Landing/Banner/LandingBanner";
import LandingEventSchedule from "../../components/Landing/EventSchedule/LandingEventSchedule";
import LandingForm from "../../components/Landing/Form/LandingForm";
import LandingSchedule from "../../components/Landing/Schedule/LandingSchedule";
import LandingProduct from "../../components/Landing/Product/LandingProduct";
import LandingNews from "../../components/Landing/News/LandingNews";
// import LandingSponsor from "../../components/Landing/Sponsor/LandingSponsor";
import LandingMap from "../../components/Landing/Map/LandingMap";
import LandingFooter from "../../components/Landing/Footer/LandingFooter";
import BundleScript from "../../components/Landing/BundleScript";
import { PesertaContextProvider } from "../../contexts/PesertaContext";

export default function EventPage(props) {
  return (
    <PesertaContextProvider>
      <BundleScript />
      <div className="body-inner">
        <LandingHeader />
        <LandingBanner />
        <LandingEventSchedule />
        <LandingForm />
        {/* <LandingSchedule /> */}
        <LandingProduct />
        <LandingNews />
        {/* <LandingSponsor /> */}
        <LandingMap />
        <LandingFooter />
      </div>
    </PesertaContextProvider>
  );
}

// export async function getStaticProps(context) {
//   return {
//     props: {},
//   };
// }
