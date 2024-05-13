import { HeroSlider } from "./HeroSlider/HeroSlider";
import { SearchBar } from "./searchbar";

export const Hero = () => {
  return (
    <div className="heroSection">
      
      <div className="heroHeading">
        <div className="heading1">
          Welcome To <br className="break-md" />
          <span className="heading2">RushLink</span>
        </div>
        <div className="bgDotsImageMobile"></div>

        <p className="heading3">
          Your Source for Fraternity and Sorority News & Reviews.
        </p>
        <SearchBar />
      </div>

      <div className="heroSliderContainer">
        <HeroSlider />
      </div>
    </div>
  );
};
