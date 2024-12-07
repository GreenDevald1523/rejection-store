import { Breadcrumbs, Title } from "@/ui";
import classes from "./About.module.scss";

export default function About() {
  return (
    <div className={classes.about}>
      <Title centered>О нас</Title>
      <Breadcrumbs />
      <div className={classes.about_text}>
        <p>
          Rejection — это не просто магазин автомобильных аксессуаров. Это
          место, где воплощаются самые смелые и нестандартные идеи тюнинга. Мы
          предлагаем уникальные, кастомные детали и атрибуты, созданные для тех,
          кто отказывается от серийности и стремится к индивидуальности.
          Забудьте о банальности и шаблонных решениях – Rejection поможет вам
          выделить ваш автомобиль из потока и выразить свою неповторимую
          индивидуальность. Мы работаем только с высококачественными материалами
          и гарантируем безупречное исполнение каждого заказа.
        </p>
        <p>
          Наша команда состоит из опытных дизайнеров, инженеров и мастеров,
          увлеченных автомобильным тюнингом и стремящихся к совершенству. Мы
          создаем не просто детали, а произведения искусства, которые преобразят
          ваш автомобиль, сделав его отражением вашего стиля и характера. В
          Rejection вы найдете не только широкий выбор готовых решений, но и
          возможность заказать эксклюзивный проект, разработанный специально по
          вашим эскизам и пожеланиям. Мы готовы взяться за самые сложные и
          амбициозные задачи, превращая ваши фантазии в реальность.
        </p>
        <p>
          Мы ценим доверие наших клиентов и стремимся к долгосрочному
          сотрудничеству. На нашем сайте вы найдете удобный интерфейс, подробные
          описания товаров, высококачественные фотографии и оперативную
          поддержку. Если у вас возникли вопросы или вам нужна помощь в выборе
          деталей, наши специалисты всегда готовы помочь. Rejection – это выбор
          для тех, кто ценит качество, эксклюзивность и индивидуальный подход.
          Откажитесь от обыденности – выбирайте Rejection!
        </p>
      </div>
    </div>
  );
}
