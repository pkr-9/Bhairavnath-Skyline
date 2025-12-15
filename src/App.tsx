// src/App.tsx

import AppRoutes from "./routes";
import ScrollToTop from "./components/layout/ScrollToTop";
import CookieBanner from "./components/ui/CookieBanner";

function App() {
  return (
    <>
      <ScrollToTop />
      <CookieBanner />
      <AppRoutes />
    </>
  );
}

export default App;
