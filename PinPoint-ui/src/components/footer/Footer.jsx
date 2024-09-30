import React from "react";
import "./Footer.scss";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTelegram,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useMediaQuery } from "@custom-react-hooks/use-media-query";

const Footer = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1506px)");
  return (
    <div className="footer">
      <div className="container">
        <div className="content">
          <div className="quick_links">
            <h4>Quick Links</h4>
            <span>Home</span>
            <span>Accessibility</span>
            <span>Features</span>
            <span>About</span>
            <span>Contact</span>
            <span>Help Center</span>
          </div>
          <div className="privacy">
            <h4>Privacy & terms</h4>
            <span>Privacy Policy</span>
            <span>User Agreement</span>
            <span>Cookie Policy</span>
            <span>Copyright Policy</span>
          </div>
          <div className="socila_links">
            <span>
              <FaFacebookSquare />
            </span>
            <span>
              <FaInstagramSquare />
            </span>
            <span>
              <FaSquareXTwitter />
            </span>
            <span>
              <FaTelegram />
            </span>
          </div>
        </div>
        <p>
          <span>PinPoint</span> Corporation © 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
