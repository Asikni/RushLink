import Image from "next/image";
import { LogInButton } from "./componentss/Button";
export const LogIn = () => {
  return (
    <div>
      <Image
        src="/assets/PNG/logInImage.png"
        width={1067}
        height={409}
        alt="log-in background image"
      />
      <div>
      <div className="logInHeading">Didn't find your school?</div>
      <div className="logInSubHeading">Request for your school to be featured on</div>
      </div>
      <LogInButton />
    </div>
  );
};
