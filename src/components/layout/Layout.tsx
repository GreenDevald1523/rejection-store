import { FC } from "react"; // Импорт типа FC для функционального компонента
import classes from "./Layout.module.scss"; // Импорт CSS-модуля
import { Footer, Header } from "@/components"; // Импорт компонентов Header и Footer
import bgImage from "@/assets/logo.png"; // Импорт фонового изображения

type Props = {
  // Интерфейс для props компонента
  children?: React.ReactNode; // Дочерние элементы компонента
};

export const Layout: FC<Props> = ({ children }) => {
  // Функциональный компонент Layout
  return (
    <div className={classes.layout}>
      {/* Основной контейнер Layout */}
      <Header /> {/* Компонент Header */}
      <div className={classes.container}>{children}</div>
      {/* Контейнер для основного контента */}
      <img className={classes["bg-image"]} src={bgImage} alt="bgImg" />
      {/* Фоновое изображение */}
      <Footer /> {/* Компонент Footer */}
    </div>
  );
};
