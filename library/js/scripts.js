(function($) {
  //*///////////////////////////////////////*
  //
  //  onPageLoad, re-init scripts
  //
  //*///////////////////////////////////////*
  $.fn.onPageLoad = function(landing) {
    // if (document.body.classList.contains('home')) {
    //   $('.page__header').hide();
    // }
    var page = $('#page'),
        map = $('#map'),
        overlay = $('.page-overlay'),
        slider = $('.slick-slider'),
        packery = $('.packery--grid'),
        parallax = $('.parallax'),
        backgroundLoader = $('.loading-background'),
        postCarousel = $('.carousel--post'),
        teamPage = $('.page-template-team'),
        viewportAnimate = $('.viewport-animate'),
        modalLink = $('.modal-link');

    dropdownModule($); //temp not sure if need to be loaded here

    //*---------------------------------------*
    //  Load Background
    //*---------------------------------------*
    function loadBackground() {
      page.imagesLoaded( { background: backgroundLoader }, function() {
        backgroundLoader.addClass('background-loaded');
        revealPage();
      });
    }

    //*---------------------------------------*
    //  Reveal Page
    //*---------------------------------------*
    function revealPage() {
      // update meta tags
      setPageMeta();
      // show main content.
      overlay.fadeOut(750);
      // set active menu item
      $('.current-menu-item').addClass('active'); 
    }

    //*---------------------------------------*
    //  Set Page Meta
    //*---------------------------------------*
    function setPageMeta() {
      "use strict";
     
      var newDescription = $('.meta .seo_description').text();
      var newKeywords = $('.meta .seo_keywords').text();
        if(newDescription != "") {
            $('head meta[name="description"]').attr('content', newDescription);
        }
        if(newKeywords !== "") {
            $('head meta[name="keywords"]').attr('content', newKeywords);
        }

    }

    //*---------------------------------------*
    //  Clipboard.js
    //*---------------------------------------*
    const clipboard = new Clipboard('[data-clipboard]'); 

    // Change text onClick
    
    clipboard.on('success', function(e) {
      e.clearSelection();
      $('.copy-input-btn').html('Copied!');      
    });


    //*///////////////////////////////////////*
    //
    //  Page Header Homescreen + Mobile Menu
    //  https://tympanus.net/codrops/2017/03/23/expanding-bar-navigation-concept/
    //
    //*///////////////////////////////////////*
    var theader = new TabsNav(document.querySelector('.tabsnav'), {
        movable: 'single',
        layout: 'horizontal',
        animeduration: 1250,
        animeeasing: 'easeOutExpo',
        onOpenBarsUpdate: openScreenCallback,
        onOpenTab: function(idx, tab) {

          // Mobile Menu
          if (idx === 1) {

            // Show the back button after the tab is open.
            anime({
              targets: screenCloseCtrl,
              duration: 350,
              easing: 'easeOutExpo',
              scale: [0,1],
              opacity: {
                value: 1,
                duration: 350,
                easing: 'linear'
              }
            });

          } 

        },
        onCloseTab: function(idx, tab) {

          // Homepage
          if (document.body.classList.contains('home')) {
            document.querySelector('.homepage-proper').style.paddingTop = '0px';
          }

          headerCtrl.classList.remove('hide-nav');
        }
      }),

      // The content items and the screen close controls
      headerContentItems = [].slice.call(document.querySelectorAll('.tabscontent > .tabscontent__item')),
      headerNavItems = [].slice.call(document.querySelectorAll('.tabsnav > .tabsnav__item')),
      screenCloseCtrl = document.querySelector('.tabscontent > button.btn--back'),
      menuCtrl = document.querySelector('.dm-hamburger'),
      headerCtrl = document.querySelector('.page__header'),
      headerNavigation = [].slice.call(document.querySelectorAll('.header-navigation')),
      screenTab = document.querySelector('.screen-toggle'),
      menuTab = document.querySelector('.menu-toggle'),
      isContentShown = false, current;

      screenCloseCtrl.addEventListener('click', closeScreen);
      menuCtrl.addEventListener('click', toggleMenu);

    function openScreenCallback(anim, idx, tab) {

      // homescreen
      if (idx === 0) {
        // push content down to accomodate homescreen.
        var screenHeight = document.querySelector('.homescreen').clientHeight;
        document.querySelector('.homepage-proper').style.paddingTop = screenHeight + 'px';
      }

      // mobile menu
      if (idx === 1) {
        // Stop overflow on HTML
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
      }

      headerCtrl.classList.add('hide-nav');
      tab.classList.add('tabsnav__item--current');

      if( anim.progress > 95 && !isContentShown ) {
        isContentShown = true;
        current = idx;

        var contentItem = headerContentItems[idx],
            content;

        if (tab.classList.contains('menu-toggle')) {
          content = [].slice.call(contentItem.querySelectorAll('.column li'));

          // Hide the content elements.
          content.forEach(function(el) { el.style.opacity = 0; });

          // Show content item.
          contentItem.style.opacity = 1;
          contentItem.classList.add('tabscontent__item--current');
          
          // Animate content elements in.
          anime.remove(content);
          anime({
            targets: content,
            easing: 'easeOutExpo',
            duration: 800,
            delay: function(t,i) {
              return i*40;
            },
            translateY: function(t,i) {
              return [50+10*i,0];
            },
            opacity: {
              value: 1,
              duration: 800,
              easing: 'easeOutExpo'
            }
          });

        } else {
          content = contentItem.querySelector('.column');

          // Hide the content elements.
          content.style.opacity = 0;

          // Show content item.
          contentItem.style.opacity = 1;
          contentItem.classList.add('tabscontent__item--current');
          tab.classList.add('tabsnav__item--current');

          // Animate content elements in.
          anime.remove(content);
          anime({
            targets: content,
            easing: 'easeOutExpo',
            duration: 1500,
            translateY: function(t, i) {
              return [40,0];
            },
            opacity: {
              value: 1,
              duration: 1500,
              easing: 'easeOutExpo'
            }
          });
        }

      }
    }

    function closeScreen() {
      if( !theader.isOpen ) return;

      // Return overflow on HTML
      document.documentElement.style.overflow = "initial";
      document.body.style.overflow = "initial";

      var contentItem = headerContentItems[current],
          navItem = headerNavItems[current];

      if (current === 1) {
          content = [].slice.call(contentItem.querySelectorAll('.column li'));

          // Hide the content elements.
          anime.remove(content);
          // Animate content elements out.
          anime({
            targets: content,
            easing: 'easeOutExpo',
            duration: 600,
            delay: function(t,i,c) {
              return (c-i-1)*20;
            },
            translateY: function(t,i) {
              return [0,50+10*i];
            },
            opacity: {
              value: 0,
              duration: 100,
              easing: 'easeOutExpo'
            },
            update: function(anim) {
              if( anim.progress > 80 && isContentShown ) {
                isContentShown = false;
                // Close tab.
                theader.close();
              }
            },
            complete: function() {
              // Hide content item.
              contentItem.style.opacity = 0;
              contentItem.classList.remove('tabscontent__item--current');
              navItem.classList.remove('tabsnav__item--current');
            }
          });

      } else {

          content = contentItem.querySelector('.column');

          // Hide the content elements.
          anime.remove(content);
          // Animate content elements out.
          anime({
            targets: content,
            easing: 'easeOutExpo',
            duration: 1200,
            translateY: function(t,i) {
              return [0,30];
            },
            opacity: {
              value: 0,
              duration: 1200,
              easing: 'easeOutExpo'
            },
            update: function(anim) {
              if( anim.progress > 80 && isContentShown ) {
                isContentShown = false;
                // Close tab.
                theader.close();
              }
            },
            complete: function() {
              // Hide content item.
              contentItem.style.opacity = 0;
              contentItem.classList.remove('tabscontent__item--current');
              navItem.classList.remove('tabsnav__item--current');

              // fade in header navigation.
              anime.remove(headerNavigation);
              anime({
                targets: headerNavigation,
                duration: 500,
                opacity: {
                  value: 1,
                  duration: 500,
                  easing: 'linear'
                }
              });


            }
          });

      }

      // Hide back ctrl
      anime.remove(screenCloseCtrl);
      anime({
        targets: screenCloseCtrl,
        duration: 350,
        easing: 'easeOutExpo',
        scale: [1,0],
        opacity: {
          value: 0,
          duration: 350,
          easing: 'linear'
        }
      });
    }

    function toggleScreen() {
      screenTab.click();
    }

    function toggleMenu() {
      menuTab.click();
    }

    //*---------------------------------------*
    //  Headroom - page header scroll up/down
    //*---------------------------------------*
    if (!$('body').hasClass('home')) {
      var $header = document.querySelector('.page__header');

      // construct an instance of Headroom
      var headroom  = new Headroom($header, {
          "offset": 205,
          "tolerance": 5,
          "classes": {
            "initial": "animated",
            "pinned": "slideDown",
            "unpinned": "slideUp"
          }
      });
      // initialise Headroom
      headroom.init();
    }

    //*---------------------------------------*
    //  Viewport Animate
    //*---------------------------------------*
    if ( viewportAnimate.length ) {

      viewportAnimate.each(function() {

        $(this).onScreen({
            doIn: function() {
             $(this).addClass('in-view');
            },
            tolerance: 50
        });

      });
    }

    //*---------------------------------------*
    //  Animated Modals
    //*---------------------------------------*
    if ( modalLink.length ) {
      modalLink.each(function() {
        var $object = $(this);
        var link = $object.attr('id');
        $object.animatedModal({
          modalTarget: 'modal-' + link,
          color: 'white',
          animatedIn:'slideInUp',
          animatedOut:'slideOutDown'
        });
      });
    }

    //*---------------------------------------*
    //  Slick Slider
    //*---------------------------------------*
    if ( slider.length ) {
      slider.slick({
          infinite: true,
          fade: true,
          dots: true,
          prevArrow: '<svg class="icon icon-arrow-back"><use xlink:href="#icon-arrow-back"></use></svg>',
          nextArrow: '<svg class="icon icon-arrow-forward"><use xlink:href="#icon-arrow-forward"></use></svg>'
      });

      if (backgroundLoader.length) {
        loadBackground();
      } else {
        revealPage();
      }

    }

    //*---------------------------------------*
    //  Packery Grid
    //*---------------------------------------*
    if ( packery.length ) {
      var $grid = packery.imagesLoaded( function() {

        // init Packery after all images have loaded
        $grid.packery({
          gutter: '.packery-gutter',
          itemSelector: '.packery-item',
          percentPosition: true
        });

        // images loaded so fade in grid
        $grid.addClass('is-img-loaded');

        setTimeout(function() {
        
          $('.packery-item > div').each(function() {
          
            $(this).onScreen({
              doIn: function() {
                $(this).addClass('onScreen');
              },
              tolerance: 50
            });

          });

        }, 500);
      });
    }

    //*---------------------------------------*
    //  Parallax background images
    //*---------------------------------------*
    if (backgroundLoader.length && !slider.length && !packery.length) {
      loadBackground();
    }

    //*---------------------------------------*
    //  Hanging Punctuation
    //*---------------------------------------*
    var entryContent = document.querySelectorAll('.entry-content p, blockquote h4, blockquote p');
    if (entryContent) hangPunctuation(entryContent);

    //*---------------------------------------*
    //  Google Map
    //*---------------------------------------*
    if (map.length) {

        var myLatlng = {lat: 37.760212, lng: -122.411705}; 
        var mapOptions = {
          zoom: 15, 
          minZoom: 6,
          maxZoom: 18,
          zoomControl: true,
          center: {lat: 37.760212, lng: -122.411705},
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          scrollwheel: false,
          panControl: false,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          overviewMapControl: false,
          rotateControl: false,
          disableDefaultUI: true
          }       
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var service = new google.maps.places.PlacesService(map);
        var image = 'https://www.designmap.com/wordpress/wp-content/themes/designmap_2015/library/images/mapmarker.png';
        var marker = new google.maps.Marker({
          position: {lat: 37.760212, lng: -122.411705},
          map: map,
          title: 'DesignMap',
          icon: image
        }); 
        var contentString = '<b>DesignMap</b><p>700 Alabama Street<br>San Francisco, CA 94110<br>(415) 357-1875';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });        
        service.getDetails({
            placeId: 'ChIJ-R-vszB-j4ARZxEL51vWXfI'
          }, function(place, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location
              });
            }
          });

        google.maps.event.addDomListener(window, 'resize', function() { map.setCenter(myLatlng); });
        google.maps.event.addListener(marker, 'click', function() {
           infowindow.open(map,marker);
        });
        infowindow.open(map,marker);        
    }

    //*---------------------------------------*
    //  trigger revealPage() if not waiting on elements
    //*---------------------------------------*
    if (!slider.length || !packery.length || !backgroundLoader.length) {
      revealPage();
    }

    //*///////////////////////////////////////*
    //
    //  Homepage
    //
    //*///////////////////////////////////////*
    if (document.body.classList.contains('home')) {

      // fade out header navigation.
      anime.remove(headerNavigation);
      anime({
        targets: headerNavigation,
        duration: 500,
        opacity: {
          value: 0,
          duration: 500,
          easing: 'linear'
        }
      });

      // init screen.
      if( !theader.isOpen ) {
        screenTab.click();
      };

    }

    //*///////////////////////////////////////*
    //
    //  Team Page
    //
    //*///////////////////////////////////////*
    if ( teamPage.length ) {
      loadTeamPageScripts($);
    }

  };

}(jQuery));


