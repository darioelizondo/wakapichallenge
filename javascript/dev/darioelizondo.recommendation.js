document.addEventListener( 'DOMContentLoaded', sliderRecommendation(), false );
document.addEventListener( 'DOMContentLoaded', openPlant(), false );
document.addEventListener( 'DOMContentLoaded', closePlant(), false );
document.addEventListener( 'DOMContentLoaded', successMessage(), false );

// Init slider
function sliderRecommendation() {

		// Define variables
		const slider = document.querySelector( '.recommendation__slider' );
		let sliderControl = false;
		let initSwiper;

		// Slider
		function initSlider() {

			// Init Swiper on mobile and destroy on desktop
			if ( window.innerWidth <= 1024 ) {

				if ( !sliderControl ) {

					sliderControl = true;

					initSwiper = new Swiper( slider, {
						slidesPerView: 2.2,
						spaceBetween: 13,
						loop: true,
						breakpoints: {
				          768: {
				            slidesPerView: 3.2,
				          },
				        },
					});

				}

			// If window > 1024px destroy slider
			} else if ( sliderControl ) {

				initSwiper.destroy( true, true );
				sliderControl = false;

			}
		}

		// Keep an eye on viewport size changes
		window.addEventListener( 'resize', initSlider );

		// Init slider
		initSlider();

}

// Open plant
function openPlant() {

	let plants = document.querySelectorAll( '.recommendation__link' );
	let modalPlant = document.getElementById( 'modalPlant' );
	let closeLink = document.getElementById( 'linkBack' );
	let profile = document.getElementById( 'profile' );

	plants.forEach( ( plant ) => {

		plant.addEventListener( 'click', () => {

			modalPlant.classList.add( 'active' );
			profile.classList.remove( 'active' );
			closeLink.classList.add( 'active' );

			return false;

		});

	});

}

// Close plant
function closePlant() {

	let closeLink = document.getElementById( 'linkBack' );
	let modalPlant = document.getElementById( 'modalPlant' );
	let profile = document.getElementById( 'profile' );
	let message = document.getElementById( 'message' );

	closeLink.addEventListener( 'click', () => {

		closeLink.classList.remove( 'active' );
		modalPlant.classList.remove( 'active' );
		message.classList.remove( 'active' );
		profile.classList.add( 'active' );

		return false;

	});

}

// Success message
function successMessage() {

	let addPlant = document.getElementById( 'addPlant' );
	let message = document.getElementById( 'message' );

	addPlant.addEventListener( 'click', () => {

		message.classList.add( 'active' );

		return false;

	});

}