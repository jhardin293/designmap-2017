//*///////////////////////////////////////*
//
//  Careers Page
//
//*///////////////////////////////////////*
if ($('body').hasClass('page-template-careers')) {
  var culture1 = new TimelineMax();

  culture1.fromTo('.culture-image-1', 1, {left:'-50%', top:'50%', rotation:-90, opacity:0, ease: Power4.easeOut}, {left:'25%', top:40, rotation:0, opacity:1});

  var box1 = new ScrollMagic.Scene({
                      triggerElement: ".culture-trigger",
                      duration: 400,
                      offset: -200
  })
  .setTween(culture1)
  .addTo(controller);

  var culture2 = new TimelineMax();

  culture2.fromTo('.culture-image-2', 1, {left:'100%', top: '50%', rotation:90, opacity:0}, {left:'60%', top:0, rotation:6, opacity:1});

  var box2 = new ScrollMagic.Scene({
                      triggerElement: ".culture-trigger",
                      duration: 400,
                      offset: -100
  })
  .setTween(culture2)
  .addTo(controller);

  var culture3 = new TimelineMax();

  culture3.fromTo('.culture-image-3', 1, {left:'-50%', top:'20%', rotation:-90, opacity:0, ease: Power4.easeOut}, {left:-70, top:-260, rotation:-4, opacity:1});

  var box3 = new ScrollMagic.Scene({
                      triggerElement: ".culture-image-1",
                      duration: 300,
                      offset: 0
  })
  .setTween(culture3)
  .addTo(controller);

  var culture4 = new TimelineMax();

  culture4.fromTo('.culture-image-4', 1, {left:'100%', top:'20%', rotation:45, opacity:0}, {left:'30%', top:-310, rotation:4, opacity:1});

  var box4 = new ScrollMagic.Scene({
                      triggerElement: ".culture-image-2",
                      duration: 280,
                      offset: -200
  })
  .setTween(culture4)
  .addTo(controller);
}

//*---------------------------------------*
//  Transition backgrounds on Slick carousels
//*---------------------------------------*

if ( postCarousel.length ) {

  var currentSlide = $( '.slick-current' ),
      currentSlideColor = currentSlide.attr( 'data-background-color' );

  // add color to parent
  postCarousel.css( 'background-color', currentSlideColor );

  // set text color
  if ( currentSlide.attr( 'data-text-color' ) === 'Light' ) {
    postCarousel.attr( 'data-text-color', 'light' );
  } else {
    postCarousel.attr( 'data-text-color', 'dark' );
  }

  // On before slide change
  slider.on( 'beforeChange', function( event, slick, currentSlide, nextSlide ) {

    var prepSlide = $( '.slick-slide[data-slick-index=' + nextSlide + ']' ),
        prepColor = prepSlide.attr( 'data-background-color' );

    // add color to parent
    postCarousel.css( 'background-color', prepColor );

    // set text color
    if ( prepSlide.attr( 'data-text-color' ) === 'Light' ) {
      postCarousel.attr( 'data-text-color', 'light' );
    } else {
      postCarousel.attr( 'data-text-color', 'dark' );
    }

  });
}


// page header screen
var pageScreen = (function() {

    var body = $('body'),
        header = $( '.page-header' ),
        group = $( '.page-header-group' ),
        //logo = $( '.logo-branding' ),
        //blurb = $( '.page-header-copy' ),
        //nav = $( '.page-header-nav' ),
        isAnimating = false,
        transEndEventNames = {
          'WebkitTransition' : 'webkitTransitionEnd',
          'MozTransition' : 'transitionend',
          'OTransition' : 'oTransitionEnd',
          'msTransition' : 'MSTransitionEnd',
          'transition' : 'transitionend'
        },    
        // transition end event name
        transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
        // support css transitions
        supportTransitions = Modernizr.csstransitions;

    function init() {
        initEvents();
    }

    function initEvents() {

      // toggle screen
      body.on( 'click', '#trigger--screen', function() {

          if ( header.is( '.expanded' ) ) {

            group.removeClass( 'intro' );
            header.removeClass( 'expanded' );

            group.on( transEndEventName, function( event ) {
              setTimeout(function(){

              }, 500);
            });

          }
      });

    }

    return { init : init };

})();



        /*
        var mapComponent, mapOptions = [{
                stylers: [{
                    saturation: -100
                }]
            }],
            mapCoords = [
                [37.760085937760614, -122.41213694214821],
                [37.7600753352318, -122.41231262683868],
                [37.76026246964176, -122.41232804954052],
                [37.76028897589385, -122.41183049976826],
                [37.760152203531156, -122.41182044148445],
                [37.76013842025578, -122.41214163601398]
            ];
        mapComponent = new GMaps({
            el: "#map",
            zoom: 16,
            width: 500,
            height: 500,
            lat: 37.760185,
            lng: -122.412087,
            zoomControl: !0,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL
            },
            panControl: !0,
            streetViewControl: !0,
            mapTypeControl: !0
        }), mapComponent.addMarker({
            lat: 37.760185,
            lng: -122.412087,
            title: "Marker with InfoWindow",
            infoWindow: {
                content: "<b>DesignMap</b><p>700 Alabama Street<br>San Francisco, CA 94110<br>(415) 357-1875"
            },
            icon: "https://www.designmap.com/wordpress/wp-content/themes/designmap_2015/library/images/mapmarker.png"
        }), mapComponent.addStyle({
            styledMapName: "Styled Map",
            styles: mapOptions,
            mapTypeId: "map_style"
        }), mapComponent.setStyle("map_style"), polygon = mapComponent.drawPolygon({
            paths: mapCoords,
            strokeColor: "#bd7f80",
            strokeOpacity: 1,
            strokeWeight: 1,
            fillColor: "#d9c0c1",
            fillOpacity: .5
        });
        */


    // init page screen
    if ( screen.length ) {
      // pageScreen.init();
    }

   