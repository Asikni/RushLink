import { CardsData } from "@/app/utils/constants";
export const Cards = () => {
  return (
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
            <div className="views">{card.Views}</div>
            <div className="likes">{card.Likes}</div>
            <div className="dislikes">{card.Dislikes}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
