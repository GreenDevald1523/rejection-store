import { FC } from "react";
import classes from "./CategoryItem.module.scss";
import { ICategory } from "@/types/categories";
import { translateUrl } from "@/utils/translateUrl";

export const CategoryItem: FC<ICategory> = (props) => {
  return (
    <a href={`/categories/${props.name}`}>
      <div className={classes.category_item}>
        <div className={classes.dark_bg} />
        <img
          className={classes.category_item__image}
          src={props.image}
          alt="product"
        />
        <h3 className={classes.category_item__label}>
          {translateUrl(props.name)}
        </h3>
      </div>
    </a>
  );
};
