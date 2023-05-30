document.addEventListener( 'DOMContentLoaded',showViewportSize , false );

// Show viewport size
function showViewportSize () {

	let vw = window.innerWidth;
	let vh = window.innerHeight;
	let viewportSize = vw + 'x' + vh;

	document.getElementById( 'resolution' ).innerHTML = viewportSize ;

	window.addEventListener( 'resize', function() {

		let vwResized = window.innerWidth;
		let vhResized = window.innerHeight;
		let viewportResized = vwResized + 'x' + vhResized;

		document.getElementById( 'resolution' ).innerHTML = viewportResized ;
		
	});

}