import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Summary from "./Pages/Summary/Summary";
import Signin from "./authentication/Sign in/Signin";
import Signup from "./authentication/Sign Up/SignUp";
import Quiz from "./Pages/Quiz/Quiz";
const App = () => {
  const myRouters = createBrowserRouter([
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/",
      element: (
        <>
          {" "}
          <Home /> <Footer />{" "}
        </>
      ),
    },
    {
      path: "/summary",
      element: (
        <>
          {" "}
          <Summary />{" "}
        </>
      ),
    },
        {
      path: "/quiz",
      element: (
        <>
          {" "}
          <Quiz />
        </>
      ),
    },
  ]);

  return <RouterProvider router={myRouters} />;
};

export default App;
