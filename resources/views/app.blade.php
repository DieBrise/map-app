<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<!-- CSRF Token -->
		<meta name="csrf-token" content="{{ csrf_token() }}">

		<title>Gokada App</title>

		<!-- Fonts -->
		<link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

		<link href="{{ mix('css/all.css') }}" rel="stylesheet">
	</head>
	<body>
		<div id="app" class="m-b-md"></div>

		<script src="{{ mix('js/app.js') }}"></script>
	</body>
</html>
