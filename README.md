# Node.js API with MongoDB and TypeScript

## Опис

Цей проект представляє собою REST API на основі Node.js та MongoDB, написаний на TypeScript.

## Встановлення

1. Клонувати репозиторій:
   ```bash
   git clone <url>
   ```

2. Встановити залежності:
   ```bash
   npm install
   ```

3. Створити `.env` файл і додати MongoDB URI та порт:
   ```bash
   MONGO_URI=ваш_URI
   PORT=ваш_порт
   ```

4. Запустити проект у режимі розробки:
   ```bash
   npm run dev
   ```

5. Скомпілювати TypeScript у JavaScript:
   ```bash
   npm run build
   ```

6. Запустити проект у продакшені:
   ```bash
   npm start
   ```

## Структура проекту

- **src/** — містить вихідні файли TypeScript.
- **dist/** — містить зкомпільовані JavaScript файли після команди `npm run build`.

## Маршрути

- `GET /` — Отримати перший документ з колекції користувачів.
- `GET /users` — Отримати всіх користувачів.
- `GET /users/:id` — Отримати користувача за ID.

## Додаткова інформація

- Проект автоматично перезапускається в режимі розробки завдяки `ts-node-dev`.
