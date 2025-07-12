import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ItemSkeleton({ card }) {
  return Array(card)
    .fill(0)
    .map((_, index) => (
      <div className="product-card skeleton" key={index}>
        <div className="skeleton-image"></div>
        <div className="skeleton-text title"></div>
        <div className="skeleton-stars"></div>
        <div className="skeleton-text price"></div>
        <div className="skeleton-button"></div>
      </div>
    ));
}

export default ItemSkeleton;
