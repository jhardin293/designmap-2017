<?php

	/*
	Template Name: Tools for Marketers
	*/
	
	get_header();

 ?>
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>


		<div class="banner banner--large mb--80">

			<div class="container-fluid">
			
				<div class="wrap d-flex justify-content-center align-items-center flex-column text-center">

					<div class="row">
						<div class="col-12">
							<h1 class="text-48 mb--10">We design tools for&nbsp;<strong class="text-bold">marketing</strong></h1>
						</div>
					</div>
					
					<div class="row">

						<div class="col-12 col-md-8 offset-md-2">
							<?php echo CFS()->get( 'banner_tagline' ); ?>
						</div>

					</div>

				</div>	

			</div>

		</div>

		<div class="wrap">

			<?php if ( CFS()->get( 'opening_paragrahs' ) ) : ?>

				<div class="container-fluid">
					<div class="row">

						<div class="col-12 entry-content">
							<div class="text-28 text-light content-block mb--80"><?php echo CFS()->get( 'opening_paragrahs' ); ?></div>
						</div>

					</div>
				</div>
	
			<?php endif; ?>

			<!-- recent clients -->
			<?php if ( CFS()->get( 'recent_clients_headline' ) ) : ?>
				<div class="container-fluid mb--110">

					<div class="row">

						<div class="col-12">

							<div class="client-logos">

								<h2 class="mb--30"><?php echo CFS()->get( 'recent_clients_headline' ); ?></h2>

								<ul class="list-unstyled d-flex flex-wrap align-items-center">
									<li><img src="<?php echo get_template_directory_uri(); ?>/library/images/logo-salesforce-2.png" width="200" class="responsive-img"></li>
									<li><img src="<?php echo get_template_directory_uri(); ?>/library/images/logo-amplero.png" width="188" class="responsive-img"></li>
									<li><img src="<?php echo get_template_directory_uri(); ?>/library/images/logo-branding-brand.png" width="177" class="responsive-img"></li>
									<li><img src="<?php echo get_template_directory_uri(); ?>/library/images/logo-market-once.png" width="292" class="responsive-img"></li>
									<li><img src="<?php echo get_template_directory_uri(); ?>/library/images/logo-vi.png" width="318" class="responsive-img"></li>
								</ul>

							</div>

						</div>

					</div>

				</div>
			<?php endif; ?>
			<!--// recent clients -->

			<?php if ( CFS()->get( 'second_content_area' ) ) : ?>
				<div class="mb--110 entry-content"><?php echo CFS()->get( 'second_content_area' ); ?></div>
			<?php endif; ?>

			<!-- primary image -->
			<figure class="mb--130">
    			<img src="<?php echo get_template_directory_uri(); ?>/library/images/tools-for-marketers.svg" alt="" class="responsive-img mb--30">
    			<?php if ( CFS()->get( 'image_caption' ) ) : ?>
    				<figcaption class="w-75 mx-auto"><?php echo CFS()->get( 'image_caption' ); ?></figcaption>
    			<?php endif; ?>
    		</figure>
			<!--// primary image -->

		</div><!--// .wrap -->

		<?php 

			if ( $post = get_page_by_path( 'designmap-has-been-an-incredible-partner-in-driving-our-product-design-forward', OBJECT, 'testimonies' ) )
			    $postID = $post->ID;
			else
			    $postID = 0;

			if ( $post ) {

		?>

			<div class="banner banner--large">
				<div class="wrap">
					<blockquote>
	                  <h4 class="text-36 text-bold">“<?php echo $post->post_title; ?></h4>
	                  <div class="text-24 text-light mb--30"><?php echo $post->post_content; ?>”</div>
	                  <p><?php echo CFS()->get( 'author', $postID ); ?><br>
	                  <?php echo CFS()->get( 'author_company', $postID ); ?></p>
	                </blockquote>
	            </div>
			</div>

		<?php } ?>

		<?php 
		  // Prevent weirdness
		  wp_reset_postdata();
		?>

		<div class="wrap">
		            
		        <?php include('get-in-touch.php');?>

		 </div><!--// .wrap -->
		  	
		<?php endwhile; endif; ?>

<?php get_footer(); ?>