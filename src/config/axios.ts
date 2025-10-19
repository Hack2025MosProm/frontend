import axios, { AxiosHeaders, type InternalAxiosRequestConfig } from "axios";

// Получаем API URL из переменных окружения или используем значение по умолчанию
const getApiUrl = () => {
    // В браузере пытаемся получить из window.env или использовать встроенное значение
    if (typeof window !== 'undefined') {
        // Проверяем, есть ли уже window.env (скрипт загружен)
        const env = (window as any).env;
        if (env?.VITE_API_URL) {
            console.log('Using runtime API URL:', env.VITE_API_URL);
            return env.VITE_API_URL;
        }

        // Если window.env ещё не загружен, ждём немного и пробуем снова
        if (!env) {
            console.log('Window.env not loaded yet, using build-time API URL:', API_URL);
        }
    }

    // Fallback на встроенное значение из сборки
    console.log('Using build-time API URL:', API_URL);
    return API_URL;
};

const axiosBase = axios.create({
    baseURL: getApiUrl(),           // возвращает https://.../api/v1
    withCredentials: true,          // если работаешь на куках — оставь true
    headers: { 'Content-Type': 'application/json' },
  });

  // Request interceptor: всегда добавляем Bearer (если есть)
  axiosBase.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token'); // важный ключ: 'token'
    if (token) {
      // Гарантируем корректный тип заголовков
      const headers =
        config.headers instanceof AxiosHeaders
          ? config.headers
          : new AxiosHeaders(config.headers);

      headers.set('Authorization', `Bearer ${token}`);
      // (если нужно) убедиться, что Content-Type не потерялся:
      if (!headers.has('Content-Type')) headers.set('Content-Type', 'application/json');

      config.headers = headers; // <-- типобезопасно
    }
    return config;
  });

  // (опционально) ловим 401, чтобы, например, инициировать refresh/logout
  axiosBase.interceptors.response.use(
    (resp) => resp,
    async (err) => {
      if (err?.response?.status === 401) {
        // ... сюда можно добавить логику обновления токена/редиректа на логин
      }
      return Promise.reject(err);
    }
  );

  export default axiosBase;