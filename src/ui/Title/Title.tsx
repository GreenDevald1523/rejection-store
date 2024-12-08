import { ReactNode } from "react"; // Импорт типа ReactNode для обозначения того, что children может быть любым узлом React
import classes from "./Title.module.scss"; // Импорт CSS-модуля для стилей

export const Title = ({
  // Функциональный компонент для отображения заголовка
  children, // JSX-контент заголовка
  centered = false, // Флаг для центрирования заголовка, по умолчанию false
}: {
  children: ReactNode; // Тип children - любой узел React
  centered?: boolean; // Тип centered - булево значение, опциональное
}) => {
  return (
    <h1 // Элемент h1 для заголовка
      className={`${classes.title} ${centered ? classes.centered : ""}`} // Добавление CSS-классов в зависимости от значения centered
    >
      {children} {/* Отображение JSX-контента */}
    </h1>
  );
};
