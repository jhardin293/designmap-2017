<!doctype html>

	<html <?php language_attributes(); ?> class="no-js">

	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
		<title><?php wp_title('|','true','right'); ?></title>
    <meta name="description" content="<?php bloginfo('description'); ?>">
    <meta name="keywords" content="">

		<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/library/images/apple-touch-icon.png">
		<link rel="icon" href="<?php echo get_template_directory_uri(); ?>/favicon.png">
		<!--[if IE]>
			<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
		<![endif]-->

		<meta name="msapplication-TileColor" content="#f01d4f">
		<meta name="msapplication-TileImage" content="<?php echo get_template_directory_uri(); ?>/library/images/win8-tile-icon.png">
    <meta name="theme-color" content="#121212">

		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

		<?php wp_head(); ?>

	</head>

	<body <?php body_class(); ?> itemscope itemtype="http://schema.org/WebPage">
    
  	<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  		<defs>
        <symbol id="icon-arrow-forward" viewBox="0 0 20 32">
        <title>arrow-forward</title>
        <path fill="#fff" style="fill: var(--color1, #fff)" d="M20.002 16.004l-17.314-16.003-2.689 2.868 14.22 13.135-14.22 13.134 2.689 2.864z"></path>
        </symbol>
        <symbol id="icon-arrow-back" viewBox="0 0 20 32">
        <title>arrow-back</title>
        <path fill="#fff" style="fill: var(--color1, #fff)" d="M-0.001 16l17.315 16.002 2.689-2.867-14.22-13.135 14.22-13.135-2.689-2.864z"></path>
        </symbol>
  			<symbol id="icon-logo" viewBox="0 0 526 60">
  			<title>logo</title>
  			<path class="path1" fill="var(--color1, #fff)" d="M5.676 53.252h11.034c17.024 0 24.985-11.181 24.985-22.676s-7.961-22.676-24.985-22.676h-11.034v45.353zM0 2.701h18.523c13.951 0 29.32 9.291 29.32 27.874s-15.369 27.874-29.32 27.874h-18.523v-55.748z"></path>
  			<path class="path2" fill="var(--color1, #fff)" d="M71.176 53.252h29.871v5.198h-35.547v-55.748h34.601v5.198h-28.925v18.976h27.033v5.196h-27.033z"></path>
  			<path class="path3" fill="var(--color1, #fff)" d="M145.895 11.913c-2.443-3.621-6.069-5.433-10.797-5.433-5.832 0-11.901 3.070-11.901 10.078 0 15.041 28.61 7.088 28.61 27.165 0 10.159-9.536 16.142-18.365 16.142-6.778 0-13.32-2.441-17.575-8.268l5.122-3.702c2.365 4.096 6.858 6.773 12.69 6.773 5.596 0 11.98-3.622 11.98-10.158 0-15.748-28.609-7.008-28.609-27.402 0-10.788 8.984-15.826 18.048-15.826 6.305 0 11.35 1.731 15.762 6.77l-4.965 3.858z"></path>
  			<path class="path4" fill="var(--color1, #fff)" d="M169.622 58.448h5.676v-55.748h-5.676z"></path>
  			<path class="path5" fill="var(--color1, #fff)" d="M239.376 12.938c-3.784-4.016-9.065-6.457-15.921-6.457-14.344 0-22.935 11.259-22.935 24.094s8.59 24.095 22.935 24.095c5.754 0 11.27-1.575 15.448-3.937v-18.663h-13.32v-5.196h18.994v27.323c-6.227 3.7-14.344 5.669-21.123 5.669-16.631 0-29.085-12.362-29.085-29.292 0-16.928 12.454-29.29 29.085-29.29 8.827 0 15.211 2.519 20.178 7.479l-4.257 4.174z"></path>
  			<path class="path6" fill="var(--color1, #fff)" d="M306.136 49.945h0.158v-47.244h5.676v55.748h-7.093l-33.26-47.717h-0.158v47.717h-5.676v-55.748h7.093z"></path>
  			<path class="path7" fill="var(--color1, #fff)" d="M334.355 2.701h18.601l12.847 36.378h0.158l12.927-36.378h18.52v55.748h-12.294v-42.756h-0.158l-14.659 42.756h-9.378l-14.11-42.756h-0.156v42.756h-12.297z"></path>
  			<path class="path8" fill="var(--color1, #fff)" d="M439.739 18.921l-6.78 17.324h13.635l-6.855-17.324zM435.009 2.701h10.166l24.277 55.748h-13.871l-4.809-11.811h-21.673l-4.651 11.811h-13.555l24.117-55.748z"></path>
  			<path class="path9" fill="var(--color1, #fff)" d="M495.227 26.323h8.198c4.332 0 8.668-1.496 8.668-6.693 0-5.748-5.831-6.535-10.561-6.535h-6.305v13.229zM482.933 2.7h20.728c11.585 0 21.202 3.702 21.202 16.929 0 13.072-8.907 17.087-20.65 17.087h-8.986v21.731h-12.294v-55.748z"></path>
  			</symbol>
  			<symbol id="icon-hamburger" viewBox="0 0 64 60">
  				<title>hamburger</title>
  				<path class="path1" fill="currentColor" d="M0 0h63.529v10.588h-63.529v-10.588z"></path>
  				<path class="path2" fill="currentColor" d="M0 24.706h63.529v10.588h-63.529v-10.588z"></path>
  				<path class="path3" fill="currentColor" d="M0 49.412h63.529v10.588h-63.529v-10.588z"></path>
  			</symbol>
        <symbol id="icon-facebook" viewBox="0 0 60 60">
          <title>facebook</title>
          <path class="path1" fill="currentColor" d="M29.444 0c-16.275 0-29.444 13.17-29.444 29.444s13.17 29.444 29.444 29.444c16.275 0 29.444-13.17 29.444-29.444s-13.17-29.444-29.444-29.444zM37.261 29.337h-5.139v18.202h-7.602v-18.202h-3.64v-6.424h3.64v-4.176c0-2.998 1.392-7.602 7.602-7.602h5.568v6.21h-4.069c-0.642 0-1.606 0.321-1.606 1.713v3.747h5.782l-0.535 6.531z"></path>
        </symbol>
        <symbol id="icon-linkedin" viewBox="0 0 60 60">
          <title>linkedin</title>
          <path class="path1" fill="currentColor" d="M30 0.536c-16.286 0-29.464 13.179-29.464 29.464s13.179 29.464 29.464 29.464c16.286 0 29.464-13.179 29.464-29.464s-13.179-29.464-29.464-29.464zM46.393 44.357c0 1.286-1.071 2.357-2.464 2.357h-27.964c-1.393 0-2.464-1.071-2.464-2.357v-28.393c0-1.286 1.071-2.357 2.464-2.357h27.964c1.393 0 2.464 1.071 2.464 2.357v28.393z"></path>
          <path class="path2" fill="currentColor" d="M35.679 26.036c-2.679 0-3.857 1.5-4.5 2.464v0 0 0-2.143h-4.929c0.107 1.393 0 14.893 0 14.893h4.929v-8.357c0-0.429 0-0.857 0.214-1.179 0.321-0.857 1.179-1.821 2.571-1.821 1.821 0 2.464 1.393 2.464 3.429v8.036h4.929v-8.571c0-4.607-2.357-6.75-5.679-6.75z"></path>
          <path class="path3" fill="currentColor" d="M21 19.179c-1.714 0-2.786 1.071-2.786 2.571 0 1.393 1.071 2.571 2.786 2.571v0c1.714 0 2.786-1.179 2.786-2.571 0-1.5-1.071-2.571-2.786-2.571z"></path>
          <path class="path4" fill="currentColor" d="M18.536 26.357h4.929v14.893h-4.929v-14.893z"></path>
        </symbol>
        <symbol id="icon-medium" viewBox="0 0 60 60">
          <title>medium</title>
          <path class="path1" fill="currentColor" d="M29.464 0c-16.286 0-29.464 13.179-29.464 29.464s13.179 29.464 29.464 29.464c16.286 0 29.464-13.179 29.464-29.464s-13.179-29.464-29.464-29.464zM22.821 43.5v0 0l-10.286-5.036c-0.107-0.107-0.321-0.321-0.321-0.536v-23.357l10.5 5.25v23.679h0.107zM24.107 32.357v-10.607l9.429 15.321-9.429-4.714zM28.286 26.143l7.286-11.679 10.607 5.357-10.929 17.679-6.964-11.357zM46.5 43.5v0 0l-10.286-5.036 10.286-16.714v21.75z"></path>
        </symbol>
        <symbol id="icon-twitter" viewBox="0 0 60 60">
          <title>twitter</title>
          <path class="path1" fill="currentColor" d="M29.464 0c-16.286 0-29.464 13.179-29.464 29.464s13.179 29.464 29.464 29.464c16.286 0 29.464-13.179 29.464-29.464s-13.179-29.464-29.464-29.464zM44.357 23.571v0.964c0 9.857-7.5 21.107-21.107 21.107-4.179 0-8.143-1.179-11.357-3.321 0.536 0.107 1.179 0.107 1.821 0.107 3.429 0 6.643-1.179 9.214-3.214-3.214-0.107-6-2.25-6.964-5.143 0.429 0.107 0.964 0.107 1.393 0.107 0.643 0 1.286-0.107 1.929-0.214-3.429-0.643-6-3.643-6-7.286v-0.107c0.964 0.536 2.143 0.857 3.321 0.964-2.036-1.286-3.321-3.643-3.321-6.214 0-1.393 0.321-2.679 0.964-3.75 3.643 4.5 9.107 7.5 15.321 7.714-0.107-0.536-0.214-1.071-0.214-1.714 0-4.071 3.321-7.393 7.393-7.393 2.143 0 4.071 0.857 5.464 2.357 1.714-0.321 3.321-0.964 4.714-1.821-0.536 1.714-1.714 3.214-3.214 4.071 1.5-0.214 2.893-0.536 4.286-1.179-0.964 1.607-2.25 2.893-3.643 3.964z"></path>
        </symbol>
        <symbol id="icon-modal-dismiss" viewBox="0 0 32 32">
          <title>modal-dismiss</title>
          <path fill="currentColor" d="M15.948 13.434l-12.57-12.57c-0.695-0.695-1.821-0.695-2.515-0.001-0.699 0.699-0.694 1.82 0.001 2.515l12.57 12.57-12.57 12.57c-0.695 0.695-0.695 1.821-0.001 2.515 0.699 0.699 1.82 0.694 2.515-0.001l12.57-12.57 12.57 12.57c0.695 0.695 1.821 0.695 2.515 0.001 0.699-0.699 0.694-1.82-0.001-2.515l-12.57-12.57 12.57-12.57c0.695-0.695 0.695-1.821 0.001-2.515-0.699-0.699-1.82-0.694-2.515 0.001l-12.57 12.57z"></path>
        </symbol>
        <symbol id="icon-caret" viewBox="0 0 24 24">
          <title>caret</title>
          <polygon points="15.7,16.6 11.1,12 15.7,7.4 14.3,6 8.3,12 14.3,18"/>
        </symbol>
        <symbol id="icon-menu" viewBox="0 0 24 24">
          <title>menu</title>
          <path d="M23.7,3H0V0h23.7V3z M23.7,7.5H0v3h23.7V7.5z M18.9,15h-14v3h14V15z"/>
        </symbol>
        <symbol id="icon-cross" viewBox="0 0 24 24">
          <title>cross</title>
          <path d="M14.1,12l7.3,7.3l-2.1,2.1L12,14.1l-7.3,7.3l-2.1-2.1L9.9,12L2.6,4.7l2.1-2.1L12,9.9l7.3-7.3l2.1,2.1L14.1,12z"/>
        </symbol>
        <symbol id="icon-telephone" viewBox="0 0 32 32">
          <title>telephone</title>
          <path fill="#adadad" style="fill: var(--color1, #adadad)" d="M31.242 25.021l-4.889-4.892c-0.494-0.483-1.16-0.748-1.85-0.738-0.738-0.001-1.446 0.288-1.974 0.804l-2.378 2.378-0.384-0.211h0.001c-2.164-1.116-4.148-2.551-5.884-4.258-1.714-1.744-3.154-3.735-4.274-5.908l-0.195-0.36 2.38-2.378c1.071-1.043 1.1-2.755 0.064-3.833l-4.899-4.887c-0.493-0.483-1.159-0.75-1.849-0.739-0.741-0.004-1.454 0.286-1.981 0.806l-1.2 1.211c-0.029 0.027-0.052 0.060-0.074 0.094l-0.097 0.161c-0.475 0.615-0.86 1.295-1.144 2.018-0.258 0.665-0.43 1.36-0.514 2.068-0.653 5.41 1.809 10.347 8.491 17.029 7.908 7.909 14.573 8.521 16.426 8.521 0.204 0.003 0.406-0.005 0.609-0.023 0.711-0.087 1.408-0.264 2.075-0.525 0.73-0.284 1.416-0.674 2.034-1.156l0.276-0.215 0.040-0.038 1.126-1.106c1.070-1.040 1.099-2.749 0.064-3.824l0 0z"></path>
          </symbol>
          <symbol id="icon-map-marker" viewBox="0 0 21 32">
          <title>map-marker</title>
          <path fill="#aeaeae" style="fill: var(--color2, #aeaeae)" d="M10.667 0c-5.914 0-10.667 4.751-10.667 10.667 0 5.914 10.667 20.362 10.667 20.362s10.667-14.448 10.667-20.362c0-5.916-4.752-10.667-10.667-10.667zM10.667 15.514c-2.714 0-4.849-2.133-4.849-4.849 0-2.714 2.133-4.849 4.849-4.849 2.714 0 4.849 2.133 4.849 4.849s-2.134 4.849-4.849 4.849z"></path>
        </symbol>
  		</defs>
  	</svg>

    <div id="page" class="page d-flex flex-column">

      <div class="page-overlay"></div>

      <a href="#main">Skip to main content</a>

      <header class="page__header">

          <nav class="tabsnav d-flex container-fluid">

            <div class="wrap d-flex w-100">
  
              <div class="dm-logo header-navigation">
                  <a href="<?php echo home_url(); ?>">
                  <svg class="dm-hdr-logo" width="181" height="19"><use xlink:href="#icon-logo"></use></svg>
                    <span class="sr-only">DesignMap Logo</span>
                  </a>
              </div>

              <?php wp_nav_menu(array(
                   'container' => false,                           // remove nav container
                   'container_class' => 'menu',                 // class of container (should you choose to use it)
                   'menu' => __( 'The Main Menu', 'bonestheme' ),  // nav name
                   'menu_class' => 'header-desktop-navigation header-navigation d-flex align-items-baseline ml-auto list-unstyled',  // adding custom nav class
                   'theme_location' => 'main-nav',                 // where it's located in the theme
                   'before' => '',                                 // before the menu
                     'after' => '',                                  // after the menu
                     'link_before' => '',                            // before each link
                     'link_after' => '',                             // after each link
                     'depth' => 0,                                   // limit the depth of the nav
                   'fallback_cb' => ''                             // fallback function (if there is one)
              )); ?>

              <div class="dm-hamburger ml-auto header-navigation"><svg class="icon icon-hamburger" width="18" height="17"><use xlink:href="#icon-hamburger"></use></svg><span class="sr-only">DesignMap Logo</span></div>

            </div>

            <div class="tabsnav__item screen-toggle">
              <div class="tabsnav__bar"></div>
              <h3 class="tabsnav__title"></h3>
            </div>

            <div class="tabsnav__item menu-toggle">
              <div class="tabsnav__bar"></div>
              <div class="tabsnav__title"></div>
            </div>

          </nav>

          <div class="tabscontent">

            <!-- homescreen -->
            <div class="tabscontent__item tabscontent__screen">

              <div class="column">
                
                <?php

                  $pageID = get_id_by_slug('homepage');

                  $args = array(
                    'post_type' => 'page',
                    'page_id' => $pageID
                  );

                  $post = get_posts( $args );

                  if ( $post ) {

                ?>

                  <div class="homescreen wrap d-flex flex-column justify-content-sm-center">

                        <div class="homescreen__logo-placeholder">
                          <svg class="dm-hdr-logo" xmlns="http://www.w3.org/2000/svg" width="180" height="50" viewBox="0 0 500 138" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs>
                              <path id="a" d="M20,-2.8427781e-16 L480,-6.82093271e-15 L480,-7.10542736e-15 C491.045695,2.0297132e-14 500,8.954305 500,20 L500,118 L500,118 C500,129.045695 491.045695,138 480,138 L20,138 L20,138 C8.954305,138 1.11632554e-14,129.045695 0,118 L0,20 L0,20 C-1.3527075e-15,8.954305 8.954305,2.02897595e-15 20,0 Z"/>
                            </defs>
                            <g fill="none" fill-rule="evenodd">
                              <use fill="#8D181C" xlink:href="#a"/>
                              <path stroke="#FFFFFF" d="M20,0.5 C9.23044738,0.5 0.5,9.23044738 0.5,20 L0.5,118 C0.5,128.769553 9.23044738,137.5 20,137.5 L480,137.5 C490.769553,137.5 499.5,128.769553 499.5,118 L499.5,20 C499.5,9.23044738 490.769553,0.5 480,0.5 L20,0.5 Z"/>
                              <path fill="#FEFEFE" d="M50,87 L59,87 C71.8115254,87 78,78.1248514 78,69 C78,59.8751486 71.8115254,51 59,51 L50,51 L50,87 Z M46,47 L60,47 C71.114278,47 83,54.3329955 83,69 C83,83.6670045 71.114278,91 60,91 L46,91 L46,47 Z M101,87 L125,87 L125,91 L97,91 L97,47 L124,47 L124,51 L101,51 L101,66 L123,66 L123,70 L101,70 L101,87 Z M159,54 C157.490631,51.5028603 154.665999,50.080263 151,50 C146.438421,50.080263 141.710342,52.4909151 142,58 C141.710342,69.8040548 164,63.5591452 164,79 C164,87.3016986 156.570448,92 150,92 C144.411815,92 139.315262,90.0833753 136,86 L140,83 C141.832499,85.8176 145.333,87.919737 150,88 C154.236447,87.919737 159.209841,85.0755507 159,80 C159.209841,67.5779068 136.921184,74.4408548 137,58 C136.921184,49.9562521 143.920183,46 151,46 C155.894579,46 159.824632,47.3590795 163,51 L159,54 Z M178,91 L178,47 L182,47 L182,91 L178,91 Z M232,55 C229.020632,51.9968877 224.918469,50.080263 220,50 C208.449917,50.080263 201.777038,58.921337 202,69 C201.777038,79.0776548 208.449917,87.919737 220,88 C224.061897,87.919737 228.346755,86.6826521 232,85 L232,70 L221,70 L221,66 L236,66 L236,88 C231.163062,90.4544 224.857571,92 220,92 C206.673877,92 197,82.2928658 197,69 C197,55.7071342 206.673877,46 220,46 C226.448918,46 231.407654,47.978126 235,52 L232,55 Z M284,84 L285,84 L285,47 L289,47 L289,91 L283,91 L258,53 L257,53 L257,91 L253,91 L253,47 L259,47 L284,84 Z M306,47 L320,47 L330,76 L331,76 L341,47 L355,47 L355,91 L345,91 L345,60 L334,91 L327,91 L316,60 L316,91 L306,91 L306,47 Z M384,47 L392,47 L411,91 L400,91 L396,82 L379,82 L376,91 L365,91 L384,47 Z M388,60 L383,74 L394,74 L388,60 Z M421,47 L437,47 C446.430989,47 454,49.920632 454,60 C454,70.678198 446.990345,73.8471141 438,74 L431,74 L431,91 L421,91 L421,47 Z M431,65 L437,65 C440.658615,65 444,63.8692614 444,60 C444,55.5959429 439.505525,55 436,55 L431,55 L431,65 Z"/>
                            </g>
                          </svg>
                          <span class="sr-only">DesignMap Logo</span>
                        </div>

                        <div class="homescreen__headline d-flex flex-column justify-content-center">

                          <?php if ( CFS()->get( 'heading_title', $pageID ) ) : ?>
                            <h1 class="text-36 text-bold"><?php echo CFS()->get( 'heading_title', $pageID ); ?></h1>
                          <?php endif; ?>

                          <?php if ( CFS()->get( 'heading_paragraph', $pageID ) ) : ?>
                            <div class="text-28 text-light text-white"><?php echo CFS()->get( 'heading_paragraph', $pageID ); ?></div>
                          <?php endif; ?>

                        </div>

                        <div class="homescreen__links">

                          <nav aria-label="Quick navigation links">

                            <div class="row">

                              <div class="col-12 col-md-4 d-flex">

                                <a href="<?php echo get_permalink(get_page_by_path( 'about' )); ?>" class="card">

                                  <div class="card__body d-flex align-items-center justify-content-center">
                                      <span class="infographic-box__graphic d-flex flex-column align-items-center justify-content-center"><img src="<?php echo get_template_directory_uri(); ?>/library/images/home-about-us.svg" alt="About Us" width="160"> </span>
                                  </div>

                                  <div class="card__footer text-center">
                                      <span class="text-28 text-semibold text-white">Learn <span class="nowrap">About Us</span></span>
                                  </div>
                                  
                                </a>

                              </div>

                              <div class="col-12 col-md-4 d-flex">

                                <a href="<?php echo get_permalink(get_page_by_path( 'work' )); ?>" class="card">

                                  <div class="card__body d-flex align-items-center justify-content-center">
                                      <span class="infographic-box__graphic d-flex flex-column align-items-center justify-content-center"><img src="<?php echo get_template_directory_uri(); ?>/library/images/home-our-work.svg" alt="View Our Work" width="160"> </span>
                                  </div>
                                  
                                  <div class="card__footer text-center">
                                      <span class="text-28 text-semibold text-white">View <span class="nowrap">Our Work</span></span>
                                  </div>

                                </a>

                              </div>

                              <div class="col-12 col-md-4 d-flex">

                                <a href="<?php echo get_permalink(get_page_by_path( 'work-with-us' )); ?>" class="card">

                                  <div class="card__body d-flex align-items-center justify-content-center">
                                      <span class="infographic-box__graphic d-flex flex-column align-items-center justify-content-center"><img src="<?php echo get_template_directory_uri(); ?>/library/images/home-collaborate.svg" alt="Working With Us" width="160"></span>
                                  </div>

                                  <div class="card__footer text-center">
                                      <span class="text-28 text-semibold text-white">Work <span class="nowrap">With Us</span></span>
                                  </div>

                                </a>

                              </div>
            
                            </div>

                          </nav>
                          
                        </div>

                  </div>

              <?php 

                }

                // Prevent weirdness
                wp_reset_postdata();
                
              ?>

              </div>          
            </div>

            <!-- navigation links -->
            <div class="tabscontent__item tabscontent__mobile-nav">
              <div class="column d-flex flex-column flex-md-row justify-content-center align-items-center" style="min-height:100vh;">
                
                <nav class="text-center">
                  <?php wp_nav_menu(array(
                       'container' => false,                           // remove nav container
                       'container_class' => 'menu',                 // class of container (should you choose to use it)
                       'menu' => __( 'The Main Menu', 'bonestheme' ),  // nav name
                       'menu_class' => 'header-mobile-navigation list-unstyled',  // adding custom nav class
                       'theme_location' => 'main-nav',                 // where it's located in the theme
                       'before' => '',                                 // before the menu
                         'after' => '',                                  // after the menu
                         'link_before' => '',                            // before each link
                         'link_after' => '',                             // after each link
                         'depth' => 0,                                   // limit the depth of the nav
                       'fallback_cb' => ''                             // fallback function (if there is one)
                  )); ?>
                </nav>

              </div>
            </div>
            


            <button class="btn--back"><svg class="icon icon-modal-dismiss" width="28" height="28"><use xlink:href="#icon-modal-dismiss"></use></svg></button>

          </div>

    </header>
 
    <main id="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

  