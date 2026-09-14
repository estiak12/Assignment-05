import HeroImage from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <div className="max-w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-10 md:py-16">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl pb-6">
          Build Your <br />
          <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h2>

        <p className="pb-7 text-sm sm:text-base">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
          <button className="bg-gradient-to-r from-[#F97316] to-[#EC4899] border rounded-2xl px-5 py-3 font-semibold text-sm text-white">
            Explore Technologies
          </button>

          <button className="bg-white border rounded-2xl px-11 py-3 border-[#E5E7EB]">
            Learn More
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={HeroImage}
          alt="Development Stack"
          className="w-[80%] sm:w-[70%] md:w-full max-w-[500px]"
        />
      </div>
    </div>
  );
};

export default Hero;
