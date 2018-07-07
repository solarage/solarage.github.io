
//Menu

menu.onclick = function	openMenu() {
	var x = document.getElementById("myTopnav");

	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

//

if (document.querySelector("BODY").dataset.title === "mainPage") {

	//Preloader

	document.body.onload = function() {
		setTimeout(function() {
			var preloader = document.getElementById('page-preloader');
			if(!preloader.classList.contains('done')) {
				preloader.classList.add('done');
			}
		}, 1000);
	}


	//Carousel

	var slideIndex = 1;
	showSlides(slideIndex);

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	function showSlides(n) {
		var i;
		var slides = document.getElementsByClassName("mySlides");
		var dots = document.getElementsByClassName("dot");

		if(n > slides.length) {
			slideIndex = 1;
		}
		if(n < 1) {
			slideIndex = slides.length;
		}
		for(i=0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		for (i=0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace("active", "");
		}
		slides[slideIndex-1].style.display = "block";
		dots[slideIndex-1].className += "active";
	}

}

