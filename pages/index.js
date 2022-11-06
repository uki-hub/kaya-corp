import Image from "next/image";

import LandingHeader from "../components/Landing/Header/LandingHeader";
import LandingBanner from "../components/Landing/Banner/LandingBanner";
import LandingIntro from "../components/Landing/Intro/LandingIntro";
import LandingForm from "../components/Landing/Form/LandingForm";
import LandingSchedule from "../components/Landing/Schedule/LandingSchedule";
import LandingProduct from "../components/Landing/Product/LandingProduct";
import LandingNews from "../components/Landing/News/LandingNews";
import LandingSponsor from "../components/Landing/Sponsor/LandingSponsor";
import LandingMap from "../components/Landing/Map/LandingMap";
import LandingFooter from "../components/Landing/Footer/LandingFooter";

export default function LandingPage(props) {
  return (
    <div className="body-inner">
      <LandingHeader />
      <LandingBanner />
      <LandingIntro />
      <LandingForm />
      {/* <LandingSchedule /> */}
      <LandingProduct />
      <LandingNews />
      <LandingSponsor />
      <LandingMap />
      <LandingFooter />
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {},
  };
}
