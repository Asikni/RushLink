import Image from "next/image";
import { LogInButton } from "./componentss/Button";

export const LogIn = () => {
  return (
    <div className="logInComponent">
      <div className="logInBgImage">
        <div className="logInBgImage2"></div>
        <div className="logInImageContent">
          <h1 className="logInHeading">Didn&apos;t find your school?</h1>
          <h2 className="logInSubHeading">
            Request for your school to be featured on
          </h2>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <LogInButton />
          </div>
        </div>
      </div>
      <div className="bgLogoone">
        <div className="bgLogo"></div>
      </div>
    </div>
  );
};
