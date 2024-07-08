import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./assets/scss/style.scss";
import ErrorPage from "./screens/ErrorPage.jsx";
import App from "./App.jsx";
import HomeScreen from "./screens/HomeScreen.jsx";
import AboutUsScreen from "./screens/AboutUsScreen.jsx";
import ContactUsScreen from "./screens/ContactUsScreen.jsx";
import BlogScreen from "./screens/BlogScreen.jsx";
import BlogDetailScreen from "./screens/BlogDetailScreen.jsx";
import FaqsScreen from "./screens/FaqsScreen.jsx";
import ComingSoonScreen from "./screens/ComingSoonScreen.jsx";
import TermsAndConditionsScreen from "./screens/TermsAndConditionsScreen.jsx";
import JobGridScreen from "./screens/JobGridScreen.jsx";
import JobListingScreen from "./screens/JobListingScreen.jsx";
import JobDetailScreen from "./screens/JobDetailScreen.jsx";
import CandidateDetailScreen from "./screens/CandidateDetailScreen.jsx";
import PostAJobScreen from "./screens/PostAJobScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import CandidateDashboardLayout from "./screens/CandidateDashboardLayout.jsx";
import CandidateDashboardScreen from "./screens/CandidateDashboardScreen.jsx";
import CandidateDashboardMyProfileScreen from "./screens/CandidateDashboardMyProfileScreen.jsx";
import CandidateDashboardChangePasswordScreen from "./screens/CandidateDashboardChangePasswordScreen.jsx";
import CandidateDashboardMyResumeScreen from "./screens/CandidateDashboardMyResumeScreen.jsx";
import CandidateDashboardManageJobsScreen from "./screens/CandidateDashboardManageJobsScreen.jsx";
import CandidateDashboardSavedJobsScreen from "./screens/CandidateDashboardSavedJobsScreen.jsx";
import CandidateDashboardPricingPlanScreen from "./screens/CandidateDashboardPricingPlanScreen.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <HomeScreen /> },
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
          {
            path: "/terms-and-conditions",
            element: <TermsAndConditionsScreen />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/job-grid",
            element: <JobGridScreen />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/job-listing",
            element: <JobListingScreen />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/job-detail",
            element: <JobDetailScreen />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/candidate-detail",
            element: <CandidateDetailScreen />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/post-a-job",
            element: <PostAJobScreen />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/login",
            element: <LoginScreen />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/register",
            element: <RegisterScreen />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/dashboard-candidates",
            element: <CandidateDashboardLayout />,
            errorElement: <ErrorPage />,
            children: [
              { index: true, element: <CandidateDashboardScreen /> },
              {
                path: "my-profile",
                element: <CandidateDashboardMyProfileScreen />,
                errorElement: <ErrorPage />,
              },
              {
                path: "change-password",
                element: <CandidateDashboardChangePasswordScreen />,
                errorElement: <ErrorPage />,
              },
              {
                path: "my-resume",
                element: <CandidateDashboardMyResumeScreen />,
                errorElement: <ErrorPage />,
              },
              {
                path: "manage-jobs",
                element: <CandidateDashboardManageJobsScreen />,
                errorElement: <ErrorPage />,
              },
              {
                path: "saved-jobs",
                element: <CandidateDashboardSavedJobsScreen />,
                errorElement: <ErrorPage />,
              },
              {
                path: "pricing",
                element: <CandidateDashboardPricingPlanScreen />,
                errorElement: <ErrorPage />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/coming-soon",
    element: <ComingSoonScreen />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
