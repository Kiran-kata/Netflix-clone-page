import Header from "./components/Header";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />

      <div className="divider" />

      <Feature
        title="Enjoy on your TV"
        text="Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, and more."
        image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
        video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
      />

      <div className="divider" />

      <Feature
        reverse
        title="Download your shows to watch offline"
        text="Save your favorites easily and always have something to watch."
        image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
      />

      <div className="divider" />

      <Feature
        title="Watch everywhere"
        text="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
        video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
      />

      <div className="divider" />

      <FAQ />

      <div className="divider" />

      <Footer />
    </>
  );
}

export default App;
