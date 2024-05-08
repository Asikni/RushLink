import { SocialMediaLogos } from "@/app/utils/constants";
import Image from "next/image";
export const Footer = () => {
  return (
    <div>
    <div className="footer">
      <div className="footerHeadings">
        <div className="rushLinkLogoFooter"></div>
        <div className="footerSubHeading">
          <p>
            Your Source for Fraternity and
            <br />
            Sorority News & Reviews.
          </p>
        </div>
        <div>
          <p className="footerSubHeadingSocialMedia">Follow Us On</p>
          <div className="socialMediaLogos">
            {SocialMediaLogos.map((socialmedialogo, index) => (
              <div key={index}>
                <Image
                  src={socialmedialogo.logo}
                  width={36.67}
                  height={36.67}
                  alt="social media logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footerDetails">
        <div className="allLinks">
          <div className="footerSubHeading Links">Site Links</div>
          <div className="footerSubHeading siteLinks">
            <div>Universities</div>
            <div>Fraternities</div>
            <div>Sororities</div>
            <div>Rankings</div>
          </div>
        </div>
        <div>
          <div className="footerSubHeading Contact">Contact</div>
          <div className="footerSubHeading contact">
            <p>Advertise</p>
            <p>Request</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div>
          <div className="footerSubHeading Resources">Resources</div>
          <div className="footerSubHeading resources">
            <p>About Us</p>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Legal</p>
          </div>
        </div>
      </div>
     
    </div>
    <div className="rl">© 2023 - Rushlink.com</div>
    </div>
  );
};
