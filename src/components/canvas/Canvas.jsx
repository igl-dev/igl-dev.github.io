import "./Canvas.scss";
import Mobil from "../../assets/picture1.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ReactTyped } from "react-typed";

export default function Canvas() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <>
      <section className="canvas">
        <div className="canvas_container wrapper">
          <div className="canvas_left" data-aos="fade-right">
            <img src={Mobil} alt="canvas" />
          </div>
          <div className="canvas_right" data-aos="zoom-in">
            <h1>DRAFT, STRATEGIZE, </h1>
            <ReactTyped
              className="canvas_typed"
              strings={["CONQUER_", "COMPETE_", "CONTENT!_"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
            <p>
              Welcome to IGL, the home of competitive gaming’s next evolution.
              Whether you’re building the perfect squad, outplaying the
              competition, or staying ahead of the meta, we’ve got you covered.
              Discover a space where fans, pros, and creators connect, share,
              and compete like never before. <br />
              <br />
              Your e-sports experience, streamlined.
            </p>
            {/* <a href="#" className="btn">
              EXPLORE
            </a> */}
          </div>
        </div>
      </section>
    </>
  );
}
