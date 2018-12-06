const webpack = require('webpack');

module.exports = {
    entry: './ex/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    /* 
        essa configuracao do objeto resolve, serve para importar seus compenentes
        sem precisar usar a extensao .jsx
    */
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    /* 
        configuracao para o servidor rodar na porta 8080 executando 
        o arquivo principal que esta na pasta public/index.html
    */
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}