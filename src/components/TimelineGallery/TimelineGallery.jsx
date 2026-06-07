import "./TimelineGallery.css";

function TimelineGallery({
  footage,
  currentIndex,
  setCurrentIndex,
}) {
  return (
    <div className="timeline-gallery">
      {footage.map((item, index) => (
        <div
          key={item.id}
          className={`chapter ${
            currentIndex === index ? "active" : ""
          }`}
          onClick={() => setCurrentIndex(index)}
        >
          <div className="chapter-number">
            {item.chapter}
          </div>

          <img
            src={item.thumbnail}
            alt={item.title}
          />

          <div className="chapter-title">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TimelineGallery;