jQuery(document).ready(function($) {

  'use strict';

  //*///////////////////////////////////////*
  //
  //  Smooth State
  //
  //*///////////////////////////////////////*
  var options = {
    prefetch : true,
    pageCacheSize: 5,
    scroll: false,
    blacklist: '.no-smoothState',
    onBefore: function($currentTarget, $container) {
      var target = $currentTarget[0].href,
          current = window.location.href;
      // console.log('Target: ' + target + ' ' + 'Current: ' + current);
      if (target === current) {
        return false;
      }
    },
    onStart: {
      duration: 1800,
      render: function($container) {

        // fade out main content
        $('.page-overlay').fadeIn(750, function() {

          if ($('.screen-toggle').hasClass('tabsnav__item--current') || $('.menu-toggle').hasClass('tabsnav__item--current')) {

            setTimeout(function(d) {
              // return to viewport top
              $('html, body').scrollTop(0);
            }, 1000);

          } else {
            // return to viewport top
            $('html, body').scrollTop(0);
          }
        });

        if ($('.screen-toggle').hasClass('tabsnav__item--current') || $('.menu-toggle').hasClass('tabsnav__item--current')) {
           $('.btn--back').click();
        }
      }

    },
    onReady: {
      duration: 0,
      render: function($container, $newContent) {

        // load new page content
        $container.html($newContent);

      }
    },
    onAfter: function($container) {
      $container.onPageLoad();
    }
  };
  var smoothState = $('#page').smoothState(options).data('smoothState');

  //*///////////////////////////////////////*
  //
  //  init scripts first time without Smooth State
  //
  //*///////////////////////////////////////*
  var landing = true; // initial page load, not ajax-loaded
  $('body').onPageLoad(landing);

});

