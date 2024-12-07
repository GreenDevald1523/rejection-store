import { useLocation } from "react-router-dom";
import classes from "./Breadcrumbs.module.scss";
import { translateUrl } from "@/utils/translateUrl";

export const Breadcrumbs = () => {
  const { pathname } = useLocation();

  const breadcrumbsHistory = [
    { title: "Главная", href: "/" },
    ...pathname
      .split("/")
      .filter((el) => el.length > 0)
      .map((el, index, arr) => {
        const path = arr.reduce(
          (accumulator, currentValue, currentIndex) =>
            accumulator + (index + 1 > currentIndex ? "/" + currentValue : ""),
          ""
        );
        return {
          title: translateUrl(el),
          href: `${window.location.origin}${path}`,
        };
      }),
  ];

  return (
    <div className={classes.breadcrumbs}>
      {breadcrumbsHistory.map((el, index) => (
        <div key={index}>
          <a href={el.href}>{el.title}</a>
          {index + 1 < breadcrumbsHistory.length && <span> / </span>}
        </div>
      ))}
    </div>
  );
};
