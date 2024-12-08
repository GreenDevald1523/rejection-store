import { API_URL } from "@/constants"; // Импорт константы с базовым URL API
import { useState, useEffect } from "react"; // Импорт хуков для работы с состоянием и эффектами

interface UseFetchResult {
  // Интерфейс для результата работы хука
  data: any | null; // Данные, полученные с сервера или null
  isLoading: boolean; // Флаг, указывающий на загрузку данных
  error: any | null; // Ошибка, возникшая при получении данных или null
}

export const useFetch = (url: string): UseFetchResult => {
  // Кастомный хук для выполнения fetch-запроса
  const [data, setData] = useState<any | null>(null); // Состояние для хранения данных
  const [isLoading, setIsLoading] = useState<boolean>(true); // Состояние для индикатора загрузки
  const [error, setError] = useState<any | null>(null); // Состояние для хранения ошибки

  useEffect(() => {
    // Выполнение эффекта после каждого изменения url
    setTimeout(() => {
      // Имитация задержки для демонстрации индикатора загрузки (в реальном приложении задержка не нужна)
      fetch(API_URL + url) // Выполнение fetch-запроса
        .then((res) => {
          // Обработка ответа
          if (!res.ok) {
            // Проверка статуса ответа
            throw Error("Error fetching data"); // Выбрасывание ошибки, если статус не 200-299
          }
          return res.json(); // Преобразование ответа в JSON
        })
        .then((data) => {
          // Обработка данных
          setData(data); // Сохранение данных в состоянии
          setIsLoading(false); // Установка флага загрузки в false
          setError(null); // Очистка состояния ошибки
        })
        .catch((err) => {
          // Обработка ошибок
          setIsLoading(false); // Установка флага загрузки в false
          setError(err.message); // Сохранение сообщения об ошибке в состоянии
        });
    }, 1000); // Задержка в 1 секунду (для демонстрации, в продакшене уберите)
  }, [url]); // Зависимость эффекта от url

  return { data, isLoading, error }; // Возвращение результата
};
