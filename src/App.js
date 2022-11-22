import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/meist" element={<AboutPage />} />
      <Route path="/blogi" element={<BlogPage />} />
      {/* <Route path="/pood" element={<FavoritesPage />} /> */}
      <Route path="/ostukorv" element={<CheckoutPage />} />
    </Routes>
  );
}

export default App;
