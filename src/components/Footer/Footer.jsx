import "./Footer.css";
import ayushImage from "../../assets/images/ayush.jpg";
import TextPressure from "../../components/TextPressure/TextPressure";
function Footer() {
  return (
    <section id="contact" className="footer-section">

<img
    src={ayushImage}
    alt="Ayush"
    className="footer-bg-image"
  />

  <div className="footer-overlay"></div>

      <div className="footer-top-line"></div>

      <div className="footer-content">

       

        

      <div
  className="footer-title-wrapper"
  onMouseEnter={() =>
    document.body.classList.add("cursor-expand")
  }
  onMouseLeave={() =>
    document.body.classList.remove("cursor-expand")
  }
>
  <TextPressure
    text="AYUSH MOV"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    minFontSize={36}
  />
</div>

      </div>

      <div className="footer-links">

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          INSTAGRAM
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          LINKEDIN
        </a>

        <a href="mailto:hello@ayush.com">
          MAIL
        </a>

        <a href="tel:+919876543210">
          PHONE
        </a>

      </div>

      <div className="footer-bottom">

        <div className="footer-credit">
          Designed & Developed by{" "}
          <a
            href="https://linkedin.com/in/YOUR-LINKEDIN"
            target="_blank"
            rel="noreferrer"
          >
            Aditya
          </a>
        </div>

        <div className="footer-rights">
          © 2026 All Rights Reserved
        </div>

      </div>

    </section>
  );
}

export default Footer;