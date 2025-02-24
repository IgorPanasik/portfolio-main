import path from 'path';
import webpack from 'webpack';
import { buildWebpack } from './config/build/buildWebpack';
import { BuildMode, IBuildPath } from './config/build/types/types';

interface IEnvVariables {
	mode: BuildMode;
	port: number;
	analyzer: boolean;
}

export default (env: IEnvVariables) => {
	const paths: IBuildPath = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		output: path.resolve(__dirname, 'dist'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		public: path.resolve(__dirname, 'public'),
		src: path.resolve(__dirname, 'src'),
		env: path.resolve(__dirname, '.env'),
	};
	const config: webpack.Configuration = buildWebpack({
		port: env.port ?? 3000,
		mode: env.mode ?? 'development',
		analyzer: env.analyzer,
		paths,
	});
	return config;
};
