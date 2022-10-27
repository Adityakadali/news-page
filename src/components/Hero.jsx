import HeroImage from "../assets/images/image-web-3-desktop.jpg";

function Hero() {
  const newItems = [
    {
      title: "Hydrogen VS Electric Cars",
      subtitle: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      title: "The Downsides of AI Artistry",
      subtitle:
        "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      title: "Is VC Funding Drying Up?",
      subtitle:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];
  return (
    <section>
      <div className="container mx-auto my-4 flex flex-col gap-4 px-6 md:grid md:grid-cols-3">
        <div className="col-span-2 flex flex-col gap-4">
          <img src={HeroImage} alt="web-3" />
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

        <div className="bg-slate-900 p-6">
          <h2 className="text-3xl font-bold text-orange-300">New</h2>
          <div className="flex flex-col justify-between  divide-y divide-solid">
            {newItems.map((e, i) => {
              return (
                <div className="py-6" key={i}>
                  <h3 className="text-lg font-bold text-slate-50">{e.title}</h3>
                  <p className="mt-2 text-slate-100">{e.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
