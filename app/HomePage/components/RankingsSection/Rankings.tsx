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
        <div className="fsLogoImages">
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
              <p className="logoImageName">{image.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="fsLogoImagesContainerMobile">
        <div
          className="fsLogoImagesMobile"
          style={{ width: `${TopFSImages.length * 203}px` }}
        >
          {TopFSImages.map((image, index) => (
            <div key={index} className="logoImagesContainer">
              <div
                className="logoImagesNewMobile"
                style={{ backgroundImage: `url("${image.image}")` }}
              ></div>
              <div className="logoImageNameMobile">{image.name}</div>
              <div className="logoNumberMobile">
                <Image
                  src={image.logo}
                  width={47}
                  height={47}
                  alt="logo number "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
