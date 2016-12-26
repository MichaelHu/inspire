var path = require( 'path' );

var appRootDir = __dirname;
var srcDir = appRootDir + '/src'; 
var buildDir = appRootDir + '/build'; 

var webpack = require( 'webpack' );
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    entry: srcDir + '/app.js'
    , output: {
        path: buildDir
        , filename: '[name].js'
    }
    , module: {
        loaders: [
            {
                test: /\.jsx?$/
                , loader: 'babel?presets[]=es2015,presets[]=react'
            }
        ]
    }
    , plugins: [
        new HtmlWebpackPlugin( {
            filename: 'index.html'
            , template: srcDir + '/index.html'
		} )
    ]
    , devServer: {
        contentBase: buildDir
        , host: '0.0.0.0'
        , port: 9100
        , proxy: {
            '/notes': {
                target: 'http://127.0.0.1:8700'
                // , pathRewrite: { '^/notes': '/abc/def' } 
            }
        }
    }
};
