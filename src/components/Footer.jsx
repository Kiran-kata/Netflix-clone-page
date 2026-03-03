export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-contact">Questions? Call 1-844-505-2993</p>
        
        <div className="footer-grid">
          <div>
            <a href="#" className="footer-link">FAQ</a>
            <a href="#" className="footer-link">Investor Relations</a>
            <a href="#" className="footer-link">Privacy</a>
            <a href="#" className="footer-link">Speed Test</a>
          </div>
          <div>
            <a href="#" className="footer-link">Help Center</a>
            <a href="#" className="footer-link">Jobs</a>
            <a href="#" className="footer-link">Cookie Preferences</a>
            <a href="#" className="footer-link">Legal Notices</a>
          </div>
          <div>
            <a href="#" className="footer-link">Account</a>
            <a href="#" className="footer-link">Ways to Watch</a>
            <a href="#" className="footer-link">Corporate Information</a>
            <a href="#" className="footer-link">Only on Netflix</a>
          </div>
          <div>
            <a href="#" className="footer-link">Media Center</a>
            <a href="#" className="footer-link">Terms of Use</a>
            <a href="#" className="footer-link">Contact Us</a>
          </div>
        </div>

        <select className="lang-select footer-lang" aria-label="Language selector">
          <option>English</option>
          <option>Español</option>
        </select>

        <p className="footer-copy">Netflix</p>
      </div>
    </footer>
  );
}
