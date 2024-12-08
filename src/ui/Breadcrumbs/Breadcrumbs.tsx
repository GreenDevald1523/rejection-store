import { useLocation } from "react-router-dom"; // Импорт хука для получения информации о местоположении
import classes from "./Breadcrumbs.module.scss"; // Импорт CSS-модуля
import { translateUrl } from "@/utils/translateUrl"; // Импорт функции для перевода URL

export const Breadcrumbs = () => {
  // Функциональный компонент для отображения хлебных крошек
  const { pathname } = useLocation(); // Получение пути из текущего местоположения

  const breadcrumbsHistory = [
    // Создание массива данных для хлебных крошек
    { title: "Главная", href: "/" }, // Первый элемент - главная страница
    ...pathname
      .split("/") // Разделение пути на части
      .filter((el) => el.length > 0) // Фильтрация пустых элементов
      .map((el, index, arr) => {
        // Преобразование массива частей пути в массив объектов для хлебных крошек
        const path = arr.reduce(
          // Создание пути для каждого элемента
          (accumulator, currentValue, currentIndex) =>
            accumulator + (index + 1 > currentIndex ? "/" + currentValue : ""), // Добавление слэша только если это не последний элемент
          ""
        );
        return {
          title: translateUrl(el), // Перевод названия элемента
          href: `${window.location.origin}${path}`, // Создание полной ссылки
        };
      }),
  ];

  return (
    <div className={classes.breadcrumbs}>
      {/* Контейнер для хлебных крошек */}
      {breadcrumbsHistory.map(
        (
          el,
          index // Итерация по массиву данных
        ) => (
          <div key={index}>
            {/* Контейнер для каждого элемента */}
            <a href={el.href}>{el.title}</a> {/* Ссылка на страницу */}
            {index + 1 < breadcrumbsHistory.length && <span> / </span>}
            {/* Разделитель "/" */}
          </div>
        )
      )}
    </div>
  );
};
