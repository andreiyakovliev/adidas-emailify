const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.js', // Точка входу для JavaScript (навіть якщо JS вам не потрібен)
   output: {
      filename: 'bundle.js', // Webpack створить, але його можна ігнорувати
      path: path.resolve(__dirname, 'dist'), // Папка для результату
   },
   module: {
      rules: [
         {
            test: /\.html$/, // Обробка HTML-файлів
            use: ['html-loader'],
         },
         {
            test: /\.(png|jpg|jpeg|gif|svg)$/, // Обробка зображень
            type: 'asset/resource',
         },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/index.html', // Вихідний HTML
         filename: 'index.html', // Оброблений HTML у `dist`
      }),
   ],
   mode: 'production', // Використовуйте 'development' для розробки
};
