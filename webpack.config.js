var path = require('path');

module.exports = {
    entry: {
    	helloworld: [
	    	'webpack/hot/dev-server',
	    	'webpack-dev-server/client?http://localhost:8080',
	    	path.resolve(__dirname, 'app/index.js')
    	],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
	    loaders: [{
		    test: /\.jsx?$/, 
		    exclude: /node_modules/, 
		    loader: 'babel',
		    query: {
		        presets:['es2015','stage-0','react']
			}
		}, {
		    test: /\.less$/,
		    loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
	    },{ 
            test: /\.(png|jpg)$/, 
            loader: 'url-loader?limit=8192'
        }]
	}
};