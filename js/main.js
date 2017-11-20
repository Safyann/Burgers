$(document).ready(() => {

	const hamburger = $(".hamburger-menu-link")
	const hamburgerMenu = $('#hamburger-menu')

	hamburger.on("click", () => {

		if (hamburger.hasClass('hamburger_active')) {
      hamburger.removeClass('hamburger_active')
    } else {
      hamburger.addClass('hamburger_active')
    }
	  if (hamburgerMenu.hasClass("hamburger-menu_active")) {
	  	hamburgerMenu.removeClass("hamburger-menu_active")
	  } else {
	  	hamburgerMenu.addClass("hamburger-menu_active")
	  }
	})
})

$(document).ready(() => {

   $("[data-fancybox]").fancybox({
  });
})

$(document).ready(() => {

	$(".maincontent").onepage_scroll({
   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
   pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
});
})

$(document).ready(() => {
  $(".owl-carousel").owlCarousel({
		loop: true,
		items: 1,
		nav: true,
		navText: ["",""],
		navContainer: $(".burger-slider__controls")
	})
	$(".burger-slider__btn_next").on("click", e => {
		e.preventDefault()

		$(".burgers-slider").trigger('next.owl.carousel')
	})
	$(".burger-slider__btn_prev").on("click", e => {
		e.preventDefault()

		$(".burgers-slider").trigger('prev.owl.carousel')
	})
});

$(function () {
  $('.team-accordeon__name').on('click', e => {
    e.preventDefault()

		var $this = $(e.currentTarget),
				list = $this.closest('.team-accordeon'),
				item = $this.closest('.team-accordeon__item'),
				items = $('.team-accordeon__item', list);

		if (!item.hasClass('active')) {
      items.removeClass('active')
      item.addClass('active')
    } else {
      item.removeClass('active')
    }

  })
})

$(function () {
	$('.menu-acco__link').on('click', e => {
    e.preventDefault()

		var $this = $(e.currentTarget),
				list = $this.closest('.menu-acco'),
				item = $this.closest('.menu-acco__item'),
				items = $('.menu-acco__item', list);

		if (!item.hasClass('active')) {
      items.removeClass('active')
      item.addClass('active')
    } else {
      item.removeClass('active')
    }

  })
})

ymaps.ready(init);
  var myMap
	var myPlacemark

	function init(){
    myMap = new ymaps.Map("map", {
			center: [59.94203885, 30.31515229],
			zoom: 11
    });
		myMap.behaviors.disable('scrollZoom');

        myPlacemarkOne = new ymaps.Placemark([59.94583810, 30.38567458], {
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/icons/map-marker.svg'
        })

				myPlacemarkTwo = new ymaps.Placemark([59.97510474, 30.30877029], {
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/icons/map-marker.svg'
        })

				myPlacemarkThree  = new ymaps.Placemark([59.89906607, 30.32578752], {
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/icons/map-marker.svg'
        })

				myPlacemarkFour  = new ymaps.Placemark([59.90510183, 30.49140672], {
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/icons/map-marker.svg'
        })

    myMap.geoObjects
        .add(myPlacemarkOne)
				.add(myPlacemarkTwo)
				.add(myPlacemarkThree)
				.add(myPlacemarkFour)
  }
