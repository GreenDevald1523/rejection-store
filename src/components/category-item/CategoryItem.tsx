import { FC } from "react"; // Импорт типа FC для функционального компонента
import classes from "./CategoryItem.module.scss"; // Импорт CSS-модуля
import { ICategory } from "@/types/categories"; // Импорт типа данных для категории
import { translateUrl } from "@/utils/translateUrl"; // Импорт функции для перевода URL

export const CategoryItem: FC<ICategory> = (props) => {
  // Функциональный компонент для отображения элемента категории
  return (
    <a href={`/categories/${props.name}`}>
      {/* Ссылка на страницу категории */}
      <div className={classes.category_item}>
        {/* Контейнер для элемента категории */}
        <div className={classes.dark_bg} /> {/* Темный фон */}
        <img // Изображение категории
          className={classes.category_item__image}
          src={props.image}
          alt="product"
        />
        <h3 className={classes.category_item__label}>
          {/* Заголовок категории */}
          {translateUrl(props.name)} {/* Переведенное название категории */}
        </h3>
      </div>
    </a>
  );
};
