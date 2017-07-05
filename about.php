<?php

	/*
	Template Name: About
	*/
	
	get_header();

	$year = date('Y') - 2007;
	$users = count_users();
	
 ?>

 	<div class="container-fluid">

		<!-- 0. Page Headline -->
		<?php if ( CFS()->get( 'page_headline' ) ) : ?>
		<div class="wrap">

			<div class="row">
				<div class="col-12">
		  
		  			<div class="section-title">
						<h1><?php echo CFS()->get( 'page_headline' ); ?></h1>
					</div>

				</div>
			</div>

		</div>
		<?php endif; ?>

		<!-- 1. About Infographics -->
		<div class="infographic-box">

			<div class="wrap">

				<div class="row">

					<div class="col-12 col-md-4 d-flex">

						<div class="card">

							<div class="card__body d-flex align-items-center justify-content-center">
				            	<span class="infographic-box__graphic d-flex flex-column align-items-center justify-content-center"><img src="<?php echo get_template_directory_uri(); ?>/library/images/collaborate-team.svg" width="206" height="117" alt="We are 45 design-centered people"></span>
				            </div>

			            	<div class="card__footer text-center">
			            		<p>We are <span class="text-36 text-bold d-block"><?php // echo $users['total_users'] ?> 45 people</span></p>
			            	</div>

			            </div>
					</div>

					<div class="col-12 col-md-4 d-flex">

						<div class="card">

							<div class="card__body d-flex align-items-center justify-content-center">
			            		<span class="infographic-box__graphic d-flex flex-column align-items-center justify-content-center"><img src="<?php echo get_template_directory_uri(); ?>/library/images/collaborate-map-and-pin.svg" width="223" height="145" alt="We are based in San Francisco, California"></span>
			            	</div>
							
							<div class="card__footer text-center">
			              		<p>Based in <span class="text-36 text-bold d-block">San Francisco</span></p>
			              	</div>

			            </div>
					</div>

					<div class="col-12 col-md-4 d-flex">

						<div class="card">

							<div class="card__body d-flex align-items-center justify-content-center">
			            		<span class="infographic-box__graphic d-flex flex-column align-items-center justify-content-center"><img src="<?php echo get_template_directory_uri(); ?>/library/images/collaborate-tree-rings.svg" width="145" height="148" alt="We've been in business for over 10 years"></span>
			            	</div>

			            	<div class="card__footer text-center">
			              		<p>In business for <span class="text-36 text-bold d-block"><?php echo $year ?> years</span></p>
			              	</div>

			            </div>
					</div>
						
			  	</div>

			</div>

		</div>

	</div>

	<!-- 2. Parallax Image 1 -->
	<?php if ( CFS()->get( 'parallax_image_1' ) ) : ?>
		<div class="parallax loading-background" style="background-image:url(<?php echo CFS()->get( 'parallax_image_1' );?>); background-position: top right;">
			<h3 class="text-64 text-bold color--white"><?php echo CFS()->get( 'parallax_overlay_text_1' ); ?></h3>
		</div>
	<?php endif; ?>

	<div class="container-fluid">

		<div class="wrap">

			<!-- 3. Content Block 1 -->
			<?php if ( CFS()->get( 'content_block_1' ) ) : ?>
			

				<div class="row mb--50">
					<div class="col-12 col-md-10 offset-md-1 entry-content">
			    		<?php echo CFS()->get( 'content_block_1' ); ?>
			    	</div>			    	
				</div>

				<div class="row">
					<div class="col-12">
						<blockquote>
			    			<h4 class="text-36 text-bold mb-3">“Thanks to DesignMap’s efforts in researching our user base to help create a rich developer experience, our first day account registrations saw a 50x&nbsp;increase.”</h4>
			    			<span class="d-block body2" aria-label="cite">Scott Johnson, Vice President, UX &amp; Design</span>
			    			<span class="d-block body2" aria-label="cite">Docker</span>
			    		</blockquote>
			    	</div>
				</div>

			<?php endif; ?>

		</div>

	</div>

	<!-- 4. Parallax Image 2 -->
	<?php if ( CFS()->get( 'parallax_image_2' ) ) : ?>

		<div class="parallax loading-background" style="background-image:url(<?php echo CFS()->get( 'parallax_image_2' );?>); background-position: top center;">
			<h3 class="text-64 text-bold color--white"><?php echo CFS()->get( 'parallax_overlay_text_2' ); ?></h3>
		</div>

	<?php endif; ?>

	<div class="container-fluid">

		<!-- 5. Content Block 2 -->
		<?php if ( CFS()->get( 'content_block_2' ) ) : ?>
		
			<div class="wrap">

				<div class="row">
					<div class="col-12 col-md-10 offset-md-1 entry-content">

			    		<?php echo CFS()->get( 'content_block_2' ); ?>

			    	</div>			    	
			    </div>

			</div>
		
		<?php endif; ?>

		<div class="wrap">

			<div class="row">
			  <div class="col-12 col-md-10 offset-md-1">

			    <?php include('get-in-touch.php');?>

			  </div>
			</div>

		</div>
		
	</div>

<?php get_footer(); ?>