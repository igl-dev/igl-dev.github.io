import "./Navigation.scss";
import { gameInfo } from "../../utils";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Navigation() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <>
      <section className="games">
        <div className="games_container wrapper" data-aos="fade-up">
          {gameInfo.map(({ id, img }) => (
            <img src={img} alt="game" key={id} />
          ))}
        </div>
      </section>
    </>
  );
}
