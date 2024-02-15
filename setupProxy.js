import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function (app) {
  app.use(
    '/', // Путь, который вы хотите проксировать
    createProxyMiddleware({
      target: 'http://localhost:4000', // URL вашего целевого сервера
      changeOrigin: true,
    })
  );
};