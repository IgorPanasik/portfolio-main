declare module '*.module.scss' {
	interface IClassNames {
		[className: string]: string;
	}
	const classNames: IClassNames;
	export = classNames;
}

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.webp';

declare module '*.svg' {
	import React from 'react';
	const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}

declare module 'postcss-preset-env' {
	import type { PluginCreator } from 'postcss';

	interface PluginOptions {
		stage?: number;
		features?: any;
		browsers?: string;
		insertBefore?: any;
		insertAfter?: any;
		autoprefixer?: any;
		preserve?: boolean;
		importFrom?: string;
		exportTo?: string;
	}

	const PostcssPresetEnv: PluginCreator<PluginOptions>;
	export default PostcssPresetEnv;
}

declare module '*.pdf' {
	const value: string;
	export default value;
}

declare module '*.docx' {
	const value: string;
	export default value;
}

declare namespace NodeJS {
	interface ProcessEnv {
		SERVICE_ID: string;
		TEMPLATE_ID: string;
		PUBLIC_KEY: string;
	}
}
