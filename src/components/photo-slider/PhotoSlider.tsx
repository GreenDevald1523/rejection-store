import Carousel from "framer-motion-carousel";
import classes from "./PhotoSlider.module.scss";
import { motion } from "framer-motion";

const images = [
  "https://sun9-25.userapi.com/impg/gELRilcaPnBjVP71_NKqI3gGOGWjjWarX-tTsQ/EgRD96y5QoA.jpg?size=720x720&quality=95&sign=5cde24b6058cd3cd9cd9c05a8f9bff88&type=album",
  "https://sun9-12.userapi.com/impg/mBFqjZ_JgQuuu_AzCW-rTr1H1R6mVulBrER7JQ/0wq8IKz001s.jpg?size=1280x1280&quality=95&sign=7a521000704f2afac69b426afb7f3fe3&type=album",
  "https://sun9-30.userapi.com/impg/RO_QacIBTB7eU1N8WNaIkV2kr-E8eWTLybGVVA/8uf25UU7564.jpg?size=1080x1080&quality=95&sign=4c071263fe2cfcc7193be4b9667471f1&type=album",
  "https://sun9-13.userapi.com/impg/Qh9kRB3uPJfhMQHxrIN0RY0borCci4XTYqYbCg/sMJWK9OoVrA.jpg?size=2560x2560&quality=95&sign=5b6c5952e1e6f5200f045083ecdf8fbf&type=album",
  "https://sun9-62.userapi.com/impg/Jl9LLMNyOglDRfJQVW-1X6HDIVXVZb_usDPeAA/YdubmpH6dqs.jpg?size=1079x1080&quality=95&sign=96046bbb186c9d0cbdbd013b6690a66c&type=album",
  "https://sun9-32.userapi.com/impg/BJh26Q1lZEcCuZfMlj9UDVHLwDThMZkacQC6wA/-rgwcnjah-Y.jpg?size=2560x2560&quality=95&sign=4ccc4ac1e3d42b4d09fd4a846a6b9af8&type=album",
  "https://sun9-28.userapi.com/impg/leOLcpjELd6uZR0jK3IGtPg-k3JHPjLcqnXNrQ/3R7ThbT3uEk.jpg?size=720x720&quality=95&sign=b3a5e83b2654460d4bc7f4abf211ea28&type=album",
  "https://sun9-68.userapi.com/s/v1/ig2/2egGFFLPOOt61Ph9Mbbxswd-FQT8JycD-x3BEHE47GiCD0Cz_IEZoTTJz1F3PjlypNVL0nw1U-lJDWnp9VpOXJmY.jpg?quality=95&crop=0,0,2560,2560&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440,2560x2560&from=bu&cs=2560x2560",
];

export const PhotoSlider = () => {
  return (
    <motion.div
      viewport={{ once: true, amount: 0.8 }}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 1 },
      }}
    >
      <div className={classes.photo_slider}>
        <Carousel autoPlay interval={2000} loop renderDots={() => null}>
          {images.map((image, i) => (
            <img draggable="false" src={image} key={i} width="100%" alt="" />
          ))}
        </Carousel>
      </div>
    </motion.div>
  );
};
