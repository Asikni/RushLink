import { CardsData } from "@/app/utils/constants";
import Image from "next/image";
export const Cards = () => {
  return (
  <div>
    <div className="cards">
      {CardsData.map((card, index) => (
        <div className="individualCard" key={index}>
          <div className="cardTopHeading">{card.cardHeading}</div>
          <div className="cardComment">{card.cardComments}</div>
          <div className="byDate">
            <div>{card.cardBy}</div>
            <div>{card.DateTime}</div>
          </div>
          <div className="commentsData">
            <div className="viewsLogo">
              {<Image src={card.ViewsLogo} width={28.12} height={20.63} alt="views logo"/>}
            </div>
            <div className="views">{card.Views}</div>
            <div className="likesLogo">
              {<Image src={card.LikesLogo} width={28.12} height={20.63} alt="likes logo"/>}
            </div>
            <div className="likes">{card.Likes}</div>
            <div className="dislikesLogo">
              {<Image src={card.DislikesLogo} width={28.12} height={20.63} alt="dislikes logo"/>}
            </div>
            <div className="dislikes">{card.Dislikes}</div>
          </div>
        </div>
      ))}
    </div>
    <div className="bgEllipseImage"></div>
    </div>
  );
};
