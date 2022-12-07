import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import Layout from "./components/layout/Layout";
import PersonalityTraitsPage from "./pages/PersonalityTraitsPage";
import PersonalityTestPage from "./pages/personalityTestPage";
import ScrollToTop from "./components/ScrollToTop";
import PersonalityResultsPage from "./pages/PersonalityTestResultsPage";

import { getCartItems } from "./features/cart/cartSlice";
import { getStorageItems } from "./features/storage/storageSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const { isLoading } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStorageItems());
    //dispatch(getCartItems());
  }, []);
  if (isLoading) {
    <h1>Loading...</h1>;
  }
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meist" element={<AboutPage />} />
        <Route path="/blogi" element={<BlogPage />} />
        <Route path="/ostukorv" element={<CheckoutPage />} />
        <Route path="/iseloomutest" element={<PersonalityTestPage />} />
        <Route path="/isikuomadused" element={<PersonalityTraitsPage />} />
        <Route path="/iseloomutulemused" element={<PersonalityResultsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
