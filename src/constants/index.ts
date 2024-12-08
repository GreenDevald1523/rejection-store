export const LINKS = [
  // Массив ссылок для навигации
  {
    href: "/", // Путь к главной странице
    title: "Главная", // Текст ссылки
  },
  {
    href: "/categories", // Путь к странице категорий
    title: "Категории", // Текст ссылки
  },
  {
    href: "/about", // Путь к странице "О нас"
    title: "О нас", // Текст ссылки
  },
];

export const ROUTES_PATHS = {
  // Объект с путями маршрутов
  home: "/", // Путь к главной странице
  categories: "/categories", // Путь к странице категорий
  products: "/categories/:categoryName", // Путь к странице продуктов с параметром категории
  product: "/categories/:categoryName/:productId", // Путь к странице товара с параметрами категории и ID
  about_us: "/about", // Путь к странице "О нас"
};

export const API_URL = "http://localhost:8000/"; // Базовый URL для API

export const CONTACT_LINK = "https://vk.com/im?media=&sel=-190823498"; // Ссылка для контактов
