// src/pages/index.ts
import React from "react";

export const HomePage = React.lazy(() => import("./HomePage"));
export const AboutPage = React.lazy(() => import("./AboutPage"));
export const ServicesLandingPage = React.lazy(() => import("./ServicesLandingPage"));
export const ServiceInfraPage = React.lazy(() => import("./ServiceInfraPage"));
export const ServiceRealEstatePage = React.lazy(() => import("./ServiceRealEstatePage"));
export const ServiceWaterPage = React.lazy(() => import("./ServiceWaterPage"));
export const ServiceInteriorsPage = React.lazy(() => import("./ServiceInteriorsPage"));
export const ServiceUrbanTechPage = React.lazy(() => import("./ServiceUrbanTechPage"));
export const ProjectsPage = React.lazy(() => import("./ProjectsPage"));
export const ProjectDetailPage = React.lazy(() => import("./ProjectDetailPage"));
export const CareersPage = React.lazy(() => import("./CareersPage"));
export const ContactPage = React.lazy(() => import("./ContactPage"));