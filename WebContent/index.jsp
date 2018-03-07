<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
<meta charset="utf-8">

<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
	type="text/css">
<link rel="stylesheet"
	href="https://v40.pingendo.com/assets/4.0.0/default/theme.css"
	type="text/css">
<title>World News</title>
<link rel="stylesheet" href="css/style.css">
</head>


<!-- loading homepage -->
<body class="text-secondary" onload="worldNewsHome()">
	<nav class="navbar navbar-expand-md bg-secondary navbar-dark ">
	<div class="container-fluid">
		<div onclick="worldNewsHome()">
			<a class="navbar-brand justify-content-start" href="#">WORLD NEWS</a>
		</div>
		<button class="navbar-toggler navbar-toggler-right" type="button"
			data-toggle="collapse" data-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent" aria-expanded="true"
			aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto ">
				<li class="nav-item" onclick="tech()"><a
					class="nav-link text-white" href="#"><i><span
							style="font-style: normal;">TECH</span></i></a></li>

				<li class="nav-item" onclick="business()"><a
					class="nav-link text-white" href="#"><i><span
							style="font-style: normal;">BUISINESS</span></i></a></li>

				<li class="nav-item " onclick="sports()"><a
					class="nav-link text-white" href="#"><i><span
							style="font-style: normal;">SPORTS</span></i></a></li>

				<li class="nav-item" onclick="favourites()"><a
					class="nav-link text-white" href="#"><i><span
							style="font-style: normal;">Favourites</span></i></a></li>
				<li class="nav-item" onclick="aboutUs()"><a
					class="nav-link text-white" href="#"><i><span
							style="font-style: normal;">About us</span></i></a></li>

			</ul>
			<form class="form-inline ">
				<input class="form-control mr-2" id="searchInput" type="text"
					placeholder="Search">
				<button class="btn btn-primary" type="button" onclick="searchHandler()">Search</button>
			</form>

		</div>
	</div>
	</nav>




	<div class="py-5">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
<!-- 				dynamic box for loading different api -->
					<div class="row" id="msg"></div>
				</div>
			</div>
			<div class="row"></div>


			<script src="script/mainScript.js"></script>
			<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
				integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
				crossorigin="anonymous"></script>
			<script
				src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
				integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
				crossorigin="anonymous"></script>
			<script
				src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
				integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
				crossorigin="anonymous"></script>
</body>

</html>