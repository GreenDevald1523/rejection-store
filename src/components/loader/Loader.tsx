import classes from "./Loader.module.scss"; // Импорт CSS-классов

export const Loader = () => {
  // Функциональный компонент Loader
  return <div className={classes.loader}></div>; // Отображение элемента div с классом loader
};
