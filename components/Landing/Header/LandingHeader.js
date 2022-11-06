import img from "/public/assets/images/logos/logo.png";

import Image from "next/image";

export default function LandingHeader(props) {
  return (
    <header id="header" className="header header-transparent">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="index-2.html">
            <Image src={img} alt="logo" />
          </a>
        </nav>
      </div>
    </header>
  );
}
