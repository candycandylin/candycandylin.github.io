(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

})(jQuery); // End of use strict




/** Used Only For Touch Devices **/
( function( window ) {
  
  // for touch devices: add class cs-hover to the figures when touching the items
  if( Modernizr.touch ) {

    // classie.js https://github.com/desandro/classie/blob/master/classie.js
    // class helper functions from bonzo https://github.com/ded/bonzo

    function classReg( className ) {
      return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;

    if ( 'classList' in document.documentElement ) {
      hasClass = function( elem, c ) {
        return elem.classList.contains( c );
      };
      addClass = function( elem, c ) {
        elem.classList.add( c );
      };
      removeClass = function( elem, c ) {
        elem.classList.remove( c );
      };
    }
    else {
      hasClass = function( elem, c ) {
        return classReg( c ).test( elem.className );
      };
      addClass = function( elem, c ) {
        if ( !hasClass( elem, c ) ) {
            elem.className = elem.className + ' ' + c;
        }
      };
      removeClass = function( elem, c ) {
        elem.className = elem.className.replace( classReg( c ), ' ' );
      };
    }

    function toggleClass( elem, c ) {
      var fn = hasClass( elem, c ) ? removeClass : addClass;
      fn( elem, c );
    }

    var classie = {
      // full names
      hasClass: hasClass,
      addClass: addClass,
      removeClass: removeClass,
      toggleClass: toggleClass,
      // short names
      has: hasClass,
      add: addClass,
      remove: removeClass,
      toggle: toggleClass
    };

    // transport
    if ( typeof define === 'function' && define.amd ) {
      // AMD
      define( classie );
    } else {
      // browser global
      window.classie = classie;
    }

    [].slice.call( document.querySelectorAll( 'ul.grid > li > figure' ) ).forEach( function( el, i ) {
      el.querySelector( 'figcaption > a' ).addEventListener( 'touchstart', function(e) {
        e.stopPropagation();
      }, false );
      el.addEventListener( 'touchstart', function(e) {
        classie.toggle( this, 'cs-hover' );
      }, false );
    } );

  }

})( window );