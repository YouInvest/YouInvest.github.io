var i = 0;
function fuckthis() {
	var images = ['img/menu-mobile-close.png', 'img/menu-mobile.png'];
	$('.menu-nav > img').attr('src' , images[i]);
	$('.wrap-2').css('display' , 'none');
	$('header').css('backgroundColor' , '#1A2F44');
	$('.menu-header').css('display' , 'block');

		i++;
			if (i>1) {
				$('.wrap-2').css('display' , 'block');
				$('.menu-header').css('display' , 'none');
				$('header').css('backgroundColor' , 'unset');
	
	
			i = 0;
		}
}

if($(window).width() > 1170) {
	$('.menu-header').css('display' , 'none');
}


$(function() {
	'use strict';
	
	/* фиксация шапки при скролле страницы
	------------------------------------------------------- */
	$(document).on('scroll', function() {
		var $document_scroll = $(this).scrollTop();
        if($document_scroll > 600) {
            $('#js-menu').addClass('fixed');
        } else {
            $('#js-menu').removeClass('fixed');
        }
    });
	
	
	/* Слайдеры
	------------------------------------------------------- */
	$('.js-owl-carousel').owlCarousel({
		loop: true,
		dots: false,
		nav: true,
		navText: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path></svg>', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg>'],
		margin: 0,
		autoplay: true,
		responsive: {
            0:{
                items: 1
            },
			750: {
                items: 2
            },
            970: {
                items: 3
            },
			1170: {
                items: 4
            }
        }
	});
	
	
	/* Навигация по странице
	------------------------------------------------------- */
	$('#js-menu-open').click(function () {
		$('#js-nav').addClass('nav-open');
		return false;
	});
	
	
	$('#js-menu-close').click(function () {
		$('#js-nav').removeClass('nav-open');
		return false;
	});
	
	
	$(function(){
		$(document).click(function(event) {
			if ($('#js-nav').hasClass('nav-open')) {
				if ($(event.target).closest('#js-nav').length) { return; }
				$('#js-nav').removeClass('nav-open');
				event.stopPropagation();
			}
		});
	});
	
	
	$('.js-get-section').on('click', function(){
        var $scroll = $($(this).data('section')).offset().top;
        $('html, body').animate({
            scrollTop: $scroll - 80
        }, 500);
		$('#js-nav').removeClass('nav-open');
		$('#page').removeClass('form-open');
		return false;
    });
	
	
	/* Модальные окна
	------------------------------------------------------- */
	$('.js-open-modal').on('click', function(){
		var $modal = $($(this).data('modalId'));
		$('#page').addClass('form-open');
		$modal.show().removeClass('bounceOutDown').addClass('bounceInUp');
		return false;
	});
	
	
	$('.js-close').on('click', function(){
		var $modal = $($(this).data('modalId'));
		$modal.removeClass('bounceInUp').addClass('bounceOutDown');
		setTimeout(function() {
			$modal.hide();
			$('#page').removeClass('form-open');
		}, 700);
		return false;
	});
	
	
	$(function(){
		$(document).click(function(event) {
			if ($('.fs-box1').is(':visible')) {
				if ($(event.target).closest('.js-form').length) { return; }
				var $modal = $('.fs-box1:visible');
				$modal.removeClass('bounceInUp').addClass('bounceOutDown');

				setTimeout(function() {
					$modal.hide();
					$('#page').removeClass('form-open');
				}, 700);
				event.stopPropagation();
			}
		});
	});
	
	
	//диапазон
	$('.js-range').slider({
		range: 'min',
		animate: true,
		value: 1,
		min: 1,
		max: 5000000,
		slide: function(event, ui) {
			//update(6, ui.value); //вызываем функцию которая при изменении значения ползунка, меняет значение текстового поля
			//calcB() //вызываем функцию бизнес-калькулятора
		}
	});
	
	$('.slider-bonus-card').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows:false,
		dots:true

	});

	$('.slider-comment').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows:true,
		asNavFor: ".slider-comment-photo__block",
		nextArrow: "<img class ='arrow-slide arrow-slide-next' src='img/arrow-right.svg' alt='arrow-right'>",
		prevArrow: "<img class ='arrow-slide arrow-slide-prev' src='img/arrow-left.svg' alt='arrow-left'>"
	})

	$('.slider-comment-photo__block').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: ".slider-comment",
		focusOnSelect: true,
		responsive: [
		   {
		     breakpoint: 400,
		     settings: {
		       slidesToShow: 1,
		       slidesToScroll: 1,
		       infinite: true,
		       dots: true
		     }
		   }]
	})



	$('.menu-nav > img').click(function(){
		$('.menu-nav').toggleClass('menu-nav-close');	
	});


	//переключатель калькуляторов
	$('.js-switch').on('click', function() {
		var $this = $(this), //кнопка которую нажали
			$id = $this.data('id'); //id будущего активного калькулятора
		$('.js-switch').removeClass('active'); //удаляем стили переключателей
		$('.js-calc').removeClass('active'); //удаляем стили переключателей
		$this.addClass('active'); //навешиваем стили на нажатую кнопку
		$($id).addClass('active'); //навешиваем стили на активный калькулятор
		return false;
	});

	var heightSlidCont = $('.bonus-card-one').eq(0).css('height');
	$('.bonus-card').css('height' , heightSlidCont);
	
});