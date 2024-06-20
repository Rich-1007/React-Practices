import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Hamberger from "./Components/Hamberger";
// import Search from "./Components/Search";
import Sorting from "./Components/Sorting";
import Todo from "./Components/Todo/Todo";
import About from "./Components/React-Router-Dom/About";
import Navbar from "./Components/React-Router-Dom/Navbar";
import Home from "./Components/React-Router-Dom/Home";
import Contact from "./Components/React-Router-Dom/Contact";
import Footer from "./Components/React-Router-Dom/Footer";
import Layout from "./Components/React-Router-Dom/Layout";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/about",
        element: <About />
      },{
        path:"/contact",
        element: <Contact />
      }
    ],
  },
]);

function App() {
  return (
    <>
      {/* <Todo /> */}

      {/* <Navbar /> */}
      {/* <Footer /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
