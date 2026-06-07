import "./HeroVideo.css";

function HeroVideo({ video }) {
  return (
    <video
      className="hero-video"
      autoPlay
      muted
      loop
      playsInline
      key={video}
    >
      <source src={video} type="video/mp4" />
    </video>
  );
}

export default HeroVideo;