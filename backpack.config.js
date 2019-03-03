require('dotenv').config()

const path = require('path')

module.exports = {
    webpack: (config, options, webpack) => {
        const rootPath = path.resolve(process.cwd())
        const srcPath = rootPath + '/src'

        switch(process.env.BACKPACK_ENV){
            default:
                config.output.path = path.join(rootPath, 'build', 'server')
                config.entry.main = ['./src/server.js']
        }

        config.resolve = {
            alias: {
                '~app': srcPath,
                '~api': srcPath + '/api',
                '~config': srcPath + '/config',
                '~frontend': srcPath + '/frontend',
                '~models': srcPath + '/models',
                '~services': srcPath + '/services',
                '~sockets': srcPath + '/sockets',
            }
        }

        return config
    }
}
