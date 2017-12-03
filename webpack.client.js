const path = require('path');
module.exports = {
	// Tell webpack the root file of our server application
	entry: './src/client/client.js',
	// Tell webpack where to put the output file that is generated
	output: {
		filename: 'bundle.js',
		// build directory
		path: path.resolve(__dirname, 'public')
	},
	// Tell webpack to run bable on every file it runs through
	module: {
		rules: [
			// regex for the js files
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: ['react', 'stage-0', ['env', { targets: { browsers: ['last 2 versions'] } }]]
				}
			}
		]
	}
};
