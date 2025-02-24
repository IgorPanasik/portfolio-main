# Конфигурация Webpack с TypeScript, SWC, SCSS, SVG, PostCSS

- TypeScript: Использует TypeScript для статической типизации и улучшения качества кода.
- SWC (Speedy Web Compiler): Использует SWC для быстрой компиляции TypeScript и JavaScript.
- SCSS: Поддержка SCSS с модульными стилями (CSS Modules).
- SVG: Обработка SVG-файлов как React-компонентов с помощью @svgr/webpack.
- Изображения: Обработка изображений (PNG, JPG, JPEG, GIF, WebP) с помощью asset/resource и сохранение их в папку assets/images.
- Шрифты: Обработка шрифтов.
- Горячая перезагрузка (HMR): Поддержка горячей перезагрузки для ускорения разработки.
- Анализ сборки: Использование webpack-bundle-analyzer для анализа размера бандла.
- Проверка типов: Использование fork-ts-checker-webpack-plugin для проверки типов TypeScript в отдельном процессе.
- Копирование ресурсов: Использование copy-webpack-plugin для копирования статических ресурсов.
- PostCSS: Использование PostCSS для обработки CSS с postcss-preset-env и cssnano.
- Браузерная совместимость: Настройка browserslist для обеспечения совместимости с различными браузерами.
- Автоматическое преобразование JSX: Использование runtime: 'automatic' для автоматического преобразования JSX.

## Доступные скрипты:

- yarn start: Запуск сервера разработки с горячей перезагрузкой.
- yarn analyzer: Сборка проекта для production с анализом размера бандла.
- yarn build:dev: Сборка проекта для development.
- yarn build:prod: Сборка проекта для production.

## Настройка браузерной совместимости:

- Настройка browserslist в package.json обеспечивает совместимость с указанными браузерами.
