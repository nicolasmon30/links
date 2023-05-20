import {
  defineConfig
} from 'vite'
import react from '@vitejs/plugin-react'
import {
  createProxyMiddleware
} from 'http-proxy-middleware'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://swagger.nmonroy97.workers.dev/',
  //       changeOrigin: true,
  //       secure: false,
  //       pathRewrite: {
  //         '^/api': '/auth/singin'
  //       },
  //       onProxyReq(proxyReq) {
  //         proxyReq.setHeader('origin', 'http://localhost:5173/');
  //       }
  //     }
  //   }
  // }
})