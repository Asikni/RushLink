import { Cards } from "./Components/cards";

export const Posts = () => {
  return (
    <div>
      <div className="postsHeading">Featured Posts</div>

      <div className="postSubHeading">
        <div className="postSubHeading Subheadings">
          <p>Connect</p>
          <p className="dot"></p>
          <p>Bond</p>
          <p className="dot"></p>
          <p>Thrive!!</p>
        </div>
      </div>
      <div className="cardsContainer">
        <div className="bgDotsImageMobile2"></div>
        <div className="bgEllipseImage"></div>
        <Cards />
      </div>
    </div>
  );
};
