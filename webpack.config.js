const webpack = require('webpack');
const path = require('path');

module.exports = [{
        name: "main",
        entry: {
            app: [
              '@babel/polyfill',
              './public/js/mapView/src/app',
            ],
        },
        output: {
            path: path.resolve(__dirname, './public/js/mapView/dist'),
            filename: 'app.bundle.js'
        },
        module: {
            rules: [{
                test: /\.js$/, 
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                }]
            }]
        },
        watchOptions: {
             ignored: /node_modules/
        }
    },
    {
        name: "dashboard",
        entry: {
            app: [
              '@babel/polyfill',
              './public/js/dashboard/src/app',
            ],
        },
        output: {
            path: path.resolve(__dirname, './public/js/dashboard/dist'),
            filename: 'app.bundle.js'
        },
        module: {
            rules: [{
                test: /\.js$/, 
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                }]
            }]
        },
        watchOptions: {
             ignored: /node_modules/
        }
    }];

