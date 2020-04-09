# Laravel React Server Side Rendering (LRSSR)

## Laravel 7.3.0 installed

	laravel new lrssr

## React scaffolding added 

	composer require laravel/ui --dev
	// Generate login / registration scaffolding...
	php artisan ui react --auth

## To compile fresh react scaffolding

	npm install && npm run dev

## Add spatie/laravel-server-side-rendering into composer.json file

	"require": {
        "spatie/laravel-server-side-rendering": "^0.2"
    },

	composer update

## Create ssr folder into storage/app folder

	mkdir ssr

## Add app-client.js and app-server.js file into resource/js folder

	// app-client.js
	import Example from './components/Example';
	
	render(
			<Example />,
		document.getElementById('example')
	);

	// app-server.js	
	import React from 'react';
	import ReactDOMServer from 'react-dom/server';
	import Example from './components/Example';

	const html = ReactDOMServer.renderToString(
		<div id="example">
			<Example />
		</div>
	);

	dispatch(html);

## Make comment on mentioned two lines into Example.js file

	// if (document.getElementById('example')) {
	//     ReactDOM.render(<Example />, document.getElementById('example'));
	// }

## Add bellow mentioned two lines into webpack.mix.js file

	.react('resources/js/app-client.js', 'public/js')
   	.react('resources/js/app-server.js', 'public/js')

## add bellow codeblock into welcome.blade.php file

	{!! ssr('js/app-server.js')
		->fallback('<div id="example"></div>')
		->render() !!}
