/*
const path = require('path');

module.exports = {
	mode:'development',
    entry: {
    	index:{
    		import:'./src/index.js',
    		dependOn:'shared',
    	},
    	another:{
    		import:'./src/another-module.js',
    		dependOn:'shared',
    	},
    	shared: 'lodash',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization:{
    	runtimeChunk: 'single',
    },
};
*/


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
	mode:'development',
    entry: {
    	index:'./src/index.js',
    },
    devtool:'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean:true,
    },
    plugins:[
    	new HtmlWebpackPlugin(),	
    ],

};
