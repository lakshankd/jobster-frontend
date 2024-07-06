import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./assets/scss/style.scss";
import ErrorPage from "./screens/ErrorPage.jsx";
import App from "./App.jsx";
import Root from "./routes/Root.jsx";
import AboutUsScreen from "./screens/AboutUsScreen.jsx";
import ContactUsScreen from "./screens/ContactUsScreen.jsx";
import BlogScreen from "./screens/BlogScreen.jsx";
import BlogDetailScreen from "./screens/BlogDetailScreen.jsx";
import FaqsScreen from "./screens/FaqsScreen.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <App /> },
          {
            path: "/404-error",
            element: <ErrorPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/about-us",
            element: <AboutUsScreen />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/contact-us",
            element: <ContactUsScreen />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/blog",
            element: <BlogScreen />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/blog-detail",
            element: <BlogDetailScreen />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/faqs",
            element: <FaqsScreen />,
            errorElement: <ErrorPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
