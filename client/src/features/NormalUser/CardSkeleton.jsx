function CardSkeleton({ card }) {
  return Array(card)
    .fill(0)
    .map((_, index) => (
      <div className="card-skeleton" key={index}>
        <div className="skeleton-left"></div>
        <div className="skeleton-right">
          <div className="skeleton-line name"></div>
          <div className="skeleton-line desc"></div>
          <div className="skeleton-line location"></div>
          <div className="skeleton-line title"></div>
          <div className="skeleton-buttons">
            <div className="skeleton-button"></div>
            <div className="skeleton-button"></div>
          </div>
        </div>
      </div>
    ));
}

export default CardSkeleton;
