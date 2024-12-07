import { ReactNode } from "react";
import classes from "./Title.module.scss";

export const Title = ({
  children,
  centered = false,
}: {
  children: ReactNode;
  centered?: boolean;
}) => {
  return (
    <h1 className={`${classes.title} ${centered ? classes.centered : ""}`}>
      {children}
    </h1>
  );
};
