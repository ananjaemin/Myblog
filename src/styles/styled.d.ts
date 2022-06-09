import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		size: {
			mobile: string;
			tablet: string;
			laptop: string;
			desktop: string;
		};

		colors: {
			background: string;
			button: string;
			textWhite: string;
			textLightgrey: string;
			textGrayishyellow: string;
		};
	}
}