/*
 Webpack, by default, only outputs a 'bundle' of dependencies as a JavaScript file.
 We're adding a handful of plugins and functionalities below in order to output
 various types of content that are not JavaScript (images, HTML, etc).

 By default, Webpack searches a project for `./src/index.js` as its entrypoint for dependency linking.
 From there, it "spiders out" to every linked dependency (.js, .css, .html, .png, and more!!) and creates
 a virtual dependency graph (not visual immediately, but there are ways to visualize it), then bundles
 the dependencies based on how the rules in this config state.

 Everything gets output into `./dist/` by default.
*/
const webpack = require('webpack');  // We require webpack as a package to use plugins provided by Webpack.
const CopyWebpackPlugin = require('copy-webpack-plugin');  // This allows us to copy files directly into the dist directory.
const HtmlWebPackPlugin = require('html-webpack-plugin');  // This generates a single index.html file where the project will load in-browser.
const path = require('path');

module.exports = env => {
	env = env || {};
	const config = {
    mode: env.mode || 'production',
		entry: './src/index.js',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'bundle.js'
    },
		module: {
			rules: [
				{
					// If you see a file that ends in .html, send it to these loaders.
          test: /\.html$/,
          
					// This is an example of chained loaders in Webpack.
					// Chained loaders run last to first. So it will run
					// polymer-webpack-loader, and hand the output to
					// babel-loader. This let's us transpile JS in our `<script>` elements.
					use: [
						{ loader: 'babel-loader' },
						{ 
              // https://github.com/webpack-contrib/polymer-webpack-loader#processstylelinks-boolean
              // Any external CSS linked in dom-modules (as in <link rel="stylesheet" type="text/css" href="./styles.css">)
              // need the processStyleLinks switch flipped 'on' or they will be skipped.
              options: {
                processStyleLinks: true
              },
              loader: 'polymer-webpack-loader'
            },
            // This is a small loader located in this project that fixes jha-design-components imports.
            { loader: './tools/jha-design-components-loader' }
					]
        },
				{
          test: /polymer\.html$/,
          include: [
            path.resolve(__dirname, './node_modules/@banno/polymer')
          ]
        },
				{
          // If you see a file that ends in .js, just send it to the babel-loader.
          test: /\.js$/,

          use: 'babel-loader',
          // Optionally exclude node_modules from transpilation except for polymer-webpack-loader:
          // exclude: /node_modules\/(?!polymer-webpack-loader\/).*/
        },
        {
          // polymer-webpack-loader pulls CSS dependencies out, which then get funneled into
          // this test.
          test: /\.css$/,
          // CSS Loader pulls the CSS out of the CSS file and it gets placed as a raw string
          // directly where polymer-webpack-loader found the dependency.
          // polymer-webpack-loader may move CSS dependencies into an HTML template so that
          // the styles apply properly.
          use: 'css-loader'
        },
        {
          // Image dependencies that end in png, jpg, or gif go through file loader to automatically
          // be bundled as static dependencies.
          test: /\.(png|jpg|gif)$/,
          use: 'file-loader'
        }
			]
		},
		devServer: {
			contentBase: path.join(__dirname, 'dist'),
			compress: true,
			port: 1820

    },
    devtool: 'source-map',
		plugins: [
      // Here is a plugin that comes built-in to Webpack.
      // This plugin will fix broken dependency links in
      // the jha-design-commponents package.
      new webpack.NormalModuleReplacementPlugin(
        /\/node_modules\/@banno\/polymer\/polymer\.html$/,
        '@banno/polymer/polymer-element.js'
      ),

			// This plugin will generate an index.html file for us that can be used
      // by the Webpack dev server. We can give it a template file (written in EJS)
      // and it will handle injecting our bundle for us.
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, './src/index.ejs'),
        alwaysWriteToDisk: true,
        inject: false,
        production: Boolean(env.release),
        filename: 'index.html'
      }),

			// This plugin will copy files over for us without transforming them.
      // That's important because the custom-elements-es5-adapter.js MUST
      // remain in ES2015.
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, './node_modules/@webcomponents/webcomponentsjs/*.js'),
          to: './webcomponentsjs/[name].[ext]'
        },
        {
          from: path.resolve(__dirname, './src/assets/css/global.css'),
          to: './assets/css/global.css'
        }
      ]),
		],
	};
  return config;
  
	// Anything that Webpack doesn't generate on its own gets served out of dist
};
