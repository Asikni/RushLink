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
      <div>
        <Cards />
      </div>
    </div>
  );
};
