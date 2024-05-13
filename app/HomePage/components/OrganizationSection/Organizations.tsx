import "@/app/headings.css";
import { FsLogos } from "./components/fsLogos";

export const Organizations = () => {
  return (
    <div className="organizations">
      <div className="organizationHeadingOne">
        bonded in brotherhood and
        <br className="break-md" /> sisterhood.
        <div className="bgEllipseImage2"></div>
      </div>
      <div className="organizationHeadingThree">
        Across a wide range of Organizations
      </div>
      <div>
        <FsLogos />
      </div>
    </div>
  );
};
