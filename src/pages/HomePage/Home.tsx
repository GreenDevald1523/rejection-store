import { Benefits, PhotoSlider } from "@/components";
import classes from "./Home.module.scss";
import sticker from "@/assets/sticker.png";
import { motion } from "framer-motion";
import { Title } from "@/ui";
import { ROUTES_PATHS } from "@/constants";

export default function Home() {
  return (
    <div className={classes.home}>
      <motion.div
        viewport={{ once: true, amount: 0.8 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
      >
        <img className={classes.home_sticker} src={sticker} alt="sticker" />
      </motion.div>
      <PhotoSlider />
      <motion.div
        viewport={{ once: true, amount: 0.8 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
      >
        <Title centered>Мы предоставляем лучший пользовательский опыт</Title>
      </motion.div>
      <Benefits />
      <motion.div
        viewport={{ once: true, amount: 0.8 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
      >
        <a href={ROUTES_PATHS.categories} className={classes.home_btn}>
          Перейти к каталогу товаров!
        </a>
      </motion.div>
    </div>
  );
}
