import { FSLogos } from "@/app/utils/constants";
import Image from "next/image";
export const FsLogos = () => {
  return (
    <div className="fsLogosBox">
      <div className="fsLogos">
        <div className="OrganizationsLogos">
          <div className="horizontalLine"></div>
          {FSLogos.map((logo) => (
            <div>
              {
                <Image
                  src={logo.image}
                  width={148}
                  height={148}
                  alt="logos of various organizations"
                  className="topFSLogos"
                />
              }

              <div className="verticalLineOne"></div>

              <div className="verticalLineTwo"></div>
              <div className="verticalLineThree"></div>
            </div>
          ))}
        </div>
        <div className="moreLogos">
          <div className="moreLogosSign"></div>
          <div className="moreLogosText"></div>
        </div>
      </div>
    </div>
  );
};
