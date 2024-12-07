import { Breadcrumbs, Title } from "@/ui";
import classes from "./Categories.module.scss";
import { CategoryItem, ErrorPlaceholder, Loader } from "@/components";
import { useFetch } from "@/hooks/useFetch";
import { ICategory } from "@/types/categories";

export default function Categories() {
  const { data, isLoading, error } = useFetch("categories");

  const categoriesData: ICategory[] = data;

  if (isLoading) return <Loader />;
  if (error || data.length === 0) return <ErrorPlaceholder />;

  return (
    <div className={classes.categories}>
      <Title centered>Категории продукции</Title>
      <Breadcrumbs />
      <div className={classes.categories_list}>
        {categoriesData &&
          categoriesData.map((category) => (
            <CategoryItem key={category.id} {...category} />
          ))}
      </div>
    </div>
  );
}
