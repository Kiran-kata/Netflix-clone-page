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
        downloadCard
      />

      <div className="divider" />

      <Feature
        title="Watch everywhere"
        text="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
        video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
      />

      <div className="divider" />

      <Feature
        reverse
        title="Create profiles for kids"
        text="Send kids on adventures with their favorite characters in a space made just for them — free with your membership."
        image="https://occ-0-4604-3646.1.nflxso.net/dnm/api/v6/EVl0fb5S3LsoDly_Ar3fmsUQ3vE/AAAABYf8h_sQfPMulafN6P7eMiw4sRz2Y9Mrt-6Kk4vQ6xJfI4T91Em7Aes2v31AqhRBK7AepXZVQf--svfIo9g2JfB0M8q8P8kW2x8.png?r=63e"
      />

      <div className="divider" />

      <FAQ />

      <div className="divider" />

      <Footer />
    </>
  );
}

export default App;
