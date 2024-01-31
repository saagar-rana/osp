import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Services from "../components/Services";

function LandingPage() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
    </>
  );
}

export default LandingPage;
