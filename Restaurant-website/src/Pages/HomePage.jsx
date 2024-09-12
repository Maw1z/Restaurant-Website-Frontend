import Hero from "../Components/Hero";
import About from "../Components/About";
import OurStory from "../Components/OurStory";

function HomePage() {
  return (
    <>
      <div className="snap-container">
        <Hero />
        <About />
        <OurStory />
      </div>
    </>
  );
}

export default HomePage;
