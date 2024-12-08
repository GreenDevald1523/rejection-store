import { Breadcrumbs, Title } from "@/ui";
import { useParams } from "react-router-dom";
import classes from "./Product.module.scss";
import { useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import { IProduct } from "@/types/products";
import { Loader, ErrorPlaceholder } from "@/components";
import { CONTACT_LINK } from "@/constants";

export default function Product() {
  const { categoryName, productId } = useParams();
  const { data, isLoading, error } = useFetch(
    `products?category=${categoryName}&id=${productId}`
  );

  const productData: IProduct = ((data || []) as IProduct[])[0];

  const [shownImg, setShownImg] = useState<string>(productData?.images[0]);

  if (isLoading) return <Loader />;
  if (error || data.length === 0) return <ErrorPlaceholder />;

  return (
    <>
      <Breadcrumbs />
      <div className={classes.product}>
        <div className={classes.product_images}>
          <img
            src={shownImg || productData?.images[0]}
            alt="product image"
            style={{ height: productData?.images.length === 1 ? "100%" : 500 }}
          />
          <div className={classes.product_images__others}>
            {productData?.images.length > 1 &&
              productData?.images.map((img) => (
                <img
                  src={img}
                  alt="product other image"
                  onClick={() => setShownImg(img)}
                />
              ))}
          </div>
        </div>
        <div className={classes.product_info}>
          <div>
            <Title>{productData?.name}</Title>
            <div className={classes.product_description}>Описание:</div>
            {productData?.description.map((text) => (
              <p>{text}</p>
            ))}
          </div>

          <div className={classes.product_info__order}>
            <span>
              Цена: <strong>₽{productData?.price}</strong>
            </span>
            <a href={CONTACT_LINK} target="_blank">
              <button>Заказать</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
