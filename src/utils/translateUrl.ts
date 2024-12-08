// Перевод URL значений из eng в ru

export const translateUrl = (text: string) => {
  switch (text) {
    case "about":
      return "О нас";
    case "categories":
      return "Категории";
    case "wheels":
      return "Диски";
    case "spoilers":
      return "Спойлеры";
    case "kits":
      return "Обвесы";
    case "wings":
      return "Крылья";
    default:
      return text;
  }
};
