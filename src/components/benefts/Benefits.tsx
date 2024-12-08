import { motion } from "framer-motion"; // Импорт библиотеки для анимации
import classes from "./Benefits.module.scss"; // Импорт CSS-модуля
import settingsIcon from "@/assets/settings.jpg"; // Импорт изображения для первого преимущества
import deliveryIcon from "@/assets/delivery.jpg"; // Импорт изображения для второго преимущества
import phoneIcon from "@/assets/phone.jpg"; // Импорт изображения для третьего преимущества

export const Benefits = () => {
  // Функциональный компонент для отображения преимуществ
  return (
    <div className={classes.benefits}>
      {/* Контейнер для всех преимуществ */}
      {/* Компонент для первого преимущества */}
      <motion.div // Использование motion.div для анимации
        viewport={{ once: true, amount: 0.8 }} // Параметры viewport для запуска анимации при появлении в окне просмотра
        initial={{ opacity: 0, y: 50 }} // Начальное состояние анимации
        whileInView={{
          // Состояние анимации при появлении в окне просмотра
          opacity: 1,
          y: 0,
          transition: { duration: 1 }, // Длительность анимации
        }}
        className={classes.benefits_item} // CSS-класс для стилизации элемента
      >
        <img src={settingsIcon} alt="img1" /> {/* Изображение */}
        <div className={classes.benefits_item__desc}>
          {/* Контейнер для текста */}
          <h2>Отличное качество каждой детали</h2> {/* Заголовок */}
          <p>
            Делаем огромный акцент на качество и надежность товаров. Наши
            клиента достойны лучшего! {/* Текст описания */}
          </p>
        </div>
      </motion.div>
      {/* Компонент для второго преимущества (аналогично первому) */}
      <motion.div
        viewport={{ once: true, amount: 0.8 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
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
      {/* Компонент для третьего преимущества (аналогично первому) */}
      <motion.div
        viewport={{ once: true, amount: 0.8 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
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
