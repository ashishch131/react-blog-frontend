import Home from "./pages/home/Home";
import Singlepage from "./pages/singlepage/Singlepage";
import "./app.css";
import Navbar from "./components/navbar/Navbar";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SideBar from "./components/sidebar/SideBar";
import { useContext } from "react";
import { Context } from "./context/Context";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";



function App() {
  const { user } = useContext(Context);
  const Layout = () => {
    return (
      <div className="app">
        
        <Navbar />
        <Outlet />
    
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: user? <Home /> : <Login/>,
        },
   
        {
          path: "/setting",
          element: <Setting />,
        },
        {
          path: "/post/:postId",
          element: <Singlepage />,
        },
        {
          path: "/write",
          element: user? <Write /> : <Login/>,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: < Login />,
        },
        {
          path: "/about",
          element: < About/>,
        },
        {
          path: "/contact",
          element: < Contact/>,
        },
      ],
    },

 

  ]);
  return (
  
      <RouterProvider router={router} />
  
  );
}

export default App;
