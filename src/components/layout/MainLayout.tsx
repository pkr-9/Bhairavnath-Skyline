// src/components/MainLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SuspenseFallback = () => (
  <div
    className="flex min-h-screen w-full items-center justify-center 
               bg-white p-4
               dark:bg-gray-950"
  >
    <span className="text-lg font-medium text-gray-900 dark:text-white">
      Loading Page...
    </span>
  </div>
);

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <main>
        <React.Suspense fallback={<SuspenseFallback />}>
          <Outlet />
        </React.Suspense>
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
