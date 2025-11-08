
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');

	:root {
		-moz-tab-size: 4;
		tab-size: 4;
	}

	*, *::before, *::after {
		box-sizing: border-box;
	}

	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed,
	figure, figcaption, footer, header, hgroup,
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		vertical-align: baseline;
	}

	article, aside, details, figcaption, figure,
	footer, header, hgroup, menu, nav, section {
		display: block;
	}

	html {
		-webkit-text-size-adjust: 100%;
		-ms-text-size-adjust: 100%;
		height: 100%;
	}

	body {
		min-height: 100vh;
		line-height: 1.5;
		background: #000;
		color: #222;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-family: ${props => (props.theme && props.theme.fonts && props.theme.fonts.urbanist) || 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial'};
	}

	ol, ul {
		list-style: none;
	}

	a {
		color: inherit;
		text-decoration: none;
		background-color: transparent;
	}

	img, picture, video, canvas, svg {
		display: block;
		max-width: 100%;
		height: auto;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	button, input, select, textarea {
		font: inherit;
		color: inherit;
		background: transparent;
		border: none;
		padding: 0;
		margin: 0;
		outline: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
	}

	button {
		cursor: pointer;
		background-color: transparent;
	}

	::placeholder {
		color: inherit;
		opacity: 0.6;
	}

	input[type="search"]::-webkit-search-decoration,
	input[type="search"]::-webkit-search-cancel-button {
		-webkit-appearance: none;
	}

	[hidden] {
		display: none !important;
	}

	:focus {
		outline: none;
	}

	:focus-visible {
		outline: 3px solid Highlight;
		outline-offset: 2px;
	}

	@media (prefers-reduced-motion: reduce) {
		*, *::before, *::after {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
			scroll-behavior: auto !important;
		}
	}

	textarea {
		resize: vertical;
		min-height: 80px;
	}

	input[type="number"]::-webkit-outer-spin-button,
	input[type="number"]::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	summary {
		display: list-item;
	}

	abbr[title] {
		text-decoration: underline dotted;
	}

	label { cursor: pointer; }

	p, h1, h2, h3, h4, h5, h6 {
		overflow-wrap: break-word;
	}

	button::-moz-focus-inner { border: 0; }

	input, button, select, textarea { line-height: normal; }
`;

export default GlobalStyle;
