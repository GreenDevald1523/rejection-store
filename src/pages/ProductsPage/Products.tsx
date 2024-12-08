import { Breadcrumbs, Title } from "@/ui"; // Импорт компонентов для хлебных крошек и заголовка
import classes from "./Products.module.scss"; // Импорт CSS-модуля для стилей
import { ErrorPlaceholder, Loader, ProductItem } from "@/components"; // Импорт компонентов для обработки ошибок, загрузки и отображения товара
import { useParams } from "react-router-dom"; // Импорт хука для получения параметров маршрута
import { useFetch } from "@/hooks/useFetch"; // Импорт кастомного хука для выполнения fetch-запроса
import { IProduct } from "@/types/products"; // Импорт типа данных для продукта
import { translateUrl } from "@/utils/translateUrl"; // Импорт функции для перевода URL

export default function Products() {
  // Функциональный компонент для отображения списка продуктов
  const { categoryName } = useParams(); // Получение имени категории из параметров URL
  const { data, isLoading, error } = useFetch(
    // Вызов кастомного хука для получения данных о продуктах
    `products?category=${categoryName}` // Формирование URL для запроса к API
  );

  const productData: IProduct[] = data; // Приведение данных к типу IProduct[]

  // Условная отрисовка компонента в зависимости от состояния запроса
  if (isLoading) return <Loader />; // Отображение компонента загрузки
  if (error) return <ErrorPlaceholder />; // Отображение компонента ошибки

  return (
    <div className={classes.products}>
      {/* Контейнер для списка продуктов */}
      <Title centered>{translateUrl(categoryName || "")}</Title>
      {/* Заголовок, отображающий переведенное название категории */}
      <Breadcrumbs /> {/* Компонент хлебных крошек */}
      <div className={classes.products_list}>
        {/* Контейнер для списка элементов продуктов */}
        {productData && // Проверка на наличие данных
          productData.map(
            (
              product // Итерация по массиву продуктов
            ) => (
              <ProductItem key={product.id} {...product} /> // Рендеринг каждого продукта с использованием компонента ProductItem
            )
          )}
      </div>
    </div>
  );
}
