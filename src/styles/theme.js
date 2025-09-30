
export const theme = {
	colors: {
		white: {
			100: 'rgb(249, 248, 245)', 
			200: 'rgb(244, 242, 240)', 
			300: 'rgb(245, 245, 245)', 
			400: 'rgb(250, 249, 246)', 
			500: 'rgb(251, 249, 244)', 
		},
        black: {
            0: 'rgb(0, 0, 0)',
            100: 'rgb(28, 28, 30)',
            200: 'rgb(44, 44, 46)',
            300: 'rgb(58, 58, 60)',
            400: 'rgb(72, 72, 74)',
            500: 'rgb(99, 99, 102)',
            600: 'rgb(142, 142, 147)',
        },
        gray: {
            100: 'rgb(142, 142, 147)',
            200: 'rgb(174, 174, 178)',
            300: 'rgb(199, 199, 204)',
            400: 'rgb(209, 209, 214)',
            500: 'rgb(229, 229, 234)',
            600: 'rgb(242, 242, 247)',
        },
        red: {
            'basic': 'rgb(255, 56, 60)',
            'dark': 'rgb(255, 66, 69)',
            'light': 'rgb(233, 21, 45)',
            'contrast': 'rgb(255, 97, 101)',
            'gradient': 'linear-gradient(180deg, rgb(255, 56, 60) 0%, rgb(233, 21, 45) 100%)'
        },
        orange: {
            'basic': 'rgb(255, 141, 40)',
            'dark': 'rgb(255, 146, 48)',
            'light': 'rgb(197, 83, 0)',
            'contrast': 'rgb(255, 160, 86)',
            'gradient': 'linear-gradient(180deg, rgb(255, 141, 40) 0%, rgb(197, 83, 0) 100%)'
        },
        yellow: {
            'basic': 'rgb(255, 204, 0)',
            'dark': 'rgb(255, 214, 0)',
            'light': 'rgb(161, 106, 0)',
            'contrast': 'rgb(254, 223, 67)',
            'gradient': 'linear-gradient(180deg, rgb(255, 204, 0) 0%, rgb(161, 106, 0) 100%)'
        },
        green: {
            'basic': 'rgb(52, 199, 89)',
            'dark': 'rgb(48, 209, 88)',
            'light': 'rgb(0, 137, 50)',
            'contrast': 'rgb(74, 217, 104)',
            'gradient': 'linear-gradient(180deg, rgb(52, 199, 89) 0%, rgb(0, 137, 50) 100%)'
        },
        mint: {
            'basic': 'rgb(0, 200, 179)',
            'dark': 'rgb(0, 218, 195)',
            'light': 'rgb(0, 133, 117)',
            'contrast': 'rgb(84, 223, 203)',
            'gradient': 'linear-gradient(180deg, rgb(0, 200, 179) 0%, rgb(0, 133, 117) 100%)'
        },
        teal: {
            'basic': 'rgb(0, 195, 208)',
            'dark': 'rgb(0, 210, 224)',
            'light': 'rgb(0, 129, 152)',
            'contrast': 'rgb(59, 221, 236)',
            'gradient': 'linear-gradient(180deg, rgb(0, 195, 208) 0%, rgb(0, 129, 152) 100%)'
        },
        cyan: {
            'basic': 'rgb(0, 192, 232)',
            'dark': 'rgb(60, 211, 254)',
            'light': 'rgb(0, 126, 174)',
            'contrast': 'rgb(109, 217, 255)',
            'gradient': 'linear-gradient(180deg, rgb(0, 192, 232) 0%, rgb(0, 126, 174) 100%)'
        },
        blue: {
            'basic': 'rgb(0, 136, 255)',
            'dark': 'rgb(0, 145, 255)',
            'light': 'rgb(30, 110, 244)',
            'contrast': 'rgb(92, 184, 255)',
            'gradient': 'linear-gradient(180deg, rgb(0, 136, 255) 0%, rgb(30, 110, 244) 100%)'
        },
        indigo: {
            'basic': 'rgb(97, 85, 245)',
            'dark': 'rgb(107, 93, 255)',
            'light': 'rgb(86, 74, 222)',
            'contrast': 'rgb(167, 170, 255)',
            'gradient': 'linear-gradient(180deg, rgb(97, 85, 245) 0%, rgb(86, 74, 222) 100%)'
        },
        purple: {
            'basic': 'rgb(203, 48, 224)',
            'dark': 'rgb(219, 52, 242)',
            'light': 'rgb(176, 47, 194)',
            'contrast': 'rgb(234, 141, 255)',
            'gradient': 'linear-gradient(180deg, rgb(203, 48, 224) 0%, rgb(176, 47, 194) 100%)'
        },
        pink: {
            'basic': 'rgb(255, 45, 85)',
            'dark': 'rgb(255, 55, 95)',
            'light': 'rgb(231, 18, 77)',
            'contrast': 'rgb(255, 138, 196)',
            'gradient': 'linear-gradient(180deg, rgb(255, 45, 85) 0%, rgb(231, 18, 77) 100%)'
        },
        brown: {
            'basic': 'rgb(172, 127, 94)',
            'dark': 'rgb(183, 138, 102)',
            'light': 'rgb(149, 109, 81)',
            'contrast': 'rgb(219, 166, 121)',
            'gradient': 'linear-gradient(180deg, rgb(172, 127, 94) 0%, rgb(149, 109, 81) 100%)'
        },
	},

    border: {
        left: `inset 0.6px 0 0 0`,
        right: `inset -0.6px 0 0 0`,
        top: `inset 0 0.6px 0 0`,
        bottom: `inset 0 -0.6px 0 0`
    },

	fonts: {
		urbanist: 'Urbanist, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
        manrope: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
	},

	fontWeights: {
        light: 300,
		normal: 400,
		medium: 500,
		bold: 700,
	},

	lineHeights: {
		normal: 1.3,
		heading: 1.1,
	},
};

export default theme;
