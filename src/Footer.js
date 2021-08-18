import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="icons-container">
        <a href="https://github.com/preetiroshan">
          <img
            class="tech-image social"
            src="assets/github.svg"
            alt="github-icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/preetiroshan/">
          <img
            class="tech-image social"
            src="assets/linkedin.svg"
            alt="linkedin-icon"
          />
        </a>
        <a href="https://www.twitter.com/preetiroshan/">
          <img
            class="tech-image social"
            src="assets/twitter.svg"
            alt="twitter-icon"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
