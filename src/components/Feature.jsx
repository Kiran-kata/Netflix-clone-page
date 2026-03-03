export default function Feature({ title, text, image, video, reverse, downloadCard }) {
  const videoClass = title === "Watch everywhere" ? "feature-video feature-video-devices" : "feature-video";

  return (
    <section className="feature-section">
      <div
        className={`container feature-grid ${reverse ? "feature-reverse" : ""}`}
      >
        <div className="feature-text">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>

        <div className="feature-media">
          <img src={image} alt="" className="feature-image" />
          {video && (
            <video autoPlay playsInline muted loop className={videoClass}>
              <source src={video} type="video/mp4" />
            </video>
          )}
          {downloadCard && (
            <div className="download-card">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                alt="Stranger Things"
                className="download-poster"
              />
              <div className="download-text">
                <p className="download-title">Stranger Things</p>
                <p className="download-status">Downloading...</p>
              </div>
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                alt="Downloading"
                className="download-gif"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
