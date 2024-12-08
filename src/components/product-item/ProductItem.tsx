import { FC } from "react"; // Импорт типа для функционального компонента
import classes from "./ProductItem.module.scss"; // Импорт CSS-классов
import { IProduct } from "@/types/products"; // Импорт интерфейса для данных продукта
import { useLocation } from "react-router-dom"; // Импорт хука для получения информации о местоположении

export const ProductItem: FC<IProduct> = (props) => {
  // Функциональный компонент для отображения товара
  const { pathname } = useLocation(); // Получение текущего пути
  return (
    <a href={`${pathname}/${props.id}`}>
      {/* Ссылка на страницу товара */}
      <div className={classes.product_item}>
        {/* Контейнер для товара */}
        <img // Изображение товара
          className={classes.product_item__image}
          src={props.images[0]} // Первое изображение из массива
          alt="product"
        />
        <div className={classes.product_item__info}>
          {/* Контейнер для информации о товаре */}
          <h3 className={classes.product_item__label}>{props.name}</h3>
          {/* Название товара */}
          <p>Цена: ₽{props.price}</p> {/* Цена товара */}
        </div>
      </div>
    </a>
  );
};
