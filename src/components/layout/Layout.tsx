import { FC } from "react";
import classes from "./Layout.module.scss";
import { Footer, Header } from "@/components";
import bgImage from "@/assets/logo.png";

type Props = {
  children?: React.ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={classes.layout}>
      <Header />
      <div className={classes.container}>{children}</div>
      <img className={classes["bg-image"]} src={bgImage} alt="bgImg" />
      <Footer />
    </div>
  );
};