//*///////////////////////////////////////*
//
//  Team page
//
//*///////////////////////////////////////*
function loadTeamPageScripts ($) {
  // loadTeamPage($)
  var libsPath = homeUrl.homeUrl + '/wp-content/themes/designmap-2016/library/js/libs/';

  $.when(
    $.getScript(libsPath + 'd3.min.js'),
    $.getScript(libsPath + 'lodash.js')
  ).then(
    function() {
      loadTeamPage($)
    }
  ).fail(
    function() {
      console.log('error');
    }
  )
}
function loadTeamPage ($) {
  //always the first view
  var currentView = 'resetToAll';
  var $mainVizContainer = $('.filters-and-viz');
  //Init modal
  $("#teamModal").animatedModal({'color': 'white', animatedIn:'slideInUp',
          animatedOut:'slideOutDown'});

  //*---------------------------------------*
  //  Header controlls
  //*---------------------------------------*
  $('#headerControls .team-view-options').click(function(e){
    e.preventDefault();
    currentView = e.currentTarget.id;

    // console.log(currentView,'view');
    //Handles the current view
    removeSelectedFilter();
    gridGraph.resizer();
    switch(currentView) {
      case 'resetToAll':
        $mainVizContainer.attr('data-state', 'resetToAll');
        gridGraph.updateGraph(mainTeamData, 'grid', 'refresh');
        networkGraph.removeGraph();
        break;
      case 'date':
        $mainVizContainer.attr('data-state', 'date');
        gridGraph.updateGraph(mainTeamData,'date');
        networkGraph.removeGraph();
        removeSelectedFilter();
        break;
      case 'slack':
        $('.graph-svg').remove();
        $mainVizContainer.attr('data-state', 'slack');
        networkGraph.startGraph(mainTeamData);
        break;
    }
  });

  //*---------------------------------------*
  // Client Controlls
  // TODO: Toggle active class
  // Extra Repeat proccess. Turn into function
  //*---------------------------------------*
  $('#filterByClient').on('click', function(e) {
    if (e.target.nodeName === "A") {
      var filteredData = [];
      var selection = e.target.text;

      //Filter main data based on selection
      _.each(mainTeamData,function(member, i) {
        if (_.indexOf(member.clients, selection) !== -1) {
          filteredData.push(member);
        }
      });

      $mainVizContainer.attr('data-state', 'client');
      //update d3 vis
      gridGraph.updateGraph(filteredData, 'client');
    }
  })

  $('#filterByRole').on('click', function(e) {
    if (e.target.nodeName === "A") {
      var filteredData = [];
      var selection = e.target.text;

      //Filter main data based on selection
      _.each(mainTeamData,function(member, i) {
        if (member['base-role'] === selection) {
          filteredData.push(member);
        }
      });
      $mainVizContainer.attr('data-state', 'client');
      //update d3 vis
      gridGraph.updateGraph(filteredData, 'client');
    }
  })

  //Selected toggle
  $('.teamFilter li').click(function(e) {
    $('.teamFilter li').not(this).removeClass('active');
    $(this).addClass('active');
  })
  function removeSelectedFilter () {
    $('.teamFilter li').removeClass('active');
  }

  // Abbreviation formator
  function getAbbreviation (name) {
    var nameSplit = name.split(' ');

    if(nameSplit.length === 1) {
      return nameSplit[0].charAt(0).join('');
    }
    else if (nameSplit.length === 2) {
      return [nameSplit[0].charAt(0), nameSplit[1].charAt(0)].join('');
    }else {
      return '';
    }
  };

  function getRandomChannelList (array) {
    //http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  function getBaseRole (role) {
    switch (role) {
      case 'Senior Designer':
        return 'Designer';
        break; 
      case 'Senior Researcher':
        return 'Researcher';
        break;
      case 'Office Manager':
        return 'Support';
        break;
      default:
        return role;
    }
  }

  //Truncate function
  function truncate(string,limit){
    if(string.length > limit){
      return string.substring(0,limit)+"...";
    }
    else {
      return string;
    }
  }
  //*---------------------------------------*
  // Modal Handler
  // TODO: lunch modal only when data is loded
  //*---------------------------------------*
  var clients
  var slack;
  var tenure;
  var bio;
  var randomChannels;
  function animateModal (person) {
    
    if (person.clients || person['slack-channels']) {
      clients = person.clients;
      slack = person['slack-channels'];
      randomChannels = getRandomChannelList(person['slack-channels']).splice(0,5);
      tenure = person.tenure;
      bio = person.bio;
    }else {
      clients = person.person.clients;
      slack = person.person['slack-channels'];
      randomChannels = getRandomChannelList(person.person['slack-channels']).splice(0,5);
      tenure = person.person.tenure;
      bio = person.person.bio;
    }

    function tenureFormated (tenure) {
      if (tenure > 1) {
        return tenure + ' years ';
      }else {
        return tenure + ' year ';
      }
    }

    $('.team-modal-name').text(person.name);
    $('.team-modal-role').text(person.role);
    $('.team-modal-img').attr('src', person.avatar);
    $('.team-modal-bio').text(bio);
    $('.team-modal-projects').empty();
    $('.team-modal-slack').empty();
    $('.team-modal-year span').text(tenureFormated(tenure));
    _.each(clients, function(client) {
      $('.team-modal-projects').append('<li>'+ client +'</li>');
    });
   _.each(randomChannels, function(channel) {
      $('.team-modal-slack').append('<li>'+ channel +'</li>');
    });
    function triggerModal () {
      $('#teamModal').trigger( "click" )
    }
    triggerModal();
  }


  var requestData = function () {
    var dataLocal = homeUrl.homeUrl + '/wp-content/themes/designmap-2017/library/js/';
    /*
      1. Make all api calls
      2. Provide data to main data obj
      3. Init data
    */

    // IMPORTANT gets User data from Wordpress
    // $.ajax({
    //   url: '/dm-wordpress/wp-json/wp/v2/users',
    //   type: 'GET',
    // })
    // .done(function(userData) {
    //   getTeamData(userData);
    // })
    // .fail(function() {
    //   console.log("error");
    // })

    // Team Data (from spreadsheet)
    // We could actually make the spreadsheet a live API
    getTeamData()
    function getTeamData () {
      d3.csv(dataLocal + 'team-data.csv',function (d) {
        var data = {
          'bio-tags': d['Bio Tags'],
          'facial-hair': d['Facial Hair'],
          'hometown': d['Hometown'].split(','),
          'industry': d['Industry'],
          'name': d['Name'],
          'first-name': d['Name'].split(' ')[0],
          'abbrev': getAbbreviation(d['Name']),
          'avatar': (d['Avatar'] ? d['Avatar'] : 'https://pixabay.com/static/uploads/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'),
          'personality-type': d['Personality Type'],
          'pet': d['Pet'],
          'previous-job': d['Previous Job'],
          'role': d['Role'],
          'base-role': getBaseRole(d['Role']),
          'bio': (d['Bio'] ? d['Bio'] : 'Needs bio'),
          'slack-channels': []
        }
        return data;
      },function (team) {
        clientData(team)
      });
    }

    // Client Data (from harvest)
    function clientData (team) {
      d3.csv(dataLocal + 'harvest-data.csv', function (d){
        d.name = d['first-name'] + ' ' +  d['last-name'];
        delete d['first-name'];
        delete d['last-name'];
        return d;
      }, function (d) {
        var clients = d;
       //Add clients to team members
        _.each(clients, function(client, i) {
          _.each(team, function(member, i) {
            if (member.name === client.name) {
              if (member.hasOwnProperty('clients')){
                if(_.indexOf(member.clients, client.client) === -1) {
                  member.clients.push(client.client);
                }
              }else {
                member.clients = [];
                member.clients.push(client.client);
              }
            }
          })
        })
      });
      slackData(team)
    }
    function slackData (team) {
      var channels,
      slackMembers;
      $.when(
        $.get('https://slack.com/api/channels.list?token=xoxp-2166015646-19720409713-42215959831-9e2f002b01&pretty=1', function (data) {
          channels = data.channels;
        }),
        $.get('https://slack.com/api/users.list?token=xoxp-2166015646-19720409713-42215959831-9e2f002b01&pretty=1', function (data) {
          slackMembers = data.members;
        })
      ).then(function() {
        _.each(team, function(member) {
          //Add slack id to member
          _.each(slackMembers, function (slackMember) {
            if (member.name === slackMember.real_name ) {
              member.slack_id = slackMember.id;
            }
          });
          //Add slack channel to memeber
          _.each(channels, function(channel) {
            if (channel.members.indexOf(member.slack_id) !== -1 ) {
              member['slack-channels'].push(channel.name);
            }
          });
        })
        hireDate(team);
      })
    }
    // Hire date (from hire date spreadsheet)
    function hireDate (team){
      d3.csv(dataLocal + 'hire-date.csv', function(d) {
        _.each(team, function(member) {
          _.each(d, function(person) {
            if (member.name === person.Name) {
               //member['hire-date'] = Date(person.Hired);
               member['hire-year'] = new Date(person.Hired).getFullYear();
               member['tenure'] = new Date().getFullYear() - member['hire-year'];
            }
          })
        });
       mainTeamData = team;
       gridGraph.drawGraph(team, 'grid');
       //TODO only call this when the browser is mobile
       teamPageMoblie(team);
      })
    }
  }
 requestData();

  //*---------------------------------------*
  //  Team Page Mobile
  //  
  //*---------------------------------------*
  var teamPageMoblie = function (team) {
    _.each(team, function(person) {
      switch(person['base-role']) {
        case 'Partner':
          renderPerson('partner', person);
          break;
        case 'Design Director':
          renderPerson('director', person);
          break;
        case 'Designer':
          renderPerson('designer', person);
          break;
        case 'Researcher':
          renderPerson('researcher', person);
          break;
        case 'Engineer':
          renderPerson('engineer', person);
          break;
        case 'Support':
          renderPerson('support',person);

      }
    })

    function renderPerson (role, person) {
      var member = d3.select('.role-group[data-role='+ role +']')
        .append('div')
        .attr('class', 'mobile-person')
        .on('click', function() {
          animateModal(person);
        })

      member.append('div')
        .attr('class', 'avatar')
        .append('img')
        .attr('src', person.avatar)

      member.append('p')
        .html(person['first-name'])

    }
  }
  //*---------------------------------------*
  //  Grid Graph
  //  @Controlls grid layout & group layout
  //*---------------------------------------*
  var gridGraph = ( function () {
     //TODO find out a better way to toggle between
     //display options
     var nodes,
      layout,
      group,
      node,
      nodeContainer,
      svg,
      labels,
      img,
      isTimelineRendered = false,
      timelineContainer,
      timeline,
      gridHeight = 695,
      timeLineHeight = 1320;

    function drawGraph (data, display) {

      //display options: grid, grouped;
      var data = data
      svg = d3.select('.vis-container')
        .append('svg')
        .attr('width', 900)

      group = svg
        .append('g')
      if (display === 'grid') {
        grid(data);
        svg.attr('height', gridHeight)
      } 
      resizer()
    }

    function grid (data) {
      layout = d3.layout.grid()
        .width($('.vis-container').outerWidth())
        // .height(1100)
        .height($('.vis-container').outerWidth() + 350)
        .radius(200)
        .align(0)
        .ease('back', .5);

      data.forEach(function(d) {
        layout.push(d)
      });
      render(layout.nodes(), 'grid');
    }

    function groupView (data, layout) {
      //Proccess data here and turn into group layout

      //grid properties
      var width = $('.vis-container').outerWidth();
      var height = 1000;
      var colWidth = 70;
      var rowHeight = 70;
      var marginTop = 280;
      var marginLeft = 200;
      var sectionPadding = 90;
      var labelTopOffset = 170;
      var pData = [];
      var grouped;

      svg.attr('height', timeLineHeight);


      if (layout === 'date') {
        grouped = _.groupBy(mainTeamData, 'hire-year');
      }
      var y0 = marginTop;

      //Creat grouped layout
      Object.keys(grouped)
        .sort()
        .forEach(function(key, groupIdx) {
          var ds = grouped[key];
          var x0 = marginLeft;

          pData.push({name: key, y: y0-labelTopOffset, x: 100, groupIndex: groupIdx, data: ds });

          ds.sort()
          .forEach( function (d) {
            if (x0 + colWidth > width) {
              x0 = marginLeft;
              y0 += rowHeight;
            }

            d.x = x0 - 45;
            d.y = y0 + 5;
            d.groupIndex = groupIdx;

            x0 += colWidth;
          });

          y0 += sectionPadding;
        });

      height = y0;

      // nodeContainer.remove();
      var fData = [];
      pData.forEach(function(d,i) {
        d.data.forEach(function(d,i) {
          fData.push(d);
        })
      });

      updateLabels(pData);
      render(fData, 'group');
    }

    function updateLabels (groups,data) {
      timelineContainer = svg.append('g')
        .attr('class', 'timelineContainer');


      timelineContainer.append('text')
        .attr('fill', '#333333')
        .attr('font-size', '10px')
        .attr('x', 13)
        .attr('y', 200)
        .style('opacity', 0)
        .text('Since')
        .transition()
        .duration(750)
        .style('opacity', 1)
        .attr('y', 286)


      timeline = timelineContainer.append('g')
        .attr('transform', 'translate(0,228)')
      var timelineCircle;
      var timeLineline;

      labels = timeline.selectAll('text').data(groups, function (d) { return d.name; });

      labels.enter()
        .append('text')
          .attr('y', function (d) { return d.y - 70; })
          .style('opacity', 0)
          .text(function (d) { return d.name })
          .transition()
            .duration(750)
            .attr('x', 0)
            .attr('y', function (d) { return d.y - 35; })
            .style('opacity', 1);

      // labels.exit()
      //     .transition()
      //     .style('opacity', 0)
      //   .remove();

      // labels
      //   .text(function (d) { return d.name })
      //   .transition()
      //     .duration(750)
      //     .attr('x', 0)
      //     .attr('y', function (d) { return d.y - 35; })
      //     .style('opacity', 1);


      timelineCircle = timeline.selectAll('circle').data(groups, function (d) { return d.name; });

      timelineCircle.enter()
        .append('circle')
          .attr('cy', function (d) { return d.y - 80; })
          .attr('r', 7.5)
          .attr('fill', '#666666')
          .style('opacity', 0);
      timelineCircle.exit()
          .transition()
          .style('opacity', 0)
        .remove();

      timelineCircle
        .transition()
          .duration(750)
          .attr('cx', 55)
          .attr('cy', function (d) { return d.y - 40; })
          .style('opacity', 1);

      // Todo Make dynamic
      timeline
        .append('line')
          .attr('x1', 55)
          .attr('x2', 55)
          .attr('y1', 1090)
          .attr('y2', 70)
          .style('stroke', '#666666')
          .style('stroke-width', 1)

      isTimelineRendered = true;
    }


    function interestView () {
      render([],'group');
    }

    function render (data, display) {
      var peopleCount = data.length;
      var nodeSizeScale = d3.scale.linear().domain([43,0]).range([30,60]);
      var nodeSize = nodeSizeScale(peopleCount);
      var imageSize = nodeSize * 2;
      var layoutSpacingScale = d3.scale.linear().domain([43,0]).range([200,300])
      var layoutSpacing = layoutSpacingScale(peopleCount);


      layout.radius(layoutSpacing);

      if (display === 'grid') {
        group.attr('transform', 'translate(-160,-10)');
      }else if (display === 'group') {
        group.attr('transform', 'translate(-47,13)');
      }
      // resizer()
      nodeContainer = group
        .selectAll('.node-container')
        .data(data)


      nodeContainer.enter()
        .append('g')
        .style('opacity', 0)
        .on('click', function(d) {
          animateModal(d);
        })
        .attr('class','node-container');


      nodeContainer.transition()
        .duration(500)
        .style('opacity', 1);

      node = nodeContainer
        .append('circle')
        .classed('node', true)
        .style('fill', 'rgb(151, 147, 147)')
        .attr('r', nodeSize)

      nodeContainer
        .append('text')
        .attr('y', 5)
        .attr('text-anchor', 'middle')
        .attr('fill', 'white')
        .text(function(d) {
          return d.abbrev;
        });

      var clipPath = svg
        .append('clipPath')
        .attr('id', 'circleClip')
      .append('circle')
        .classed('node', true)
        .attr('r', nodeSize)
        .attr('transform','translate('+ nodeSize +', '+ nodeSize +')')

      img = nodeContainer
        .append('svg:image')
        .attr('xlink:href', function(d) {return d.avatar})
        .attr("clip-path", "url(#circleClip)")
        .attr('transform','translate('+ -Math.abs(nodeSize) +','+ -Math.abs(nodeSize) +')')
        .attr('width', imageSize)
        .attr('height', imageSize)


      if (display === 'grid') {
        layout.update();
        layout.on('tick', function() {
          tick();
        });
      }

      if (display === 'group') {
        nodeContainer
          .transition()
          .duration(1000)
          .attr('transform', function (d) {
            return "translate("+ d.x + ", "+ d.y +")";
          })
          .style('opacity',1)
      }
    }


    function tick () {
      nodeContainer.attr('transform', function (d) {
        return "translate("+ d.x + ", "+ d.y +")";
      })

    }

    function updateGraph(data, display, action) {
      $('.timelineContainer').remove();
      $('#circleClip').remove();

      if (display === 'grid') {
        layout.nodes(data);
        svg.attr('height', gridHeight);
        nodeContainer.remove();
        render(layout.nodes(),'grid');
      }

      if(display === 'date') {
        groupView(data,'date');
      }

      if (display === 'client') {
        clientRender(data);
      }
    }

    function clientRender(data) {
      $('.client-container').empty();
      _.each(data, function(person, idx) {
        $('.client-container').append('<div class="team-member" data-idx='+idx+'></div>');
        var $container = $('.client-container .team-member[data-idx='+idx+']');
        $container.append('<div class="avatar"><img src='+ person.avatar +'></div>');
        $container.append('<p class="role">'+ person.role +'</p>');
        $container.append('<h6>'+ person.name +'</h6>');
        $container.append('<div class="bio"><p>'+ truncate(person.bio, 162) +'</p></div>');
        $container.append('<a class="more" href="#">More<span>></span></a>')
          .on('click', function() {
            animateModal(person);
        });
      });
      
      setTimeout(function(d) {
        $('.team-member').addClass('show');
      }, 10);


      function teamMember (person) {
        $('.team-modal-name').text(person.name);
        $('.team-modal-img').attr('src', person.avatar);
        $('.team-modal-bio').text(person.bio);
        $('.team-modal-year span').text(person.tenure);

        _.each(person.clients, function(client) {
          $('.team-modal-projects').append('<p>'+ client +'</p>');
        });
       _.each(person['slack-channels'], function(channel) {
          $('.team-modal-slack').append('<p>'+ channel +'</p>');
        });
      }
    }

    function resizer () {
      if (currentView === 'resetToAll'){
        handleBrowserWidth()
        $(window).on('resize', function() {
            handleBrowserWidth()
        })
      }
    }
    function handleBrowserWidth () {
      if (currentView === 'resetToAll'){

        var browserWidth = $(window).width(),
        mobileWidth = 768,
        mediumWidth = 992;

        browserWidth = $(window).width();
        if (browserWidth > mobileWidth && browserWidth < mediumWidth) {
          //Tablet Size
            layout
                .height(700)
                .update();

            group.attr('transform', 'translate(-50,23)');
            svg.attr('height', 755)

        }
        if(browserWidth > mediumWidth){
          //Large desktop 
            layout
                .height(1099)
                .update();

            group.attr('transform', 'translate(-160,-10)');
            svg.attr('height', gridHeight);
          // layout.height($('.vis-container').outerWidth() + 350)
          //       .update();
        }
      }
    }
    return {
      drawGraph: drawGraph,
      groupView: groupView,
      updateGraph: updateGraph,
      animateModal: animateModal,
      resizer: resizer,
    }
  })();

  var networkGraph = (function () {
    var svg;
    var width = $('.graph-container').outerWidth();
    var height = 1700;
    var radius = 30;
    var imageSize = radius * 2;
    var img;
    var icon;
    var nodeContainer;

    function startGraph (data) {
      /*
        @Purpouse: Transorm Data so that it is ready for render Functions
      */
      //create a array keyed by slack channel
      // the value should have a list of associated people
      //EX. Data structure
      /*
       {
        nodes: [
          { name:'cooking',
            group: 1,
            type: 'channel',
          }
        ],
        links: [{
          'source': 'Justin',
          'target': 'cooking'
        }]
       }
      */


      var selectedChannels = ['gaming', 'arthropods', 'gross', 'yoga_meditation','restaurant-explorers', 'music', 'biking', 'cooking', 'artsandcrafts', 'rock-climbing'];

      var graphData = {
        nodes: [],
        links: []
      };

      var channelsList = [];


      _.each(selectedChannels, function(selectedChannel, scidx) {
        //Add selectedChannels to graphData nodes
        var channel = {
          'name' : selectedChannel,
          'type' : 'channel',
          'id' : scidx
        }
        graphData.nodes.push(channel);
        channelsList.push(channel)
      });

      var nodeIdx = selectedChannels.length - 1; //node index tracker. Start at the number of selectedChannels;
      //Loop through all team members
      _.each(data, function(member,midx) {
        _.each(selectedChannels, function(selectedChannel, scidx) {
          //If slack channel exists in selected channels
          if(member['slack-channels'].indexOf(selectedChannel) !== -1) {
            nodeIdx++
            var node = {
              'name': member.name,
              'type': 'person',
              'person': member,
              'avatar': member.avatar,
              'id' : nodeIdx, //dont want to select the slack channels
            }
            graphData.nodes.push(node);

            var link = {
              'source': nodeIdx,
              'target': scidx,
            }
            graphData.links.push(link);

          }
        });
      });

      drawGraph(graphData, channelsList);
    }

    function drawGraph (graphData, channelsList) {
      // console.log(graphData);
      // var tip = d3.tip()
      //   .attr('class', 'tool-top-container')
      //   .offset([-10, 0])
      //   .html(function(d) {
      //       return "<div class='tool-tip'><div class='tip--av-title'><img src="+d.avatar+"><div class='tip--title'><h3>"+ d.person.role +"</h3><h2>"+ d.name + "</h2></div></div><div class='tip-content'><p>"+d.person.bio+"</p></div></div>";
      // })
      var center = width / 2;
      //Init the main svg container
      svg = d3.select('.graph-container')
        .append('svg')
        .attr('class','graph-svg')
        .style('display', 'block')
        .attr('width', width)
        .attr('height', height);

      var container = svg.append('g')
        .attr('class', 'slack-wrapper')
        .attr('transform', 'translate(0,0)')


      var force = d3.layout.force()
        .charge(-620)
        .linkDistance(160)
        .gravity(0.14)
        .size([width, height]);

      force.nodes(graphData.nodes)
        .links(graphData.links)
        .start();

      var link = container.selectAll('.link')
        .data(graphData.links)
        .enter().append('line')
        .attr('class', 'link')
        .attr("class", "link-inactive")
        .style('stroke-width', 2);

      nodeContainer = container.selectAll(".node-container")
        .data(graphData.nodes)
        .enter().append("g")
        .call(force.drag)
        .attr("class", function(d) {
          return "not-infocus";
        })
        .attr("data-type", function(d) {
          if(d.type === 'channel') {
            return 'channel';
          }else {
            return 'person';
          }
        })
        .on('click', function (d) {
          if (d.person) {
            animateModal(d);
          }
        })
        .on('mouseover',mouseover)
        .on('mouseout', mouseout);

      var node = nodeContainer
        .append('circle')
        .attr("class", "node")
        .attr("r", function (d) {
          if(d.type === 'channel') {
            return 60;
          }else {
            return radius;
          }
        })
        .attr('data-name', function(d) {
          return d.name;
        })
        .attr('data-id', function (d) {
          return d.id
        })
        .style('fill', function (d) {
          if(d.type !== 'channel') {
            return '#FFFFFF';
          }
        })

      function  mouseover(d) {
        automaticFocus.stop();
        setFocus(d);
      }

      function  mouseout(d) {
        automaticFocus.start();
        unFocus(d);
      }

      function setFocus(d) {
        nodeContainer.attr('class', function(o) {
          return isConnected(d,o) ? 'node-active' : 'not-infocus';
        })
         
        nodeContainer.attr('transform', function (o) {
          if (o.type === 'channel' && isConnected(d,o)) {
            // return "translate("+ 620 + ", "+ 700 +")";
          }else {
          }
            return "translate("+ o.x + ", "+ o.y +")";
        })

        // force.resume();

          // labels.attr('transform', function (d) {
          //   var x = d.x - 2
          //   var y = d.y + 23
          //   return "translate("+ x + ", "+ y +")";
          // })


        link.attr('class', function(o) {
          return isLinkForNode(d,o) ? 'link-active' : 'link-inactive';
        })

        node.attr('r', function (o) {
          if (o.type === 'channel' && isConnected(d,o)) {
            return 80;
          } else if (o.type === 'channel') {
            return 60;
          } 

          if (o.type === 'person') {
            return 30;
          }

        })
      }

      var linkedByIndex = {};
      graphData.links.forEach(function(d) {
        linkedByIndex[d.source.index + "," + d.target.index] = true;
      });

      /*
        - Get list of channels
        - for every 3secs pass new channel to mouseover
        - set focusedNode to equal selected node
        - Create a a increamenter function
        - for ever 3 secs increament the value
        - Once value equals 10 sect index to 0
        - Use the idx to selecte the channel in the channels array
        - pass that object into setFocus
        - pass the idx-1 (the previous selected channel) to mouse out

        - Start Fade timer
        - When user hovers over node. stop Fade timer
        - When user hovers out. start Fade timer
      */
      var automaticFocus = (function () {
        var idx = 0,
        prevIdx = 9;
        var focus;
        

        function start() {
          focus = setInterval(function() {
            setFocus(graphData.nodes[idx]);
            if (idx !== 9) {
              idx++
              prevIdx = idx -1;
            }else {
              idx = 0;
              prevIdx = 9;
            }
          }, 2000)
        }

        function stop() {
          clearInterval(focus);
        }
        
        return {
          start: start,
          stop: stop
        }

      }())
      automaticFocus.start();
       

      function unFocus(d) {
        nodeContainer.attr('class', 'not-infocus');
        link.attr('class', 'link-inactive');

      }


      function isConnected(a,b) {
        return linkedByIndex[a.index + "," + b.index] || linkedByIndex[b.index + "," + a.index] || a.index == b.index;
      }

      function isLinkForNode(node, link){
      	return link.source.index == node.index || link.target.index == node.index;
      }


      var clipPath = svg
        .append('clipPath')
        .attr('id', 'circleFClip')
      .append('circle')
        .classed('node', true)
        .attr('r', radius)
        .attr('transform','translate('+ radius +' , '+ radius +')')

      var imageUrl = homeUrl.homeUrl + '/wp-content/themes/designmap-2016/library/images/';

      icon = nodeContainer
        .append('svg:image')
        .attr('x', -23)
        .attr('y', -40)
        .attr('width', 45)
        .attr('height', 45)
        .attr('xlink:href', function(d) {
          if (d.type === 'channel'){
            switch (d.name) {
              case 'gaming':
                return imageUrl + 'gaming.svg';
                break
              case 'arthropods':
                return imageUrl + 'arthropod.svg';
                break
              case 'gross':
                return imageUrl + 'gross.svg';
                break
              case 'yoga_meditation':
                return imageUrl + 'yoga_meditation.svg';
                break
              case 'restaurant-explorers':
                return imageUrl + 'restaurant-explorers.svg';
                break               
              case 'music':
                return imageUrl + 'music.svg';
                break
              case 'biking':
                return imageUrl + 'biking.svg';
                break
              case 'cooking':
                return imageUrl + 'cooking.svg';
                break
              case 'artsandcrafts':
                return imageUrl + 'artsandcrafts.svg';
                break
              case 'rock-climbing':
                return imageUrl + 'rock-climbing.svg';
                break
            }
          }
        })

      img = nodeContainer
        .append('svg:image')
        .attr('xlink:href', function(d) {return d.avatar})
        .attr('transform','translate('+ -30 +','+ -30+')')
        .attr("clip-path", "url(#circleFClip)")
        .attr('width', imageSize)
        .attr('height', imageSize)
        /*
          - Multi-line text
          - Construct text group "named: lanbels"
          - call getTitle  function
          - use switch case or loop 
          - append text line to group
        */
        var labels = container.selectAll('.node-label')
          .data(graphData.nodes)
          .enter()
          .append('g')
          .attr('class','node-label')

        var label = labels
          .append('text')
          .text(function(d) {
            if (d.type === 'channel') {
              return d.name;
            }
          })
          .attr('style','text-anchor: middle')
          .attr('fill', '#FFFFFF')
          .call(wrapText)

          function wrapText(text) {
            text.each(function() {
              var text = d3.select(this);
              var textName = text.text();
              var lineHeight = 1.2;

              switch(textName) {
                case 'yoga_meditation':
                  renderText('yoga', 'meditation');
                  break;
                case 'artsandcrafts':
                  renderText('arts', 'and crafts');
                  break;
                case 'rock-climbing': 
                  renderText('rock climbing', '');
                  break;
                case 'restaurant-explorers': 
                  renderText('restaurant', 'explorers');
                  break;
              }

              function renderText (line1, line2) {
                var tspan = text.text(null).append('tspan');
                tspan.text(line1)
                  .attr('x',0)

                tspan = text.append('tspan').text(line2)
                  .attr('dy', lineHeight + 'em')
                  .attr('x',0)
              }
            })
          }

        force.on("tick", function () {
          link
            .attr("x1", function (d) {
              return d.source.x;
            })
            .attr("y1", function (d) {
                return d.source.y;
            })
            .attr("x2", function (d) {
              return d.target.x;
            })
            .attr("y2", function (d) {
              return d.target.y;
            });

          nodeContainer.attr('transform', function (d) {
            return "translate("+ d.x + ", "+ d.y +")";
          })

          labels.attr('transform', function (d) {
            var x = d.x - 2
            var y = d.y + 23
            return "translate("+ x + ", "+ y +")";
          })

        });
    }
    function removeGraph () {
      if (svg) {
        svg.remove();
      }
    }

    function toggle (currentView) {
      //Toggles the graph on and of
      svg.remove();
    }

    return {
      toggle: toggle,
      startGraph: startGraph,
      removeGraph: removeGraph
    }
  })();
};

  /*
  $('.more').on('click', function(){
      // console.log('I have be clicked');
  });
  */

