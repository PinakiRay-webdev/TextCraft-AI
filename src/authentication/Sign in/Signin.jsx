import bg from "../../assets/auth-bg.jpg";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { useForm } from "react-hook-form";
import google from "../../assets/google.svg";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [isVisible, setIsVisible] = useState(false);

  const togglePassView = () => {
    setIsVisible(!isVisible);
  };

  const signin = async (data) => {
    toast.loading("singing you in a sec...", { theme: "dark" });
    try {
      await new Promise((resolve) => {
        setInterval(() => {
          resolve();
        }, 1500);
      }).then(() => {
        toast.dismiss();
        toast.success("signin completed!!", { theme: "dark" });
        reset()
      });
    } catch (error) {
      toast.dismiss();
      toast.error("failed to submit", { theme: "dark" });
    }
  };

  return (
    <section className="flex h-screen">
      <div id="bg" className="w-[35vw]">
        <img
          className="w-full h-full object-cover"
          src={bg}
          alt="authentication image"
        />
      </div>
      <div id="signin-form" className="flex-1 flex items-center">
        <article className="min-w-[25rem] w-[40%] mx-auto">
          <header>
            <p>Back to webpage</p>
          </header>
          <div className="mt-8">
            <h2 className="text-5xl font-semibold">Welcome!!</h2>
            <p className="mt-2">
              <span className="font-semibold underline cursor-pointer">
                Create a free account
              </span>{" "}
              or login to get started with Textcraft
            </p>
          </div>
          {/* sign in form  */}
          <form onSubmit={handleSubmit(signin)} className="mt-8">
            <fieldset
              className={`border-2 px-3 py-1 rounded-lg ${
                errors.email && "border-red-500"
              }`}
            >
              <legend
                className={`px-2 font-semibold ${
                  errors.email && "text-red-500"
                }`}
              >
                {" "}
                {errors.email ? errors.email.message : "Email"}{" "}
              </legend>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                })}
                type="email"
                placeholder="Enter your email address"
                className={`outline-none w-full px-2 py-1`}
              />
            </fieldset>
            <fieldset
              className={`border-2 px-3 py-1 rounded-lg mt-4 ${
                errors.password && "border-red-500"
              }`}
            >
              <legend
                className={`px-2 font-semibold ${
                  errors.password && "text-red-500"
                }`}
              >
                {errors.password ? errors.password.message : "Password"}
              </legend>
              <div className="flex items-center">
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password is required",
                    },
                  })}
                  type={isVisible ? "text" : "password"}
                  placeholder="Enter your password"
                  className={`outline-none w-full px-2 py-1`}
                />
                <p onClick={togglePassView} className="cursor-pointer text-xl">
                  {isVisible ? <VscEye /> : <VscEyeClosed />}
                </p>
              </div>
            </fieldset>
            <p className="font-semibold text-sm mt-2 text-right underline cursor-pointer">
              Forgot password?
            </p>
            <button className="bg-black text-white w-full py-3 rounded-lg mt-6 cursor-pointer">
              Sign in
            </button>
          </form>
          {/* social media authentication  */}
          <div className="ring-1 cursor-pointer ring-black flex items-center justify-center gap-3 py-2 rounded-lg mt-4">
            <img className="w-7" src={google} alt="" />
            <p className="text-lg font-semibold">continue with google</p>
          </div>
        </article>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Signin;
