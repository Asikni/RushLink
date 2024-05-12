import { TopFSImages } from "@/app/utils/constants";
import Image from "next/image";
export const Rankings = () => {
  return (
    <div className="rankingSection">
      <div className="rankingHeading">Rankings</div>
      <div className="subHeadingOne">
        See Rankings of Fraternities and Sororities in Rushlink
      </div>
      <div className="subHeadingTwo">
        Top 5 Largest Fraternities & Sororities
        <br />
        (Excluding Cultural & Honors Fraternities)
      </div>
      <div className="fsLogoImagesContainer">
      <div className="dotsLogoThree"></div>
        <div
          className="fsLogoImages"
          // style={{ width: `${TopFSImages.length * 202.75}px` }}
        >
          {TopFSImages.map((image, index) => (
            <div key={index} className="logoImagesContainer">
              <div
                className="logoImagesNew"
                style={{ backgroundImage: `url("${image.image}")` }}
              >
                <div className="logoNumber">
                  <Image
                    src={image.logo}
                    width={47}
                    height={47}
                    alt="logo number"
                  />
                </div>
              </div>
              <div className="logoImageName">{image.name}</div>
            </div>
          ))}
        </div>
      </div>
    
      <div className="fsLogoImagesContainerMobile">
        <div
          className="fsLogoImagesMobile"
          style={{ width: `${TopFSImages.length * 202.75}px` }}
        >
          {TopFSImages.map((image, index) => (
            <div key={index} className="logoImagesContainer">
              <div
                className="logoImagesNewMobile"
                style={{ backgroundImage: `url("${image.image}")` }}
              >
                <div className="logoNumberMobile">
                  <Image
                    src={image.logo}
                    width={47}
                    height={47}
                    alt="logo number "
                  />
                </div>
              </div>
              <div className="logoImageNameMobile">{image.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
