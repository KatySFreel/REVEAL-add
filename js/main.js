// skroll
$(window).scroll(function() {
	$('.header__wrapper').toggleClass('scroll', $(this).scrollTop() > 10);
});
/*HAMBURGER*/
window.addEventListener("resize", function() {
	if (window.matchMedia("(max-width: 766px)").matches) {
		$('.header__logo2').on('click', function() {
			$('.mob-menu__body').toggle();
		});
		$('.close').on('click', function() {
			$('.mob-menu__body').toggle();
		});
	} else {
		console.log("Экран более 767px");
	}
});
$(".footer__bottom").click(function(){            
	$('html, body').animate({
			scrollTop: $(".header").offset().top
		}, 2000);
});
	
/* SLIDER */
var mySwiper = new Swiper('.partners-container', {
	direction: 'horizontal',
	allowTouchMove: true,
	slidesPerView: 5,
	loop: true,
	autoplay: {
		delay: 1500
	}
});
$(function () {
	$(window).scroll(function() {
			$('.function__inner').each(function(){
				var imagePos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+650) {
					$(this).addClass("fadeInLeft");
				}
			});
		});
	$(window).scroll(function() {
		$('.function__img').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("fadeInRight");
			}
		});
	});
	$(window).scroll(function() {
		$('.function__img').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("fadeInRight");
			}
		});
	});
	$(window).scroll(function() {
		$('.shared-item__img').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("fadeInRight");
			}
		});
	});
	$(window).scroll(function() {
		$('.shared-item__inner').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("fadeInLeft");
			}
		});
	});
});
var mySwiper = new Swiper('.collective__container', {
	direction: 'horizontal',
	allowTouchMove: true,
	slidesPerView: 1,
	paginationClickable: true,
	loop: true,
	autoplay: {
		delay: 3000
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	}
});