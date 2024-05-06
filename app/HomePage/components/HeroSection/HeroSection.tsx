import { HeroSlider } from "./HeroSlider/HeroSlider";

export const Hero = () => {
  return (
    <div className="heroSection">
      <div className="heroHeading">
        <div className="heading1">Welcome To</div>
        <div className="heading2">Rushlink</div>
        <p className="heading3">
          Your Source for Fraternity and Sorority News & Reviews.
        </p>
      </div>

      <div>
        <HeroSlider />
      </div>
    </div>
  );
};
