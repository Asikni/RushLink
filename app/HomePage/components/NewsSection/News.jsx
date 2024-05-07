import { NewsImages } from "@/app/utils/constants";
import Image from "next/image";
export const News = () => {
  return (
    <div>
      <div className="newsHeading">News</div>
      <div className="newsPreview">
        {NewsImages.map((image) => (
          <div>
            <Image
              className="newsPreviewImage"
              src={image.image}
              width={370}
              height={441}
              alt="preview of news articles"
            />
            <div className="newsPreviewText">
              <div className="newsNameDate">
                {image.name}
                {image.date}
              </div>
              <div className="newsArticlePreview">{image.newsArticle}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
