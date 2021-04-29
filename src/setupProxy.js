const proxy = require('http-proxy-middleware');

// module.exports = function(App) {
//     App.use(
//     '/positions.json',
//     createProxyMiddleware({
//       target: 'http://jobs.github.com/',
//       changeOrigin: true,
//     })
//   );
// };


module.exports = app => {
    app.use(
        '/positions.json',
      proxy({
        target: 'http://jobs.github.com/',
        changeOrigin: true
      })
    );
  };
  
  