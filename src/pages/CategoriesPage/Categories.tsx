import { Breadcrumbs, Title } from "@/ui"; // Импорт компонентов Breadcrumbs и Title из папки ui
import classes from "./Categories.module.scss"; // Импорт стилей модуля
import { CategoryItem, ErrorPlaceholder, Loader } from "@/components"; // Импорт компонентов для отображения элементов категории, сообщения об ошибке и индикатора загрузки
import { useFetch } from "@/hooks/useFetch"; // Импорт кастомного хука для выполнения fetch-запроса
import { ICategory } from "@/types/categories"; // Импорт типа данных для категории

export default function Categories() {
  // Функциональный компонент для отображения списка категорий
  const { data, isLoading, error } = useFetch("categories"); // Вызов кастомного хука для получения данных о категориях.  "categories" вероятно, это endpoint API.

  const categoriesData: ICategory[] = data; // Приведение данных к типу ICategory

  // Условная отрисовка в зависимости от состояния запроса
  if (isLoading) return <Loader />; // Отображение индикатора загрузки, пока данные загружаются
  if (error || data.length === 0) return <ErrorPlaceholder />; // Отображение сообщения об ошибке или пустого плейсхолдера, если данные не были получены или пустые

  return (
    <div className={classes.categories}>
      {/* Основной контейнер */}
      <Title centered>Категории продукции</Title>
      {/* Заголовок, выровненный по центру */}
      <Breadcrumbs /> {/* Компонент хлебных крошек */}
      <div className={classes.categories_list}>
        {/* Контейнер для списка категорий */}
        {categoriesData && // Проверка на существование данных
          categoriesData.map(
            (
              category // Маппинг массива категорий
            ) => (
              <CategoryItem key={category.id} {...category} /> // Рендеринг каждого элемента категории с использованием CategoryItem компонента
            )
          )}
      </div>
    </div>
  );
}
