import { HiOutlineSparkles } from "react-icons/hi";
import { navItems } from "../../../../../utils/utils";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../../../../firebase/firebaseConfig";
import { toast , ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [userCrdentials, setUserCrdentials] = useState(() =>
    JSON.parse(localStorage.getItem("userCredentials"))
  );
  const navigate = useNavigate()

    useEffect(() => {
    const handleStorage = () => {
      setUserCrdentials(JSON.parse(localStorage.getItem("userCredentials")));
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const signout = () =>{
    toast.loading('signing you out...' , {theme : 'dark'})
    signOut(firebaseAuth).then(() =>{
      localStorage.clear()
      setUserCrdentials(null)
      toast.dismiss();
      toast.success('signed out✅' , {theme : 'dark'})
    }).catch((error) =>{
      toast.dismiss();
      toast.error(error.messaage , {theme : 'dark'})
    })
  }

  return (
    <div>
    <nav className="px-8 py-2 flex justify-between items-center">
      <h1 className="flex items-center text-2xl font-semibold">
        <HiOutlineSparkles />
        TextCraft
      </h1>

      <div className="flex gap-9">
        {navItems.map((items, id) => (
          <p key={id} className="font-semibold cursor-pointer">
            {items}
          </p>
        ))}
      </div>

      {!userCrdentials ? (
        <div className="flex gap-1 items-center">
          <button onClick={() => navigate('/signin')} className="border-2 border-pink-400 px-6 py-1 rounded">
            Login
          </button>
          <button onClick={() => navigate('/signup')} className="border-2 border-pink-400 rounded bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-1 text-white cursor-pointer font-semibold">
            Get started
          </button>
        </div>
      ) : (
        // user account 
        <div className="flex gap-2">
          {userCrdentials.photoUrl ? (
            <img className="h-10 rounded-full" src={userCrdentials.photoUrl} />
          ) : (
            <p className="bg-purple-700 py-2 w-10 text-center rounded-full text-white">{`${userCrdentials.userEmail}`.split('')[0].toUpperCase()}</p>
          )}
          <div>
            <p className="text-sm font-semibold">{userCrdentials.userEmail}</p>
            <p onClick={signout} className="text-sm font-semibold text-red-500 cursor-pointer">Sign out</p>
          </div>
        </div>
      )}
    </nav>
      <ToastContainer/>
    </div>
  );
};

export default Navbar;
