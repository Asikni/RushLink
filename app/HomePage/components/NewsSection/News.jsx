"use client";
import { NewsImages } from "@/app/utils/constants";
import Image from "next/image";
import { useDeviceDetection } from "@/app/usehooks";
export const News = () => {
  const isMobile = useDeviceDetection();
  return (
    <div className="newsPage"

    >
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
            <div key={index} className="individualImage">
              <Image
                className="newsPreviewImage"
                src={image.image}
                width={370}
                height={441}
                alt="preview of news articles"
              />
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
