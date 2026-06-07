import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-top-line"></div>

      <div className="contact-content">

        <div className="contact-label">
          (Contact)
        </div>

        <p className="contact-description">
          Let's work together. If you have an idea,
          a project, or simply want to talk about visuals
          and editing, feel free to reach out. You can
          email me directly or drop a hi through other
          channels.
        </p>

        <h1
  href="mailto:hi@ayush.com"
  className="contact-email"
  onMouseEnter={() =>
    document.body.classList.add("cursor-expand")
  }
  onMouseLeave={() =>
    document.body.classList.remove("cursor-expand")
  }
>
  hi@ayush.com
</h1>

        <div className="contact-links">

          <a href="#">
            INSTAGRAM
          </a>

          <a href="#">
            (+91 98765 43210)
          </a>

          <a href="#">
            LINKEDIN
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;