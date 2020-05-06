module.exports = {
	"mode": "development",
	"devtool":"inline-source-map",
	"entry": __dirname+"/src/index.js",
	// "output": {
	// 				"path": __dirname+'/bundle',
	// 				"filename": "[name].[chunkhash:8].js"
	// },
	"output": {
		"path": __dirname,
		"filename": "bundle.js"
},
	"module": {
					"rules": [
									{
													"enforce": "pre",
													"test": /\.(js|jsx)$/,
													"exclude": /node_modules/,
													"use": "eslint-loader"
									},
									{
													"test": /\.js$/,
													"exclude": /node_modules/,
													"use": {
																	"loader": "babel-loader",
																	"options": {
																					"presets": [
																									"@babel/preset-env"
																					]
																	}
													}
									},
									{
													"test": /\.css$/,
													"use": [
																	"style-loader",
																	"css-loader"
													]
									}
					]
	}
}
