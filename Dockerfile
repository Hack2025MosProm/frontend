
# Этап сборки
FROM node:18-alpine AS build

WORKDIR /app

# Скопировать package.json и package-lock.json
COPY package*.json ./

# Установить зависимости
RUN npm install

# Скопировать остальные файлы и собрать проект
COPY . .
RUN npm run build

# Этап запуска (Nginx для отдачи статики
FROM nginx:stable-alpine

# Копируем конфигурацию nginx
COPY nginx.conf /etc/nginx/nginx.conf
# Удаляем BOM, если он есть
RUN sed -i '1s/^\xEF\xBB\xBF//' /etc/nginx/nginx.conf

# Копируем собранное приложение
COPY --from=build /app/dist /usr/share/nginx/html

# Копируем entrypoint скрипт
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 80

# Используем entrypoint скрипт для runtime конфигурации
CMD ["/entrypoint.sh"]
