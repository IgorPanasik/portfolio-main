export type BuildMode = 'production' | 'development';

export interface IBuildPath {
	entry: string;
	html: string;
	output: string;
	src: string;
	public: string;
	env: string;
}

export interface IBuildOptions {
	port: number;
	paths: IBuildPath;
	mode: BuildMode;
	analyzer?: boolean;
}
