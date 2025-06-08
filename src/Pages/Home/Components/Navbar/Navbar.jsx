import { HiOutlineSparkles } from "react-icons/hi";
import { navItems } from "../../../../../utils/utils";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../../../../firebase/firebaseConfig";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

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

  const navigateToQuiz = (element) => {
    if (element === "Quiz") {
      navigate("/quiz");
      setMenuOpen(false);
    }
  };

  const handleNavClick = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <div>
      <nav className="px-4 sm:px-8 py-2 flex justify-between items-center bg-white relative z-20">
        <h1 className="flex items-center text-2xl font-semibold gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <HiOutlineSparkles />
          TextCraft
        </h1>

        <div className="hidden md:flex gap-9">
          {navItems.map((items, id) => (
            <p
              onClick={() => navigateToQuiz(items)}
              key={id}
              className="font-semibold cursor-pointer"
            >
              {items}
            </p>
          ))}
        </div>

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
                <p className="text-sm font-semibold">{userCrdentials.userEmail}</p>
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

        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {menuOpen && (
          <div className="fixed inset-0 bg-black/60 z-30 flex">
            <div className="bg-white w-4/5 max-w-xs h-full shadow-lg flex flex-col p-6 gap-6 animate-slide-in relative">
              <div className="flex justify-between items-center mb-4">
                <span className="flex items-center text-xl font-semibold gap-2">
                  <HiOutlineSparkles />
                  TextCraft
                </span>
                <button
                  className="text-2xl"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <HiX />
                </button>
              </div>
              <div className="flex flex-col gap-4 flex-1">
                {navItems.map((items, id) => (
                  <p
                    onClick={() => navigateToQuiz(items)}
                    key={id}
                    className="font-semibold cursor-pointer py-2"
                  >
                    {items}
                  </p>
                ))}
              </div>
              <div className="flex flex-col gap-3 mt-4 absolute bottom-6 left-0 w-full px-6">
                {!userCrdentials ? (
                  <>
                    <button
                      onClick={() => handleNavClick("/signin")}
                      className="border-2 border-pink-400 px-6 py-1 rounded"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => handleNavClick("/signup")}
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
                      <p className="text-sm font-semibold">{userCrdentials.userEmail}</p>
                      <p
                        onClick={() => {
                          signout();
                          setMenuOpen(false);
                        }}
                        className="text-sm font-semibold text-red-500 cursor-pointer"
                      >
                        Sign out
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div
              className="flex-1"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu overlay"
            />
          </div>
        )}
      </nav>
      <ToastContainer />
    </div>
  );
};

export default Navbar;