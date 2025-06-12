import { HiOutlineSparkles, HiMenu, HiX } from "react-icons/hi";
import { navItems } from "../../../utils/utils";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../../firebase/firebaseConfig";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [userCrdentials, setUserCrdentials] = useState(() =>
    JSON.parse(localStorage.getItem("userCredentials"))
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorage = () => {
      setUserCrdentials(JSON.parse(localStorage.getItem("userCredentials")));
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const signout = () => {
    toast.loading("signing you out...", { theme: "dark" });
    signOut(firebaseAuth)
      .then(() => {
        localStorage.clear();
        setUserCrdentials(null);
        toast.dismiss();
        toast.success("signed out✅", { theme: "dark" });
      })
      .catch((error) => {
        toast.dismiss();
        toast.error(error.message, { theme: "dark" });
      });
  };

  const handleClick = (item) => {
    if (item === "Quiz") {
      navigate("/quiz");
    }
    setMenuOpen(false);
  };

const isScrollTarget = (item) => {
  const scrollSections = ["Tools", "Features", "Pricing"];
  return scrollSections.includes(item);
};

  return (
    <>
      <ToastContainer />
      <nav className="px-4 sm:px-8 py-2 flex justify-between items-center bg-white relative z-20">
        <h1
          className="flex items-center text-2xl font-semibold gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <HiOutlineSparkles />
          TextCraft
        </h1>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex gap-9">
          {navItems.map((item, id) =>
            isScrollTarget(item) ? (
              <ScrollLink
                key={id}
                to={item.toLowerCase()}
                smooth={true}
                offset={-80}
                duration={500}
                className="font-semibold cursor-pointer hover:text-pink-500 transition"
              >
                {item}
              </ScrollLink>
            ) : (
              <p
                key={id}
                onClick={() => handleClick(item)}
                className="font-semibold cursor-pointer hover:text-pink-500 transition"
              >
                {item}
              </p>
            )
          )}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-2">
          {!userCrdentials ? (
            <>
              <button
                onClick={() => navigate("/signin")}
                className="border-2 border-pink-400 px-6 py-1 rounded"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="border-2 border-pink-400 rounded bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-1 text-white cursor-pointer font-semibold"
              >
                Get started
              </button>
            </>
          ) : (
            <div className="flex gap-2 items-center">
              {userCrdentials.photoUrl ? (
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src={userCrdentials.photoUrl}
                  alt="profile"
                />
              ) : (
                <p className="bg-purple-700 py-2 w-10 text-center rounded-full text-white">
                  {`${userCrdentials.userEmail}`.split("")[0].toUpperCase()}
                </p>
              )}
              <div>
                <p className="text-sm font-semibold">
                  {userCrdentials.userEmail}
                </p>
                <p
                  onClick={signout}
                  className="text-sm font-semibold text-red-500 cursor-pointer"
                >
                  Sign out
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-white px-6 py-4 gap-3 shadow z-10">
          {navItems.map((item, id) =>
            isScrollTarget(item) ? (
              <ScrollLink
                key={id}
                to={item.toLowerCase()}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="font-semibold cursor-pointer"
              >
                {item}
              </ScrollLink>
            ) : (
              <p
                key={id}
                onClick={() => handleClick(item)}
                className="font-semibold cursor-pointer"
              >
                {item}
              </p>
            )
          )}

          {!userCrdentials ? (
            <>
              <button
                onClick={() => {
                  navigate("/signin");
                  setMenuOpen(false);
                }}
                className="border border-pink-400 px-4 py-1 rounded"
              >
                Login
              </button>
              <button
                onClick={() => {
                  navigate("/signup");
                  setMenuOpen(false);
                }}
                className="border border-pink-400 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 text-white font-semibold rounded"
              >
                Get started
              </button>
            </>
          ) : (
            <button
              onClick={signout}
              className="text-red-500 font-semibold"
            >
              Sign out
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
