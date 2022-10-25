import HeroImage from "../assets/images/image-web-3-desktop.jpg";

function Hero() {
  return (
    <section>
      <div className="container mx-auto my-4 flex flex-col gap-4 px-6 md:grid md:grid-cols-3">
        <div className="col-span-2 flex flex-col gap-4">
          <img src={HeroImage} alt="image of web-3" />
          <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">
              The Bright Future of Web 3.0?
            </h1>
            <div>
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="mt-6 bg-red-400 px-4 py-2 font-semibold text-white">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
