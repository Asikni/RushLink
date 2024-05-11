import { heroSliderImages } from "@/app/utils/constants";
import Image from "next/image";
export const HeroSlider = () => {
  return (
    <div className="heroSliderSection">
      <div className="nea" style={{width:`${heroSliderImages.length * 522}px`}}>
        <div className="sliderImages">
          {heroSliderImages.map((sliderImage, index) => (
            <div key={index} className="heroSliderImage">
              <Image
                src={sliderImage.image}
                width={522}
                height={391}
                alt="sliderImages"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="dotsLogoTwo"></div>
      {/* <div className="dotsLogoOne"></div> */}
      {/* <div className="greyBgImage"></div> */}
    </div>
  );
};
