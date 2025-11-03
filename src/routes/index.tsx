// src/routes/index.tsx
import { Route, Routes } from "react-router-dom";
// import React from "react";

import MainLayout from "../components/layout/MainLayout";
import {
  HomePage,
  AboutPage,
  ServicesLandingPage,
  ServiceInfraPage,
  ServiceRealEstatePage,
  ServiceWaterPage,
  ServiceInteriorsPage,
  ServiceUrbanTechPage,
  ProjectsPage,
  ProjectDetailPage,
  CareersPage,
  ContactPage,
} from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      {/* MainLayout is the parent route */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services/all-services" element={<ServicesLandingPage />} />
        <Route path="services/infrastructure" element={<ServiceInfraPage />} />
        <Route
          path="services/real-estate"
          element={<ServiceRealEstatePage />}
        />
        <Route path="services/water" element={<ServiceWaterPage />} />
        <Route path="services/interiors" element={<ServiceInteriorsPage />} />
        <Route path="services/urban-tech" element={<ServiceUrbanTechPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:slug" element={<ProjectDetailPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
