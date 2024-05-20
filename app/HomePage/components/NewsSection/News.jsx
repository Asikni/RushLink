"use client";
import { NewsImages } from "@/app/utils/constants";
import { useDeviceDetection } from "@/app/usehooks";
export const News = () => {
  const isMobile = useDeviceDetection();
  return (
    <div className="newsPage">
      <div className="newsHeading">News</div>
      <div className="newsPreviewContainer">
        <div
          className="newsPreview"
          style={{
            width: isMobile
              ? `${NewsImages.length * 259}px`
              : `${NewsImages.length * 403}px`,
          }}
        >
          {NewsImages.map((image, index) => (
            <div
              key={index}
              className="individualImage"
              style={{ backgroundImage: `url("${image.image}")` }}
            >
              <div className="newsPreviewText">
                <div className="newsNameDate">
                  {image.name} {image.date}
                </div>
                <div className="newsArticlePreview">{image.newsArticle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
