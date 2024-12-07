import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "@/components";
import { ROUTES_PATHS } from "@/constants";

const HomePage = lazy(() => import("@/pages/HomePage/Home"));
const CategoriesPage = lazy(() => import("@/pages/CategoriesPage/Categories"));
const AboutPage = lazy(() => import("@/pages/AboutPage/About"));
const ProductsPage = lazy(() => import("@/pages/ProductsPage/Products"));
const ProductPage = lazy(() => import("@/pages/ProductPage/Product"));
const ErrorPage = lazy(() => import("@/pages/Error"));

function App() {
  return (
    <Layout>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path={ROUTES_PATHS.home} element={<HomePage />} />
          <Route path={ROUTES_PATHS.categories} element={<CategoriesPage />} />
          <Route path={ROUTES_PATHS.about_us} element={<AboutPage />} />
          <Route path={ROUTES_PATHS.products} element={<ProductsPage />} />
          <Route path={ROUTES_PATHS.product} element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
