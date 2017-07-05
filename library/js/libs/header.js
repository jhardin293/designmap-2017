// https://tympanus.net/codrops/2017/03/23/expanding-bar-navigation-concept/
(function() {
	var theader = new TabsNav(document.querySelector('.tabsnav'), {
			movable: 'single',
			layout: 'horizontal',
			animeduration: 1000,
			animeeasing: 'easeOutExpo',
			onOpenBarsUpdate: openScreenCallback,
			onOpenTab: function() {

				headerCtrl.classList.add('screen-visible');

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
			},
			onCloseTab: function() {

				headerCtrl.classList.remove('screen-visible', 'hide-nav');
			}
		}),

		// The content items and the screen close controls
		headerContentItems = [].slice.call(document.querySelectorAll('.tabscontent > .tabscontent__item')),
		headerNavItems = [].slice.call(document.querySelectorAll('.tabsnav > .tabsnav__item')),
		screenCloseCtrl = document.querySelector('.tabscontent > button.btn--back'),
		menuCtrl = document.querySelector('.dm-hamburger'),
		headerCtrl = document.querySelector('.page--header'),
		isContentShown = false, current;

	function openScreenCallback(anim, idx, tab) {

		headerCtrl.classList.add('hide-nav');

		if( anim.progress > 10 && !isContentShown ) {
			isContentShown = true;
			current = idx;
			
			var contentItem = headerContentItems[idx],
				content = [].slice.call(contentItem.querySelectorAll('.column li'));

			// Hide the content elements.
			content.forEach(function(el) { el.style.opacity = 0; });

			// Show content item.
			contentItem.style.opacity = 1;
			contentItem.classList.add('tabscontent__item--current');
			tab.classList.add('tabsnav__item--current');

			// Stop overflow on HTML
			document.documentElement.style.overflow = "hidden";

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
					duration: 600,
					easing: 'easeOutExpo'
				}
			});
		}
	}

	screenCloseCtrl.addEventListener('click', closeScreen);

	function closeScreen() {
		if( !theader.isOpen ) return;

		var contentItem = headerContentItems[current],
			navItem = headerNavItems[current],
			content = [].slice.call(contentItem.querySelectorAll('.column li'));

		// Return overflow on HTML
		document.documentElement.style.overflow = "auto";

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

		// Hide back ctrl
		anime.remove(screenCloseCtrl);
		anime({
			targets: screenCloseCtrl,
			duration: 300,
			easing: 'easeOutExpo',
			scale: [1,0],
			opacity: {
				value: 0,
				duration: 100,
				easing: 'linear'
			}
		});
	}





	var logoCtrl = document.querySelector('.dm-logo'),
		screenTab = document.querySelector('.screen-toggle'),
		menuTab = document.querySelector('.hamburger-toggle');

	logoCtrl.addEventListener('click', toggleScreen);
	menuCtrl.addEventListener('click', toggleMenu);

	function toggleScreen() {
		screenTab.click();
	}

	// menuCtrl.addEventListener('click', toggleMenu);

	function toggleMenu() {

		menuTab.click();

		
	}


	
	

})();