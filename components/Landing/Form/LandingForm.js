import Image from "next/image";

import img1 from "/public/assets/images/shap/home_speaker_memphis1.png";
import img2 from "/public/assets/images/shap/home_speaker_memphis2.png";
import img3 from "/public/assets/images/shap/home_speaker_memphis3.png";


export default function LandingForm (props) {
    return (
        <section
        id="ts-speakers"
        className="ts-speakers"
        style={{
          "background-image": "url(assets/images/speakers/speaker_bg.png)",
        }}
      >
        <div className="container">
          <h1>Form Registration</h1>
        </div>

        <div className="speaker-shap">
          <Image           
            className="shap1"
            src={img1}
            alt=""
          />
          <Image           
            className="shap2"
            src={img2}
            alt=""
          />
          <Image
            className="shap3"
            src={img3}
            alt=""
          />
        </div>
      </section>
    );
}