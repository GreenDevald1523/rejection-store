import { FC } from "react";
import classes from "./ProductItem.module.scss";
import { IProduct } from "@/types/products";
import { useLocation } from "react-router-dom";

export const ProductItem: FC<IProduct> = (props) => {
  const { pathname } = useLocation();
  return (
    <a href={pathname + "/" + props.id}>
      <div className={classes.product_item}>
        <img
          className={classes.product_item__image}
          src={props.images[0]}
          alt="product"
        />
        <div className={classes.product_item__info}>
          <h3 className={classes.product_item__label}>{props.name}</h3>
          <p>Цена: ₽{props.price}</p>
        </div>
      </div>
    </a>
  );
};
