import cta_asset from "../../../../assets/cta_asset.jpg";

const CTA = () => {
  const user = JSON.parse(localStorage.getItem("userCredentials"));

  return (
    <section className="relative w-full mx-auto flex flex-col items-center text-center py-28 mt-[7rem] px-4">
      {/* Background Image Overlay */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover brightness-[50%] z-[-1]"
        src={cta_asset}
        alt="CTA Background"
      />

      {!user ? (
        <>
          <h3 className="font-semibold text-white text-4xl sm:text-5xl">
            Let's begin your text to <br />
            <span className="text-blue-400">innovative journey</span>
          </h3>
          <p className="text-zinc-300 my-5 max-w-xl text-lg">
            Join our creative community and embrace next-gen AI design tools.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <input
              className="border border-zinc-400 bg-white/10 backdrop-blur-md text-white w-[18rem] sm:w-[24rem] py-3 px-4 rounded-full placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              placeholder="Enter your email address..."
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full text-white text-base font-semibold shadow-lg"
            >
              Generate your ideas today
            </button>
          </form>
          <footer className="flex flex-wrap justify-center text-gray-400 gap-6 mt-6 text-sm font-medium">
            <span className="hover:text-white transition cursor-pointer">
              Learn the basics
            </span>
            <span className="hover:text-white transition cursor-pointer">
              First implement
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Start today
            </span>
          </footer>
        </>
      ) : (
        <>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to bring your preparations with us?
          </h2>
          <p className="text-lg text-gray-300 mt-3">
            You're all set — start creating stunning quizes with AI in seconds.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 mt-6 rounded-full text-white text-base font-semibold shadow-lg">
            Launch the Generator
          </button>
          <div className="flex justify-center flex-wrap gap-6 text-sm text-gray-400 pt-6">
            <span className="hover:text-white transition cursor-pointer">
              Learn the basics
            </span>
            <span className="hover:text-white transition cursor-pointer">
              First implement
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Start today
            </span>
          </div>
        </>
      )}
    </section>
  );
};

export default CTA;
