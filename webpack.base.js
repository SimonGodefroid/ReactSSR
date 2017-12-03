module.exports = {
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
