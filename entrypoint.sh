#!/bin/sh

# Создаем конфигурацию для runtime
cat > /usr/share/nginx/html/env-config.js << EOF
window.env = {
  VITE_API_URL: "${VITE_API_URL:-https://hskkosc04wws4ok44co084ww.ruzserver.ru/api/v1}"
};
EOF

# Заменяем placeholder в index.html на наш скрипт конфигурации
# Вставляем скрипт перед основным скриптом приложения
sed -i 's|<script type="module"|<script src="/env-config.js"></script><script type="module"|' /usr/share/nginx/html/index.html

echo "Runtime configuration created:"
cat /usr/share/nginx/html/env-config.js

# Запускаем nginx
exec nginx -g "daemon off;"
