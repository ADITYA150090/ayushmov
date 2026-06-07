import "./Timeline.css";

function Timeline({
  footage,
  currentIndex,
  setCurrentIndex,
}) {
  return (
    <div className="timeline-wrapper">

      <div className="timeline-ruler">
      


        <div
          className="playhead"
          style={{
            left: `${(currentIndex / (footage.length - 1)) * 100}%`,
          }}
        >
          <div className="playhead-marker"></div>
        </div>

        {Array.from({ length: 60 }).map((_, i) => (
          <span
            key={i}
            className={`tick ${i % 5 === 0 ? "major" : ""}`}
          />
        ))}
      </div>

      <div className="timeline-gallery">
  {footage.map((item, index) => (
    <div
      key={item.id}
      className={`chapter ${
        currentIndex === index ? "active" : ""
      }`}
      onClick={() => setCurrentIndex(index)}
      onMouseEnter={() => {
        document.body.classList.add("cursor-expand");
      }}
      onMouseLeave={() => {
        document.body.classList.remove("cursor-expand");
      }}
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

    </div>
  );
}

export default Timeline;