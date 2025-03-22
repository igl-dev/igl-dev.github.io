import "./Avatar.scss";
import { avatarInfo } from "../../utils";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaSteam, FaPlaystation, FaXbox } from "react-icons/fa";
export default function Avatar() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <>
      <div className="avatar">
        <h1 data-aos="fade-up">INTEGRATED CROSS-PLATFORM</h1>
        <div className="avatar_container">
          {avatarInfo.map(({ image, title, description }) => (
            <article
              className="avatar_card"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="card_content">
                <span className="card_description">{description}</span>
                <h3 className="card_title">{title}</h3>
                <div className="socials">
                  <a
                    href="https://store.steampowered.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="social_link"
                  >
                    <span className="social_icons">
                      <FaSteam />
                    </span>
                  </a>
                  <a
                    href="https://www.playstation.com/en-us/"
                    target="_blank"
                    rel="noreferrer"
                    className="social_link"
                  >
                    <span className="social_icons">
                      <FaPlaystation />
                    </span>
                  </a>
                  <a
                    href="https://www.xbox.com/en-US"
                    target="_blank"
                    rel="noreferrer"
                    className="social_link"
                  >
                    <span className="social_icons">
                      <FaXbox />
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
