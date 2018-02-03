//=require jquery.min.js

// to inlude bootstrap plugins add "=" sign below
// require javascripts/bootstrap/*.*
//=require javascripts/bootstrap.min.js

//=require slick.min.js

;(function($){

	var header = $(".ba-header"),
  scrollTop;

  window.addEventListener('scroll', fixHeader);

  function fixHeader() {
    scrollTop = window.pageYOffset;

		if (scrollTop >= 50) {
      header.addClass('ba-stick');
    } else{
      header.removeClass('ba-stick');
    }
  }

  fixHeader();

	// slow scroll start
	$('a[href*="#"]').on('click', function(){
		event.preventDefault();
		$('body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 400);
	});
//slow scroll end

// map function start
function initMap() {
	var mapCenter = {lat: -7.962774, lng: 112.618478};
	var mapDiv = document.getElementById('ba-map');
	if(mapDiv === null) return;

	var map = new google.maps.Map(document.getElementById('ba-map'), {
			zoom: 14,
			center: mapCenter,
			disableDefaultUI: true
	});
}

window.onload = initMap;
//markers function end

//centerMap function start
	function centerMap($markers, map) {
		if ($markers.length == 1) {
			var lat = $markers.data('lat');
			var lng = $markers.data('lng');
			var latLng = new google.maps.LatLng( lat, lng );
			map.setCenter(latLng);
		} else {
			var bounds = new google.maps.LatLngBounds();
			$markers.each( function() {
				var lat = $(this).data('lat');
				var lng = $(this).data('lng');
				var latLng = new google.maps.LatLng( lat, lng );
				bounds.extend(latLng);
			});
			map.fitBounds(bounds);
		}
	}
//centerMap function end

//slider start & create map
	$(window).on('load', function(){


		$('.ba-works-slider').slick({
			dots: false,
			arrows: true,
			slide: '.ba-works-slide',
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			autoplay: true,
			// responsive: [
			//   {
			//     breakpoint: 1024,
			//     settings: {
			//       slidesToShow: 3,
			//       slidesToScroll: 3,
			//       infinite: true,
			//       dots: true
			//     }
			//   },
			//   {
			//     breakpoint: 600,
			//     settings: {
			//       slidesToShow: 2,
			//       slidesToScroll: 2
			//     }
			//   },
			//   {
			//     breakpoint: 480,
			//     settings: {
			//       slidesToShow: 1,
			//       slidesToScroll: 1
			//     }
			//   }
			//   // You can unslick at a given breakpoint now by adding:
			//   // settings: "unslick"
			//   // instead of a settings object
			// ]
			prevArrow: '.ba-slider--prev',
			nextArrow: '.ba-slider--next'
		});

		$('.ba-team-slider').slick({
			dots: false,
			arrows: false,
			slide: '.ba-team__box',
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			infinite: true,
			autoplay: true,
			//autoplaySpeed: 300,
			centerPadding: '50px',
			responsive: [
			  {
			    breakpoint: 768,
			    settings: {
			      slidesToShow: 2,
			      slidesToScroll: 1
			    }
			  },
			  {
			    breakpoint: 480,
			    settings: {
			      slidesToShow: 1,
			      slidesToScroll: 1
			    }
			  }
			],
			prevArrow: '.ba-team-arrow--prev',
			nextArrow: '.ba-team-arrow--next'
		});


		createMap();
	});

})(jQuery);






















