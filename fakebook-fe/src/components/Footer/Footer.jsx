import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="languages">
        <ul>
          <li><a href="#">English (US)</a></li>
          <li><a href="#">Español</a></li>
          <li><a href="#">Français</a></li>
          <li><a href="#">Deutsch</a></li>
        </ul>
      </div>

      <div className="link-list">
        <ul>
          <li><a href="#">Sign Up</a></li>
          <li><a href="#">Log In</a></li>
          <li><a href="#">Messenger</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>

      <div className="footer-copyright">
        <p><a href="#">Cristina Silvestre</a>&copy; 2024 </p>
      </div>
    </footer>
  );
};

export default Footer;