import path from 'path';
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
    },
  },
  modules: [
    '@pinia/nuxt',
    '@element-plus/nuxt'
  ],
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname),
      },
    }
  },
  nitro: {
    devProxy: {
      '/v1': { target: 'http://localhost:8080/v1', changeOrigin: true },
    }
  }
})
