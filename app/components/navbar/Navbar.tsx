import { NavBarData } from "@/app/utils/constants";
import "@/app/navbar.css";
import "@/app/headings.css"
export const Navbar = () => {
  return (
    <nav>
      <div className="navBar">
        <div className="rushLinkLogo" >
         
        </div>
        <div className="navBarLinks">
          <div className="navBarLink">
            {NavBarData.map((data) => (
              <div>{data.title}</div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
