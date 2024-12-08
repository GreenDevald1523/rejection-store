import { LINKS } from "@/constants"; // Импорт массива ссылок из констант
import classes from "./Footer.module.scss"; // Импорт CSS-модуля
import logo from "@/assets/logo.png"; // Импорт изображения логотипа

export const Footer = () => {
  // Функциональный компонент для футера
  return (
    <div className={classes.footer}>
      {/* Контейнер футера */}
      <a href="/">
        {/* Ссылка на главную страницу */}
        <img className={classes.logo} src={logo} alt="logo" /> {/* Логотип */}
      </a>
      <nav className={classes.navigation}>
        {/* Контейнер для навигации */}
        {LINKS.map(
          (
            link,
            index // Итерация по массиву ссылок
          ) => (
            <a key={index} className={classes.link} href={link.href}>
              {/* Ссылка на страницу */}
              {link.title} {/* Текст ссылки */}
            </a>
          )
        )}
      </nav>
    </div>
  );
};
