import cta_asset from "../../../../assets/cta_asset.jpg";
import { useNavigate } from "react-router-dom";
const CTA = () => {

  const navigate = useNavigate();
  return (
    <section className="relative w-full mx-auto flex flex-col items-center text-center py-28 mt-[7rem] px-4">
      {/* Background Image Overlay */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover brightness-[50%] z-[-1]"
        src={cta_asset}
        alt="CTA Background"
      />

       <>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to bring your <span className="text-blue-400" >preparations</span> with us?
          </h2>
          <p className="text-lg text-gray-300 mt-3">
            You're all set — start creating stunning quizes with AI in seconds.
          </p>
          <button onClick={() => navigate('/quiz')} className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 mt-6 rounded-full text-white text-base font-semibold shadow-lg">
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
    </section>
  );
};

export default CTA;
