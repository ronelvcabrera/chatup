console.log('BASE_API_URL', process.env.BASE_API_URL)
export default {
  mode: 'universal',
  target: 'server',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    // script: [
    //   {
    //     src: 'http://localhost:7071/socket.io/socket.io.js'
    //   }
    // ]
  },
  css: [
    { src: '~/assets/css/main.css', lang: 'css' }
  ],
  plugins: [
    // { src: '~plugins/socketio.js' }
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [
    'nuxt-buefy',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/auth'
  ],
  auth: {
    redirect: {
      login: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/auth/login', method: 'post' },
        }
      }
    }
  },
  axios: {
    baseURL: process.env.BASE_API_URL
  },
  build: {}
}
