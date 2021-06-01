// vite.config.js
const { resolve } = require('path')
module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        previo: resolve(__dirname, 'pages/previo.html'),
        
      }
    }
  }
}