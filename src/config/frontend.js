import 'dotenv/config'

export default {
    env: {
        SOCKET_URL: process.env.SOCKET_URL
    },

    server: {
        port: process.env.FRONTEND_PORT || '3002',
        host: process.env.FRONTEND_HOST || '127.0.0.1'
    },

    buildDir: 'build/frontend',

    srcDir: 'src/frontend',

    globalName: 'frontend',

    modulesDir: ['./node_modules'],

    modules: ['@nuxtjs/axios'],


}
