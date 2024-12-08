import { Breadcrumbs, Title } from "@/ui"; // Импорт компонентов для хлебных крошек и заголовка
import { useParams } from "react-router-dom"; // Импорт хука для получения параметров маршрута
import classes from "./Product.module.scss"; // Импорт стилей компонента
import { useState } from "react"; // Импорт хука для управления состоянием
import { useFetch } from "@/hooks/useFetch"; // Импорт кастомного хука для выполнения fetch-запроса
import { IProduct } from "@/types/products"; // Импорт типа данных для продукта
import { Loader, ErrorPlaceholder } from "@/components"; // Импорт компонентов для индикатора загрузки и сообщения об ошибке
import { CONTACT_LINK } from "@/constants"; // Импорт константы для ссылки на контактную информацию

export default function Product() {
  // Функциональный компонент для отображения информации о продукте
  const { categoryName, productId } = useParams(); // Извлечение параметров из URL
  const { data, isLoading, error } = useFetch(
    `products?category=${categoryName}&id=${productId}` // Формирование URL запроса для получения данных о продукте
  );

  const productData: IProduct = ((data || []) as IProduct[])[0]; // Извлечение данных о продукте из массива данных.  Обработка случая, когда data может быть null или undefined.

  const [shownImg, setShownImg] = useState<string>(productData?.images[0]); // Состояние для отслеживания отображаемого изображения

  // Условная отрисовка в зависимости от состояния запроса
  if (isLoading) return <Loader />; // Отображение индикатора загрузки
  if (error || data.length === 0) return <ErrorPlaceholder />; // Отображение сообщения об ошибке

  return (
    <>
      <Breadcrumbs /> {/* Компонент хлебных крошек */}
      <div className={classes.product}>
        {/* Основной контейнер компонента */}
        <div className={classes.product_images}>
          {/* Контейнер для изображений */}
          <img // Основное изображение продукта
            src={shownImg || productData?.images[0]}
            alt="product image"
            style={{ height: productData?.images.length === 1 ? "100%" : 500 }} // Адаптивная высота изображения
          />
          <div className={classes.product_images__others}>
            {/* Контейнер для дополнительных изображений */}
            {productData?.images.length > 1 && // Проверка на наличие дополнительных изображений
              productData?.images.map(
                (
                  img // Маппинг массива дополнительных изображений
                ) => (
                  <img
                    src={img}
                    alt="product other image"
                    onClick={() => setShownImg(img)} // Обработчик клика для смены основного изображения
                  />
                )
              )}
          </div>
        </div>
        <div className={classes.product_info}>
          {/* Контейнер для информации о продукте */}
          <div>
            {/* Контейнер для названия и описания */}
            <Title>{productData?.name}</Title>
            {/* Заголовок с названием продукта */}
            <div className={classes.product_description}>Описание:</div>
            {/* Подпись для описания */}
            {productData?.description.map(
              (
                text // Маппинг массива описания
              ) => (
                <p>{text}</p> // Вывод каждого пункта описания
              )
            )}
          </div>
          <div className={classes.product_info__order}>
            {/* Контейнер для информации о заказе */}
            <span>
              Цена: <strong>₽{productData?.price}</strong> {/* Цена продукта */}
            </span>
            <a href={CONTACT_LINK} target="_blank">
              {/* Ссылка для заказа */}
              <button>Заказать</button>
              {/* Кнопка для перехода на страницу заказа */}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
