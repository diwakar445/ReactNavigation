import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import { Github, githubInfoLoader } from "./components/Github/Github.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";
import Login from "./components/Login/Login.jsx";
import Profile from "./components/Profile/Profile.jsx";

// const router = createBrowserRouter(
//   [{
//     path:'/',
//     element: <Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }]
// )
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContextProvider>
    <RouterProvider router={router} />
  </UserContextProvider>
);
