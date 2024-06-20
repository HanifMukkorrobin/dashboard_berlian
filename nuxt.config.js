export default {
  target: 'static',
  ssr: false,
  generate: {
    fallback: true,
  },
  head: {
    title: 'dashboard-v1',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['~/assets/css/tailwind.css'],
  plugins: [
    {
      src: "~/plugins/vue-highcharts",
      ssr: false,
    },
  ],
  components: true,
  buildModules: [
    ['@nuxtjs/eslint-module', { fix: true }],
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: '/',
  },
  build: {},
}
