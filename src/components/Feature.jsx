export default function Feature({ title, text, image, video, reverse }) {
  return (
    <section style={styles.section}>
      <div
        className="container"
        style={{
          ...styles.grid,
          flexDirection: reverse ? "row-reverse" : "row",
        }}
      >
        <div style={styles.textContent}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>

        <div style={styles.media}>
          <img src={image} alt="" style={styles.image} />
          {video && (
            <video autoPlay playsInline muted loop style={styles.video}>
              <source src={video} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: { 
    padding: "70px 0",
  },
  grid: {
    display: "flex",
    alignItems: "center",
    gap: 60,
    flexWrap: "wrap",
  },
  textContent: {
    flex: 1,
    minWidth: 300,
  },
  media: { 
    position: "relative",
    flex: 1,
    minWidth: 300,
  },
  image: { 
    width: "100%",
    position: "relative",
    zIndex: 2,
  },
  video: {
    position: "absolute",
    top: "20%",
    left: "13%",
    width: "74%",
    zIndex: 1,
  },
};
