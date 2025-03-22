import React from "react";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import { RiSurveyFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import "./SocialLinks.scss"; // Import the SCSS file

export default function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaInstagram size={30} /> Instagram
        </>
      ),
      href: "https://www.instagram.com/igl_esportsleagues/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaTiktok size={30} /> TikTok
        </>
      ),
      href: "https://www.tiktok.com/@igl_esportsleagues?lang=en",
    },
    {
      id: 3,
      child: (
        <>
          <FaXTwitter size={30} /> Twitter
        </>
      ),
      href: "https://x.com/IGL_Esports",
    },
    {
      id: 4,
      child: (
        <>
          <RiSurveyFill size={30} /> Survey
        </>
      ),
      href: "https://docs.google.com/forms/d/e/1FAIpQLScuu-RRRQFIauqrng7CkQDGYZjAfC8LsZd2Wb5-Sa3aoW8NZg/viewform",
      download: true,
    },
  ];

  return (
    <div className="social-links">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li key={id} className={`social-link ${style}`}>
            <a
              href={href}
              className="link-content"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
