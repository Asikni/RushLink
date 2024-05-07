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
      <div className="fsLogoImages">
        {TopFSImages.map((image, index) => (
          <div key={index}>
            <Image
              src={image.image}
              width={202.75}
              height={202.75}
              alt="logos of  Fraternities and Sororities"
            />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
