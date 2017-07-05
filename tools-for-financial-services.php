<?php

	/*
	Template Name: Tools for Financial Services
	*/
	
	get_header();

 ?>
  
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

		<div class="header-dropdown">
	  	<div class="header__background"></div>
	  	<div class="container">
	  	  <h1><?php echo CFS()->get( 'eyebrow_heading' ); ?></h1>
	  		<div class="dropdown__module dropdown">
	  		  <div class="dropdown__toggle" data-toggle="dropdown">
	  				<h2 class="toggle__title largest" >Financial Services
	  				<span class="toggle__caret"></span>
	  				</h2>
	  		  </div>
	  			<ul class="dropdown-menu visuallyhidden">
				    <li><a href="#">Marketers</a></li>
				    <li><a href="#">IT Infrastructure</a></li>
				  </ul>
	  		</div>
	  		<p><?php echo CFS()->get( 'banner_tagline' ); ?></p>
	  	</div>
	  </div>
		<div class="container-fluid">

			<div class="wrap">

				<?php if ( CFS()->get( 'opening_paragrahs' ) ) : ?>
					<div class="row">

						<div class="col-12 col-md-10 offset-md-1">

							<div class="h4">
								<?php echo CFS()->get( 'opening_paragrahs' ); ?>
							</div>

						</div>

					</div>
				<?php endif; ?>

				<!-- recent clients -->
				<?php if ( CFS()->get( 'recent_clients_headline' ) ) : ?>
					<div class="recent-clients">

						<div class="row">

							<div class="col-12">

								<h2><?php echo CFS()->get( 'recent_clients_headline' ); ?></h2>

								<div class="row recent-clients--grid">
									<div class="col-12 col-md-4 d-flex align-items-center justify-content-center">
										<img src="<?php echo get_template_directory_uri(); ?>/library/images/logo-salesforce-2.png" width="200">
									</div>
									<div class="col-12 col-md-4 d-flex align-items-center justify-content-center">
										<img src="<?php echo get_template_directory_uri(); ?>/library/images/logo-amplero.png" width="188">
									</div>
									<div class="col-12 col-md-4 d-flex align-items-center justify-content-center">
										<img src="<?php echo get_template_directory_uri(); ?>/library/images/logo-branding-brand.png" width="177">
									</div>
								</div>

								<div class="row">
									<div class="col-12 col-md-6 d-flex align-items-center justify-content-center">
										<img src="<?php echo get_template_directory_uri(); ?>/library/images/logo-market-once.png" width="292">
									</div>
									<div class="col-12 col-md-6 d-flex align-items-center justify-content-center">
										<img src="<?php echo get_template_directory_uri(); ?>/library/images/logo-vi.png" width="318">
									</div>
								</div>

							</div>

						</div>

					</div>
				<?php endif; ?>
				<!--// recent clients -->

				<?php if ( CFS()->get( 'second_content_area' ) ) : ?>
					<div class="row">

						<div class="col-12">

							<?php echo CFS()->get( 'second_content_area' ); ?>

						</div>

					</div>
				<?php endif; ?>

				<!-- primary image -->
				<div class="row">

					<div class="col-12">

						<figure>
			    			<img src="<?php echo get_template_directory_uri(); ?>/library/images/tools-for-marketers.svg" alt="" class="responsive-img">
			    			<?php if ( CFS()->get( 'image_caption' ) ) : ?>
			    				<figcaption class="mt-5 text-semibold text-left"><?php echo CFS()->get( 'image_caption' ); ?></figcaption>
			    			<?php endif; ?>
			    		</figure>

					</div>

				</div>
				<!--// primary image -->

			</div>

			<?php 

				if ( $post = get_page_by_path( 'designmap-has-been-an-incredible-partner-in-driving-our-product-design-forward', OBJECT, 'testimonies' ) )
				    $postID = $post->ID;
				else
				    $postID = 0;

				if ( $post ) {

			?>

				<div class="banner banner--baby-blue max-width">
					<div class="wrap">
						<blockquote>
		                  <p class="h1 text-medium">“<?php echo $post->post_title; ?></p>
		                  <p class="banner--copy"><?php echo $post->post_content; ?>”</p>
		                  <p class="banner--cite"><?php echo CFS()->get( 'author', $postID ); ?><br>
		                  <?php echo CFS()->get( 'author_company', $postID ); ?></p>
		                </blockquote>
		            </div>
				</div>

			<?php } ?>

			<?php 
			  // Prevent weirdness
			  wp_reset_postdata();
			?>

	        <div class="container-fluid">

	          <div class="wrap">

	            <div class="row">
	              <div class="col-12 col-md-10 offset-md-1">
	            
	                <?php include('get-in-touch.php');?>

	              </div>
	            </div>

	          </div>

	        </div>

		</div><!--// .container-fluid -->

	<?php endwhile; endif; ?>

<?php get_footer(); ?>