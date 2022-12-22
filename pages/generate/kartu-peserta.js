import AuthDataParser from "../../lib/AuthDataParser";
import base64Image from "../../events/brr/kartu-peserta/base64image";
import base64ImageMobile from "../../events/brr/kartu-peserta/base64image_mobile";
import formidable from "formidable";
import useScreenInfo from "../../hooks/useScreenInfo";
import { useEffect, useState } from "react";

const KartuPeserta = ({ data }) => {
  const [style, setStyle] = useState({
    position: "relative",
    width: "1280px",
    height: "527px",
    backgroundImage: `url("data:image/png;base64, ${base64Image}")`,
    backgroundRepeat: "no-repeat",
    userSelect: "none",
    marginBottom: "20px",
  });

  const isMobile = useScreenInfo().isMobile;

  useEffect(() => {
    if (isMobile)
      setStyle({
        ...style,
        position: "absolute",
        width: "527px",
        height: "1280px",
        backgroundImage: `url("data:image/png;base64, ${base64ImageMobile}")`,
      });
  }, []);

  return data.map((d, i) => {
    if (isMobile)
      return (
        <div key={i} style={{ ...style, top: `${i * 1280}px` }}>
          <label
            style={{
              position: "absolute",
              fontSize: "30px",
              left: "375px",
              top: "50px",
              writingMode: "vertical-lr",
            }}
          >
            {d.EBib}
          </label>
          <label
            style={{
              position: "absolute",
              fontSize: "30px",
              left: "300px",
              top: "50px",
              writingMode: "vertical-lr",
            }}
          >
            {d.nmParticipant}
          </label>
          <label
            style={{
              position: "absolute",
              fontSize: "30px",
              left: "145px",
              top: "50px",
              writingMode: "vertical-lr",
            }}
          >
            {d.city}
          </label>
          <label
            style={{
              position: "absolute",
              fontSize: "30px",
              left: "30px",
              top: "50px",
              writingMode: "vertical-lr",
            }}
          >
            {d.brr}
          </label>
          <label
            style={{
              position: "absolute",
              fontSize: "30px",
              left: "145px",
              top: "450px",
              writingMode: "vertical-lr",
            }}
          >
            {d.dateEvent}
          </label>
          <label
            style={{
              position: "absolute",
              fontSize: "30px",
              left: "30px",
              top: "450px",
              writingMode: "vertical-lr",
            }}
          >
            {d.timeEvent}
          </label>
          <label
            style={{
              position: "absolute",
              fontSize: "30px",
              left: "145px",
              top: "695px",
              writingMode: "vertical-lr",
            }}
          >
            {d.gender == "M" ? "Pria" : "Wanita"}
          </label>
          <label
            style={{
              position: "absolute",
              fontSize: "30px",
              left: "30px",
              top: "695px",
              writingMode: "vertical-lr",
            }}
          >
            {d.jerseySize}
          </label>
        </div>
      );
    else
      return (
        <div key={i} style={style}>
          <label
            style={{
              position: "absolute",
              fontSize: "30px",
              left: "50px",
              top: "120px",
            }}
          >
            {d.EBib}
          </label>
          <label
            style={{
              position: "absolute",
              fontSize: "30px",
              left: "50px",
              top: "200px",
            }}
          >
            {d.nmParticipant}
          </label>
          <label
            style={{
              position: "absolute",
              fontSize: "30px",
              left: "50px",
              top: "355px",
            }}
          >
            {d.city}
          </label>
          <label
            style={{
              position: "absolute",
              fontSize: "30px",
              left: "50px",
              top: "465px",
            }}
          >
            {d.brr}
          </label>
          <label
            style={{
              position: "absolute",
              fontSize: "30px",
              left: "445px",
              top: "355px",
            }}
          >
            {d.dateEvent}
          </label>
          <label
            style={{
              position: "absolute",
              fontSize: "30px",
              left: "445px",
              top: "465px",
            }}
          >
            {d.timeEvent}
          </label>
          <label
            style={{
              position: "absolute",
              fontSize: "30px",
              left: "690px",
              top: "355px",
            }}
          >
            {d.gender}
          </label>
          <label
            style={{
              position: "absolute",
              fontSize: "30px",
              left: "690px",
              top: "465px",
            }}
          >
            {d.jerseySize}
          </label>
        </div>
      );
  });
};

export default KartuPeserta;

export async function getServerSideProps({ req }) {
  const authData = AuthDataParser(req);

  if (req.method != "POST" && authData)
    return {
      redirect: {
        permanent: true,
        destination: "/",
      },
      props: {},
    };

  const data = await new Promise((resolve, reject) => {
    const form = formidable();

    form.parse(req, (err, fields, files) => {
      if (err) reject({ err });
      resolve({ err, fields, files });
    });
  });

  if (!data.fields)
    return {
      redirect: {
        permanent: true,
        destination: "/",
      },
      props: {},
    };

  return {
    props: {
      data: JSON.parse(data.fields.data),
      isMobile: data.fields.isMobile,
    },
  };
}
