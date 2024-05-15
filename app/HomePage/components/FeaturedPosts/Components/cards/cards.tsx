"use client";
import { CardsData } from "@/app/utils/constants";
import { useDeviceDetection } from "@/app/usehooks"; // Assuming useDeviceDetection hook exists
import Image from "next/image";

export const Cards = () => {
  const isMobile = useDeviceDetection(); // Assuming useDeviceDetection returns a boolean indicating if it's a mobile device

  return (
    <div className="cardsInnerContainer">
      <div
        className="cards"
        style={{
          width: isMobile
            ? `${CardsData.length * 316}px`
            : `${CardsData.length * 527}px`,
        }}
      >
        {CardsData.map((card, index) => (
          <div className="individualCard" key={index}>
            <div className="cardTopHeading">{card.cardHeading}</div>
            <div className="cardComment">{card.cardComments}</div>
            <div className="cardFooter">
              <div className="byDate">
                <div>{card.cardBy}</div>
                <div>{card.DateTime}</div>
              </div>
              <div className="commentsData">
                <div>
                  <Image
                    className="viewsLogo"
                    src={card.ViewsLogo}
                    width={28.12}
                    height={20.63}
                    alt="views logo"
                  />
                </div>
                <div className="views">{card.Views}</div>
                <div>
                  <Image
                    className="likesLogo"
                    src={card.LikesLogo}
                    width={28.12}
                    height={20.63}
                    alt="likes logo"
                  />
                </div>
                <div className="likes">{card.Likes}</div>
                <div>
                  <Image
                    className="dislikesLogo"
                    src={card.DislikesLogo}
                    width={28.12}
                    height={20.63}
                    alt="dislikes logo"
                  />
                </div>
                <div className="dislikes">{card.Dislikes}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
