import { HeroSlider } from "./HeroSlider/HeroSlider";
import { SearchBar } from "./searchbar";

export const Hero = () => {
  return (
    <div className="heroSection" style={{border:"1px solid red"}}>
      <div className="heroHeading">
        <div className="heading1">Welcome To</div>
        <div className="heading2">Rushlink</div>
        <p className="heading3">
          Your Source for Fraternity and Sorority News & Reviews.
        </p>
        <SearchBar />
      </div>

      <div>
        <HeroSlider />
      </div>
    </div>
  );
};
