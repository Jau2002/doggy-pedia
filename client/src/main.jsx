/*
			       _..oo8"""Y8b.._
			     .88888888o.    "Yb.
			   .d888P""Y8888b      "b.
			  o88888    88888)       "b
			 d888888b..d8888P         'b
			 88888888888888"           8
			(88DWB8888888P             8)
			 8888888888P               8
			 Y88888888P     ee        .P
			  Y888888(     8888      oP
			   "Y88888b     ""     oP"
			     "Y8888o._     _.oP"
			       `""Y888boodP""'
 */

import axios from 'axios';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Create from './routes/Create';
import Home from './routes/Home';
import Landing from './routes/Landing';
import NotFound from './routes/NotFound';
import store from './store';

axios.defaults.baseURL =
	import.meta.env.VITE_APP_API || 'http://localhost:3001';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Landing />,
		index: true,
		errorElement: <NotFound />,
	},
	{
		path: '/home',
		element: <Home />,
	},
	{
		path: '/dog',
		element: <Create />,
	},
]);

const GlobalStyle = createGlobalStyle`
	@charset "UTF-8";

	@font-face {
		font-family: Lora;
		font-weight: 700;
		font-style: normal;
		src: url('../public/fonts/Lora/Lora-Bold.woff2') format('woff2');
		font-display: swap;
	}

	@font-face {
		font-family: Rubik;
		font-weight: 400;
		font-style: normal;
		src: url('../public/fonts/Rubik/Rubik-Regular.woff2') format('woff2');
		font-display: swap;
	}

	@font-face {
		font-family: Rubik;
		font-weight: 500;
		font-style: italic;
		src: url('../public/fonts/Rubik/Rubik-MediumItalic.woff2')
		format('woff2');
		font-display: swap;
	}

	:root {
		--primary-color: #393939;
		--secondary-color: #ececec;
		--typography-primary: helvetica, arial, sans-serif;
	}

	@media (prefers-color-scheme: dark) {
		:root {
			--primary-color: #ececec;
			--secondary-color: #393939;
		}
	}

	@media (prefers-contrast: high) {
		:root {
			--primary-color: #000;
			--secondary-color: #fff;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		* {
			animation: none !important;
			transition: none !important;
		}
	}

	* {
		margin: 0;
		padding: 0;
		border: 0;
		box-sizing: border-box;
		vertical-align: baseline;
	}

	img,
	picture,
	video,
	iframe,
	figure {
		max-width: 100%;
		width: 100%;
		display: block;
		object-fit: cover;
		object-position: center center;
	}

	a {
		display: block;
		text-decoration: none;
		color: inherit;
		font-size: inherit;
	}

	li {
		list-style-type: none;
	}

	html {
		scroll-behavior: smooth;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	a,
	p,
	span,
	strong,
	blockquote,
	i,
	b,
	u,
	em {
		font-size: 1rem;
		font-weight: inherit;
		font-style: inherit;
		text-decoration: none;
		color: inherit;
	}

	p a {
		display: inline;
	}

	blockquote::before,
	blockquote::after,
	q::before,
	q::after {
		content: '';
		content: none;
	}

	::selection {
		background-color: var(--primary-color);
		color: var(--secondary-color);
	}

	form,
	input,
	textarea,
	select,
	button,
	label {
		font-family: inherit;
		font-size: inherit;
		hyphens: auto;
		background-color: transparent;
		display: block;
		color: inherit;
		appearance: none;
	}

	table,
	tr,
	td {
		border-collapse: collapse;
		border-spacing: 0;
	}

	svg {
		width: 100%;
		display: block;
		fill: currentcolor;
	}

	body {
		min-height: 100vh;
		font-size: 100%;
		font-family: var(--typography-primary);
		color: var(--primary-color);
		background-color: var(--secondary-color);
		line-height: 1.5em;
		hyphens: auto;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-smooth: always;
	}
`;

const root = createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
			<GlobalStyle />
		</Provider>
	</React.StrictMode>
);
