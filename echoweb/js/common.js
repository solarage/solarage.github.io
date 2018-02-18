
var modalBtn = document.getElementById('modal-close');
modalBtn.onclick = function closeModal() {
	jQuery.fancybox.close()
};



$(document).ready(function() {

	$(".auth_buttons").click(function(){
		$(".auth_buttons").next().slideToggle();
	});

	$(".main_menu_button").click(function(){
		$(".main_menu ul").slideToggle();
	});


	//Preloader
	//
	var $preloader = $('#page-preloader');
 	$preloader.delay(500).fadeOut('slow');


	//Попап менеджер FancyBox
	//Документация: http://fancyapps.com/fancybox/3/docs/
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();


	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$(".scroll").click(function() {
		$.scrollTo($(".main_footer"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: https://owlcarousel2.github.io/OwlCarousel2/
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		loop:true,
		nav:true,
		margin:10,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},            
			960:{
				items:2
			},
			1200:{
				items:3
			}
		}
	});
	owl.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY>0) {
			owl.trigger('next.owl');
		} else {
			owl.trigger('prev.owl');
		}
		e.preventDefault();
	});
	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("a[href='#top']").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 1100);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});