import { LINKS } from "@/constants";
import classes from "./Header.module.scss";
import logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <div className={classes.header}>
      <a href="/">
        <img className={classes.logo} src={logo} alt="logo" />
      </a>
      <nav className={classes.navigation}>
        {LINKS.map((link, index) => (
          <a key={index} className={classes.link} href={link.href}>
            {link.title}
          </a>
        ))}
      </nav>
    </div>
  );
};
