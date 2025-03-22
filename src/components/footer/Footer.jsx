import "./Footer.scss";
import Igl from "../../assets/IGL_Logo_Final_Color_Full.png";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer_container wrapper">
          <div className="footer_col">
            <img src={Igl} alt="igl" className="igl" />
            <p>
              Compete to grow, connect to thrive, and create to
              inspire—achieving success through rivalry and discernment.
            </p>
          </div>
          <div className="footer_col">
            <h3>About</h3>
            <a href="#">About Us</a>
            <a href="#">Features</a>
            <a href="#">Updates</a>
          </div>

          <div className="footer_col">
            <h3>Company</h3>
            <a href="#">Openings</a>
            <a href="#">Get App</a>
            <a href="#">Events</a>
          </div>

          <div className="footer_col">
            <h3>Help</h3>
            <a href="#">FAQs</a>
            <a href="#">Support</a>
            <a href="#">Contact US</a>
          </div>
        </div>
      </div>
    </>
  );
}
