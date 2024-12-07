import { PhotoSlider } from "@/components";
import classes from "./Home.module.scss";
import sticker from "@/assets/sticker.png";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className={classes.home}>
      <motion.div
        viewport={{ once: true, amount: 0.8 }}
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1 },
        }}
      >
        <img className={classes.sticker} src={sticker} alt="sticker" />
      </motion.div>
      <PhotoSlider />
    </div>
  );
}
