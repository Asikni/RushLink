import { NavBarData } from "@/app/utils/constants"

export const Navbar = () =>{
    return(
        <nav>
            <div className="navBar">
                <div><span>rush</span>link.</div>
                <div className="navBarLinks">
                <div className="navBarLink">{NavBarData.map((data) => (
                    <div>{data.title}</div>)
                )}</div>
                </div>

            </div>
        </nav>
    )
}