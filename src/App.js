import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import Layout from "./components/layout/Layout";
import PersonalityTestPage from "./pages/personalityTestPage";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meist" element={<AboutPage />} />
        <Route path="/blogi" element={<BlogPage />} />
        <Route path="/ostukorv" element={<CheckoutPage />} />
        <Route path="/iseloomutest" element={<PersonalityTestPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
