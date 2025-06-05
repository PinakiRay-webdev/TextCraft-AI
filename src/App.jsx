import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Summary from "./Pages/Summary/Summary";
const App = () => {
  const myRouters = createBrowserRouter([
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
  ]);

  return <RouterProvider router={myRouters} />;
};

export default App;
