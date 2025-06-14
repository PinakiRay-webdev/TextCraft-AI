import bg from "../../assets/auth-bg.jpg";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { useForm } from "react-hook-form";
import google from "../../assets/google.svg";
import { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { firebaseAuth } from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const togglePassView = () => {
    setIsVisible(!isVisible);
  };

  //signin with google
  const provider = new GoogleAuthProvider();
  const googleSignin = async () => {
    toast.loading("signing with google", { theme: "dark" });
    await signInWithPopup(firebaseAuth, provider)
      .then((result) => {
        const user = result.user;
        localStorage.setItem(
          "userCredentials",
          JSON.stringify({
            userEmail: user.email,
            photoUrl: user.photoURL,
          })
        );
        toast.dismiss();
        toast.success("Authenticated✅", { theme: "dark" });
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        toast.dismiss();
        toast.error(error.message, { theme: "dark" });
      });
  };

  //signup with email and password
  const signup = async (data) => {
    toast.loading("Registering your accound...", { theme: "dark" });
    try {
      createUserWithEmailAndPassword(firebaseAuth, data.email, data.password)
        .then((credentials) => {
          const user = credentials.user;
          localStorage.setItem(
            "userCredentials",
            JSON.stringify({
              userEmail: user.email,
            })
          );
          toast.dismiss();
          toast.success("Account registered✅", { theme: "dark" });
          setTimeout(() => {
            navigate("/");
          }, 1500);
        })
        .catch((error) => {
          toast.dismiss();
          toast.error(error.message, { theme: "dark" });
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
        <article className="min-w-[25rem] w-[50%] mx-auto">
          <header className="cursor-pointer" onClick={() => navigate("/")}>
            <p> 🏡 Back to webpage</p>
          </header>
          <div className="mt-8 mx-2">
            <h2 className="text-4xl md:text-5xl font-bold">
              Create Your Free Account
            </h2>
            <p className="mt-2 text-gray-700">
              Join{" "}
              <span className="font-semibold text-purple-700">TextCraft</span>{" "}
              to unlock AI-powered summaries, notes, and quizzes.
              <br />
              Already have an account?{" "}
              <span
                className="font-semibold underline cursor-pointer text-purple-700"
                onClick={() => navigate("/signin")}
              >
                Log in here
              </span>
              .
            </p>
          </div>
          {/* sign up form  */}
          <form onSubmit={handleSubmit(signup)} className="mt-8 mx-2">
            {/* first and last name  */}
            <div className="flex gap-2">
              <fieldset
                className={`border-2 px-3 py-1 rounded-lg w-full ${
                  errors.firstname && "border-red-500"
                }`}
              >
                <legend
                  className={`px-2 font-semibold ${
                    errors.firstname && "text-red-500"
                  }`}
                >
                  {" "}
                  {errors.firstname
                    ? errors.firstname.message
                    : "First name"}{" "}
                </legend>
                <input
                  {...register("firstname", {
                    required: {
                      value: true,
                      message: "This is required",
                    },
                  })}
                  type="text"
                  placeholder="Enter your email address"
                  className={`outline-none w-full px-2 py-1`}
                />
              </fieldset>

              {/* last name  */}
              <fieldset
                className={`border-2 px-3 py-1 rounded-lg w-full ${
                  errors.lastname && "border-red-500"
                }`}
              >
                <legend
                  className={`px-2 font-semibold ${
                    errors.lastname && "text-red-500"
                  }`}
                >
                  {errors.lastname ? errors.lastname.message : "Last name"}
                </legend>
                <input
                  {...register("lastname", {
                    required: {
                      value: true,
                      message: "This is required",
                    },
                  })}
                  type="text"
                  placeholder="Enter your email address"
                  className={`outline-none w-full px-2 py-1`}
                />
              </fieldset>
            </div>

            {/* email id  */}
            <fieldset
              className={`border-2 px-3 py-1 rounded-lg mt-4 ${
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
            {/* password  */}
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
            <button className="bg-black text-white w-full py-3 rounded-lg mt-6 cursor-pointer">
              Sign up
            </button>
          </form>
          {/* social media authentication  */}
          <div
            onClick={googleSignin}
            className="ring-1 mx-2 cursor-pointer ring-black flex items-center justify-center gap-3 py-2 rounded-lg mt-4"
          >
            <img className="w-7" src={google} alt="" />
            <p className="text-lg font-semibold">continue with google</p>
          </div>
        </article>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Signup;
