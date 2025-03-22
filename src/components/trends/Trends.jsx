import "./Trends.scss";
import Img from "../../assets/picture2.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Trends() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <>
      <section className="trends">
        <div className="trends_container wrapper">
          <div className="trends_left" data-aos="fade-right">
            <img src={Img} alt="trends" />
          </div>
          <div className="trends_right" data-aos="zoom-in-up">
            <h5>E-SPORTS ARE BETTER TOGETHER</h5>
            <p>
              E-sports is about more than just watching—it’s the feeling of
              being part of something bigger. Connect with fellow fans, share
              opinions, and stay engaged with the teams and players you love
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
