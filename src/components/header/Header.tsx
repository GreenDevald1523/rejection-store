import { LINKS } from "@/constants"; // Импорт массива ссылок из файла констант
import classes from "./Header.module.scss"; // Импорт CSS-классов из файла модуля
import logo from "@/assets/logo.png"; // Импорт изображения логотипа

export const Header = () => {
  // Функциональный компонент для header
  return (
    <div className={classes.header}>
      {/* Основной div компонента */}
      <a href="/">
        {/* Ссылка на главную страницу */}
        <img className={classes.logo} src={logo} alt="logo" /> {/* Логотип */}
      </a>
      <nav className={classes.navigation}>
        {/* Навигационное меню */}
        {LINKS.map(
          (
            link,
            index // Цикл для отображения ссылок из массива LINKS
          ) => (
            <a key={index} className={classes.link} href={link.href}>
              {/* Ссылка */}
              {link.title} {/* Текст ссылки */}
            </a>
          )
        )}
      </nav>
    </div>
  );
};