function dropdownModule ($) {
  /*
    Toggles
    - Background hide/show
    - Dropdown
    - Sub header
    - Main connent
  */
  $('.header-dropdown').addClass('showHeader');
  setTimeout(function() {
    $('.header-dropdown').removeClass('showHeader');
  }, 2000);

  $('.dropdown').on('show.bs.dropdown', function(){
    $('.header-dropdown').addClass('isOpen');
  });

  $('.dropdown').on('hide.bs.dropdown', function(e){
    $('.header-dropdown').removeClass('isOpen');
  });
  
  //Do not show selected tab in menu options
  function selectedState () {
      var currentTab = $('.toggle__title').text().trim();
      $('.tab-link').each(function() {
        if (currentTab === $(this).text()) {
          $(this).addClass('hide');
        }else {
          $(this).removeClass('hide');
        }
      });
  }

  var isOpen = false; //for dropdown menu
  //Dropdown constructor
  function DropDown(el) {
    this.dd = el;
    this.placeholder = $('.toggle__title');
    this.opts = this.dd.find('ul.dropdown > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
  }
  DropDown.prototype = {
    initEvents : function() {
      selectedState();
      var obj = this;
      obj.dd.on('click', function(event){
        selectedState();
        $(this).toggleClass('open');
        if (isOpen === false) {
          $('.header-dropdown').addClass('isOpen');
          isOpen = true
        }else if (isOpen === true) {
          $('.header-dropdown').removeClass('isOpen');
          isOpen = false
        }
        console.log(isOpen, 'isOpen');
        return false;
      });

      obj.opts.on('click',function(){
        selectedState();
        var opt = $(this);
        obj.val = opt.text();
        obj.index = opt.index();
        obj.placeholder.text(obj.val);
        obj.placeholder.append('<span class="toggle__caret"></span>');
        $('.header-dropdown').removeClass('isOpen');

        $('.toggle__caret').addClass('flip-caret');
        setTimeout(function(){
          $('.toggle__caret').removeClass('flip-caret');
        }, 300)

        var htTest = $(this).html();
      });
    },
    getValue : function() {
      return this.val;
    },
    getIndex : function() {
      return this.index;
    }
  }

  //Create dropdown
  var dd = new DropDown( $('#dd') );

  //Close dropdown when clcked
  $(document).click(function() {
    $('.dropdown__module').removeClass('open');
    $('.header-dropdown').removeClass('isOpen');
    isOpen = false;
  });
  
  //Switch View based on slected tab
  $('.dropdown-menu li').click(function() {
    var tab_id = 'tab-' + $(this).attr('data-tab');
    var sub_id = 'sub-' + $(this).attr('data-tab');

    $('.dropdown-menu li').removeClass('current');
    $('.tab-content').removeClass('current');
    $('.sub__heading').removeClass('current');

    $(this).addClass('current');
    $('#'+tab_id).addClass('current');
    $('#'+sub_id).addClass('current');
  });

}





