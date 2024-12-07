import { Breadcrumbs, Title } from "@/ui";
import classes from "./Products.module.scss";
import { ErrorPlaceholder, Loader, ProductItem } from "@/components";
import { useParams } from "react-router-dom";
import { useFetch } from "@/hooks/useFetch";
import { IProduct } from "@/types/products";
import { translateUrl } from "@/utils/translateUrl";

export default function Products() {
  const { categoryName } = useParams();
  const { data, isLoading, error } = useFetch(
    `products?category=${categoryName}`
  );

  const productData: IProduct[] = data;

  if (isLoading) return <Loader />;
  if (error) return <ErrorPlaceholder />;

  return (
    <div className={classes.products}>
      <Title centered>{translateUrl(categoryName || "")}</Title>
      <Breadcrumbs />
      <div className={classes.products_list}>
        {productData &&
          productData.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
      </div>
    </div>
  );
}
