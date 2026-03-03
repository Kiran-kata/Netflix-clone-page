export default function Header() {
  return (
    <header className="header">
      <div className="demo-banner">Demo project — not affiliated with Netflix. Do not enter personal information.</div>
      <div className="container header-inner">
        <div className="header-logo" aria-label="Netflix UI Clone Demo">NETFLIX UI CLONE</div>

        <div className="header-actions">
          <select className="lang-select" aria-label="Language selector">
            <option>English</option>
            <option>Español</option>
          </select>
          <button className="sign-in-btn">Demo Mode</button>
        </div>
      </div>
    </header>
  );
}
