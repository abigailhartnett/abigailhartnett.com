const { override, addWebpackModuleRule } = require("customize-cra");

module.exports = override(
	addWebpackModuleRule({
		test: /\.mdx$/,
		use: [
			{
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-react"],
				},
			},
			"@mdx-js/loader",
		],
	})
);
