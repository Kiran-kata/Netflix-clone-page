export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-contact">Questions? Contact the project maintainer on GitHub.</p>
        
        <div className="footer-grid">
          <div>
            <a href="https://github.com/Kiran-kata/Netflix-clone-page" target="_blank" rel="noreferrer" className="footer-link">Repository</a>
            <a href="https://github.com/Kiran-kata" target="_blank" rel="noreferrer" className="footer-link">Author Profile</a>
            <a href="https://kiran-kata.github.io/Netflix-clone-page/" target="_blank" rel="noreferrer" className="footer-link">Live Demo</a>
            <a href="https://github.com/Kiran-kata/Netflix-clone-page#readme" target="_blank" rel="noreferrer" className="footer-link">Documentation</a>
          </div>
          <div>
            <a href="https://react.dev/" target="_blank" rel="noreferrer" className="footer-link">React</a>
            <a href="https://vite.dev/" target="_blank" rel="noreferrer" className="footer-link">Vite</a>
            <a href="https://developer.mozilla.org/" target="_blank" rel="noreferrer" className="footer-link">MDN Docs</a>
            <a href="https://github.com/features/pages" target="_blank" rel="noreferrer" className="footer-link">GitHub Pages</a>
          </div>
          <div>
            <a href="https://github.com/Kiran-kata/Netflix-clone-page/issues" target="_blank" rel="noreferrer" className="footer-link">Report Issue</a>
            <a href="https://github.com/Kiran-kata/Netflix-clone-page/pulls" target="_blank" rel="noreferrer" className="footer-link">Pull Requests</a>
            <a href="https://github.com/Kiran-kata/Netflix-clone-page/commits/main" target="_blank" rel="noreferrer" className="footer-link">Commit History</a>
            <a href="https://github.com/Kiran-kata/Netflix-clone-page/releases" target="_blank" rel="noreferrer" className="footer-link">Releases</a>
          </div>
          <div>
            <a href="https://kiran-kata.github.io/Netflix-clone-page/" target="_blank" rel="noreferrer" className="footer-link">Open Live Demo</a>
            <a href="https://kiran-kata.github.io/Netflix-clone-page/" target="_blank" rel="noreferrer" className="footer-link">Demo Status</a>
            <a href="https://github.com/Kiran-kata/Netflix-clone-page" target="_blank" rel="noreferrer" className="footer-link">Source Code</a>
          </div>
        </div>

        <select className="lang-select footer-lang" aria-label="Language selector">
          <option>English</option>
          <option>Español</option>
        </select>

        <p className="footer-copy">Streaming UI Clone Demo</p>
      </div>
    </footer>
  );
}
