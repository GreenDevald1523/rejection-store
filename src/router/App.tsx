import { BrowserRouter, Routes, Route } from "react-router-dom"; // Импорт необходимых компонентов для работы с маршрутизацией
import { lazy } from "react"; // Импорт функции lazy для ленивой загрузки компонентов
import { Layout } from "@/components"; // Импорт компонента Layout (вероятно, это шаблон страницы)
import { ROUTES_PATHS } from "@/constants"; // Импорт констант с путями маршрутов

// Ленивая загрузка компонентов страниц.  Это улучшает производительность, загружая компоненты только по мере необходимости.
const HomePage = lazy(() => import("@/pages/HomePage/Home"));
const CategoriesPage = lazy(() => import("@/pages/CategoriesPage/Categories"));
const AboutPage = lazy(() => import("@/pages/AboutPage/About"));
const ProductsPage = lazy(() => import("@/pages/ProductsPage/Products"));
const ProductPage = lazy(() => import("@/pages/ProductPage/Product"));
const ErrorPage = lazy(() => import("@/pages/Error"));

function App() {
  return (
    <Layout>
      {/* Оборачиваем все содержимое в компонент Layout */}
      <BrowserRouter basename="/">
        {/* BrowserRouter для маршрутизации, basename="/" указывает на корневой путь */}
        <Routes>
          {/* Routes для определения маршрутов */}
          <Route path="*" element={<ErrorPage />} />
          {/* Маршрут по умолчанию, отображает страницу ошибки 404 */}
          <Route path={ROUTES_PATHS.home} element={<HomePage />} />
          {/* Маршрут на главную страницу */}
          <Route path={ROUTES_PATHS.categories} element={<CategoriesPage />} />
          {/* Маршрут на страницу категорий */}
          <Route path={ROUTES_PATHS.about_us} element={<AboutPage />} />
          {/* Маршрут на страницу "О нас" */}
          <Route path={ROUTES_PATHS.products} element={<ProductsPage />} />
          {/* Маршрут на страницу продуктов */}
          <Route path={ROUTES_PATHS.product} element={<ProductPage />} />
          {/* Маршрут на страницу отдельного продукта */}
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App; // Экспорт компонента App
