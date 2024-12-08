import { motion } from "framer-motion";
import classes from "./Benefits.module.scss";
import settingsIcon from "@/assets/settings.jpg";
import deliveryIcon from "@/assets/delivery.jpg";
import phoneIcon from "@/assets/phone.jpg";

export const Benefits = () => {
  return (
    <div className={classes.benefits}>
      <motion.div
        viewport={{ once: true, amount: 0.8 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
        className={classes.benefits_item}
      >
        <img src={settingsIcon} alt="img1" />
        <div className={classes.benefits_item__desc}>
          <h2>Отличное качество каждой детали</h2>
          <p>
            Делаем огромный акцент на качество и надежность товаров. Наши
            клиента достойны лучшего!
          </p>
        </div>
      </motion.div>

      <motion.div
        viewport={{ once: true, amount: 0.8 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
        className={classes.benefits_item}
      >
        <div className={classes.benefits_item__desc}>
          <h2>Быстрая доставка</h2>
          <p>
            В кратчайшие сроки привезем Вашу деталь в наилучшем состоянии. Долго
            ждать не придется!
          </p>
        </div>
        <img src={deliveryIcon} alt="img2" />
      </motion.div>

      <motion.div
        viewport={{ once: true, amount: 0.8 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
        className={classes.benefits_item}
      >
        <img src={phoneIcon} alt="img3" />
        <div className={classes.benefits_item__desc}>
          <h2>24/7 на связи!</h2>
          <p>
            Мы всегда рады Вам и готовы в любой момент провести консультацию и
            подобрать самое нужное
          </p>
        </div>
      </motion.div>
    </div>
  );
};
