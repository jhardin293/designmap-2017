<?php 
	
	get_header(); 

?>

		<article id="post-<?php the_ID(); ?>" <?php post_class('cf'); ?> role="article">

			<header class="hero">

		      <!-- carousel -->
		      <?php if ( CFS()->get( 'carousel_slides' ) ) { ?>

		        <div class="carousel carousel--post">
		            
		            <div class="wrap">

		              <h1><?php the_title(); ?></h1>
		     
		              <div class="slick-slider">

		                <?php 
		                  $fields = CFS()->get( 'carousel_slides' );
		                  foreach ( $fields as $field ) { 

		                  	$select = $field['carousel_text_color'];
							foreach ( $select as $key => $color ) {}

		                ?>

		                  <div data-background-color="<?php echo $field['carousel_background_color']; ?>" data-text-color="<?php echo $color; ?>">
		                    	<img data-lazy="<?php echo $field['carousel_image']; ?>">
		                  </div>

		                <?php } ?>

		              </div>

		            </div>

		        </div>

		      <?php } ?>
		      <!--// carousel -->

			</header>

			<section class="entry-content">

				<div class="container-fluid">

					<div class="wrap">

						<!-- 0. Tagline -->
						<?php if ( CFS()->get( 'tagline' ) ) : ?>

						  <p class="tagline">
						  	<?php echo CFS()->get( 'tagline' ); ?>
						  </p>

						<?php endif; ?>

						<!-- Content Block -->
						<?php if ( CFS()->get( 'one_year_ago' ) ) : ?>
							<?php echo CFS()->get( 'one_year_ago' ); ?>
						<?php endif; ?>

						<!-- Testimonial & Content Block -->
						<?php if ( CFS()->get( 'testimonial' ) && CFS()->get( 'testimonial_cite' ) && CFS()->get( 'building_out' ) ) : ?>
							    
							<!--
							<blockquote>
				    			<p>“<?php echo CFS()->get( 'testimonial' ); ?>”</p>
				    			<span aria-label="cite"><?php echo CFS()->get( 'testimonial_cite' ); ?></span>
				    		</blockquote>
				    		-->

						<?php endif; ?>

					</div>

				</div>

				<!-- Parallax -->
				<?php if ( CFS()->get( 'parallax' ) ) : ?>

					<div class="parallax loading-background" style="background-image:url(<?php echo CFS()->get( 'parallax' ); ?>);"></div>

				<?php endif; ?>

				<div class="container-fluid">

					<div class="wrap">

						<!-- Content Block -->
						<?php if ( CFS()->get( 'if_product_development' ) ) : ?>

								
							<?php echo CFS()->get( 'if_product_development' ); ?>
								    	

						<?php endif; ?>

						<?php // include('get-in-touch.php');?>

					</div>

				</div>

			</section><!--// .entry-content -->

		</article>

		<!-- Connected Case Studies -->
		  	<?php
			    // Find connected pages
			    $connected = new WP_Query( array(
			      'connected_type' => 'case_study_related',
			      'connected_items' => get_queried_object(),
			      'nopaging' => true,
			    ) );

			    // Display connected pages
			    if ( $connected->have_posts() ) :
		    ?>

			<!--
			<section class="related-posts">

				
					      
					        <?php while ( $connected->have_posts() ) : $connected->the_post(); ?>
					          <div class="col-xs-12 col-sm-6">
					            <img src="<?php echo CFS()->get( 'small_image' ); ?>" width="200">
					            <h4><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
					            <p><?php echo CFS()->get( 'preview_image_hover_text' ); ?></p>
					          </div>
					        <?php endwhile; ?>

					 

			</section>
		-->

			<?php 
				wp_reset_postdata();
				endif;
			?>

			<!-- Contact links -->
		    <div class="container-fluid">

		        <div class="wrap">

		          <div class="row">
		            <div class="col-12 col-md-10 offset-md-1">
		              
		              <?php include('get-in-touch.php');?>

		            </div>
		          </div>

		        </div>

		    </div>
		    <!--// Contact links -->
		
<?php get_footer(); ?>