import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ModuleOptions } from 'webpack';
import { IBuildOptions } from './types/types';

export const buildLoaders = (
	options: IBuildOptions
): ModuleOptions['rules'] => {
	const isDev = options.mode === 'development';

	const assetsLoader = {
		test: /\.(png|jpg|jpeg|gif|webp)$/i,
		type: 'asset/resource',
		generator: {
			filename: 'images/[name].[hash:8][ext]',
		},
	};

	const urlLoader = {
		test: /\.(pdf|docx)$/i,
		type: 'asset/resource',
		generator: {
			filename: 'data/[name].[hash:8][ext]',
		},
	};

	const fontLoader = {
		test: /\.(woff|woff2|eot|ttf|otf)$/i,
		type: 'asset/resource',
		generator: {
			filename: 'fonts/[name].[hash:8][ext]',
		},
	};

	const svgrLoader = {
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		use: [
			{
				loader: '@svgr/webpack',
				options: {
					icon: true,
					svgoConfig: {
						plugins: [
							{
								name: 'convertColors',
								currentColor: true,
							},
						],
					},
				},
			},
		],
	};

	const cssLoaderWithModules = {
		loader: 'css-loader',
		options: {
			importLoaders: 2,
			modules: {
				auto: (resourcePath: string) => resourcePath.endsWith('.module.scss'),
				localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
			},
		},
	};

	const scssLoader = {
		test: /\.((c|sa|sc)ss)$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			cssLoaderWithModules,
			'postcss-loader',
			'sass-loader',

			/*
			 for import classes from './my-styles', and now import * as styles from './my-styles'
			{
				loader: 'css-loader',
				options: {
					modules: {
						namedExport: false,
						exportLocalsConvention: 'as-is',
						// or, if you prefer camelcase style
						// exportLocalsConvention: 'camel-case-only'
					},
				},
			},
		*/
		],
	};

	const swcLoader = {
		test: /\.(js|jsx|ts|tsx)$/,
		exclude: /(node_modules)/,
		use: {
			loader: 'swc-loader',
			options: {
				jsc: {
					transform: {
						react: {
							development: isDev,
							refresh: isDev,
						},
					},
				},
			},
		},
	};

	return [
		scssLoader,
		swcLoader,
		assetsLoader,
		svgrLoader,
		fontLoader,
		urlLoader,
	];
};
