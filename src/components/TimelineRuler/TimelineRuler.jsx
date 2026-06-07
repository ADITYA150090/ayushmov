import "./TimelineRuler.css";

function TimelineRuler() {
  return (
    <div className="timeline-ruler">

      <span className="start-time">
        00:00:00
      </span>

      <div className="playhead">
        <div className="playhead-marker"></div>
      </div>

      <div className="ruler">

        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className={`tick ${
              i % 5 === 0 ? "major" : "minor"
            }`}
          />
        ))}

      </div>

      <span className="end-time">
        00:02:05
      </span>

    </div>
  );
}

export default TimelineRuler;