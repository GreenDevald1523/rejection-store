import { LINKS } from "@/constants";
import classes from "./Footer.module.scss";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <div className={classes.footer}>
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
