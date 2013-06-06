/*! Posterfill - Responsive poster images for videos. Author: Lewis Nyman | Credits: Scott Jehl, Filament Group, 2012 | License: MIT/GPLv2 */

(function( w ){

	// Enable strict mode
	"use strict";

	w.picturefill = function() {
		var videos = w.document.getElementsByTagName( "video" );

		// Loop the videos
		for( var i = 0, il = videos.length; i < il; i++ ){
				var posters = videos[ i ].getElementsByTagName( "div" ),
					matches = [];

				// See if which posters match
				for( var j = 0, jl = posters.length; j < jl; j++ ){
					var media = posters[ j ].getAttribute( "data-media" );
					// if there's no media specified, OR w.matchMedia is supported
					if( !media || ( w.matchMedia && w.matchMedia( media ).matches ) ){
						matches.push( posters[ j ] );
					}
				}

			if( matches.length ){
				videos[ i ].poster =  matches.pop().getAttribute( "data-poster" );
			}
		}
	};

	// Run on resize and domready (w.load as a fallback)
	if( w.addEventListener ){
		w.addEventListener( "resize", w.picturefill, false );
		w.addEventListener( "DOMContentLoaded", function(){
			w.picturefill();
			// Run once only
			w.removeEventListener( "load", w.picturefill, false );
		}, false );
		w.addEventListener( "load", w.picturefill, false );
	}
	else if( w.attachEvent ){
		w.attachEvent( "onload", w.picturefill );
	}

}( this ));
