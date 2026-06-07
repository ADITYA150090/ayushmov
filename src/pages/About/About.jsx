import "./About.css";
import ayushImage from "../../assets/images/vertical.jpg";
import ScrambledText from "../../components/ScrambledText/ScrambledText";

function About() {
  return (
    <section className="about-section">

      <div className="about-label">
        (About)
      </div>

      <h2 className="about-heading">
        I Do,
        film, and visual storytelling.
      </h2>

      <div className="about-content">

        <div className="about-text">

        <ScrambledText
  className="scrambled-text-demo"
  radius={100}
  duration={1.2}
  speed={0.5}
  scrambleChars=".:"
>
Most people spend their lives waiting for the perfect moment. The perfect camera. The perfect opportunity. The perfect excuse. I got tired of that bullshit pretty quickly.

What started as curiosity turned into an obsession with visual storytelling. A camera became a reason to wake up early, climb mountains, get lost in unfamiliar places, and occasionally question my life choices while carrying gear up a hill for a shot that lasts three seconds.



I'm constantly experimenting, learning, breaking things, and figuring out better ways to tell stories through motion, color, sound, and perspective. Every project is another opportunity to make something worth remembering instead of something people scroll past in half a second.

If you're looking for perfection, you're probably in the wrong place. If you're looking for someone obsessed with making things better than yesterday, welcome.

</ScrambledText>
        </div>

        <div className="about-image">

        <img
  src={ayushImage}
  alt="Ayush"
/>

        </div>

      </div>

    </section>
  );
}

export default About;