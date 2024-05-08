import Image from "next/image";
import { LogInButton } from "./componentss/Button";

export const LogIn = () => {
  return (
    <div className="logInComponent">
      <div className="logInBgImage">
        <div className="logInImageContent">
          <h1 className="logInHeading">Didn't find your school?</h1>
          <h2 className="logInSubHeading">
            Request for your school to be featured on
          </h2>

          <LogInButton />
        </div>
      </div>
      <div className="bgLogoone">
        <div className="bgLogo"></div>
      </div>
    </div>
  );
};
