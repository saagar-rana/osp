import about from "../assets/about.jpg";

function AboutUs() {
  return (
    <>
      <h1 className="flex items-center justify-center text-2xl md:text-4xl font-bold p-16 mt-7">
        About Us
      </h1>
      <div className="flex flex-col md:flex-row items-center font-poppins md:ml-20 -mt-10">
        <div className="md:w-1/2 p-8 md:pr-2">
          <p className="text-gray-600 text-sm md:text-base mb-6">
            We are your trusted source for genuine activation keys, empowering
            businesses to unlock the full potential of Microsoft software. With
            our wide range of products, including Windows, Office, Professional,
            Windows Server, and SQL Server keys, we pave the way for a digital
            future together. Embrace innovation and explore a world of
            possibilities with our reliable activation solutions. Our mission is
            to support your business growth by providing seamless access to
            essential Microsoft tools.
          </p>
          <p className="text-gray-600 text-sm md:text-base mb-6">
            Join us on this transformative journey as we build a digital
            landscape, enabling your success through authentic software
            activation. Partner with us and let's sow the seeds of digital
            advancement today. Our commitment to authenticity ensures that you
            receive legitimate and reliable activation solutions, laying a
            strong foundation for your digital endeavors. As technology evolves,
            we strive to be your trusted partner in this ever-changing
            landscape, guiding you towards growth and success.
          </p>
        </div>
        <div className="md:w-1/2 p-8 md:pl-2 flex justify-center">
          <img
            src={about}
            alt="Planting Digitalization"
            className="w-full h-auto md:w-96 md:h-auto"
          />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
