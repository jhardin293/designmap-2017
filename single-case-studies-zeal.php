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

					<div class="viewport-animate">

					<!-- 0. Tagline -->
					<?php if ( CFS()->get( 'tagline' ) ) : ?>

							<div class="wrap">

								<div class="row">
									<div class="col-12">
							  
									  <p class="tagline">
									  	<?php echo CFS()->get( 'tagline' ); ?>
									  </p>

									</div>
								</div>

							</div>

					<?php endif; ?>

					<!-- Content Block -->
					<?php if ( CFS()->get( 'content_block' ) ) : ?>

							<div class="wrap">

								<div class="row">
									<div class="col-12 col-lg-8">
							    		<?php echo CFS()->get( 'content_block' ); ?>
							    	</div>
							  	</div>

							</div>

					<?php endif; ?>

					<!-- Testimonial & Content Block -->
					<?php if ( CFS()->get( 'testimonial' ) && CFS()->get( 'testimonial_cite' ) && CFS()->get( 'building_out' ) ) : ?>

						<div class="wrap">

							<div class="row mb-sm">

						    <div class="col-12 col-lg-8">
							    <?php echo CFS()->get( 'building_out' ); ?>
						    </div>

							<div class="col-12 col-lg-4">
								<blockquote>
					    			<p>“<?php echo CFS()->get( 'testimonial' ); ?>”</p>
					    			<span aria-label="cite"><?php echo CFS()->get( 'testimonial_cite' ); ?></span>
					    		</blockquote>
						    </div>

						  </div>

						</div>

					<?php endif; ?>

					</div>

				</div>

				<!-- Parallax -->
				<?php if ( CFS()->get( 'parallax' ) ) : ?>

					<div class="parallax loading-background" style="background-image:url(<?php echo CFS()->get( 'parallax' ); ?>);"></div>

				<?php endif; ?>

				<div class="parallax-caption-box">

					<div class="container-fluid">

						<!-- Content Block -->
						<?php if ( CFS()->get( 'if_product_development' ) ) : ?>

								<div class="wrap">

									<div class="row">
										<div class="col-12 col-lg-8 viewport-animate">
								    		<?php echo CFS()->get( 'if_product_development' ); ?>
								    	</div>

								    	<div class="col-12 col-lg-4">
											<figcaption class="parallax-figcaption"><?php echo CFS()->get( 'parallax_caption' ); ?></figcaption>
								    	</div>
								  </div>

								</div>

						<?php endif; ?>
						
						<!-- Full Width Image & Content Block -->
						<?php if ( CFS()->get( 'full_width_image_1' ) ) : ?>

								<div class="wrap viewport-animate">

									<div class="row">
										<div class="col-12">
								    		<figure class="full-width-image">
								    				<img src="<?php echo CFS()->get( 'full_width_image_1' ); ?>" alt="Project image">
								    				<figcaption><?php echo CFS()->get( 'full_width_image_caption_1' ); ?></figcaption>
								    		</figure>
								    	</div>
								  	</div>

								</div>

						<?php endif; ?>	

						<div class="viewport-animate">

						<!-- Content Block -->
						<?php if ( CFS()->get( 'with_the_team' ) ) : ?>
							
								<div class="wrap">

									<div class="row">
										<div class="col-12 col-lg-8">
								    		<?php echo CFS()->get( 'with_the_team' ); ?>
								    	</div>
								  </div>

								</div>

						<?php endif; ?>

						</div>

						<div class="viewport-animate mb-sm">

							<!-- Full Width Image -->
							<?php if ( CFS()->get( 'full_width_image_2' ) ) : ?>

									<div class="wrap">

										<div class="row">
											<div class="col-12">
									    		<figure class="full-width-image">
									    				<img src="<?php echo CFS()->get( 'full_width_image_2' ); ?>" alt="Project image">
									    				<figcaption class="cg-padding"><?php echo CFS()->get( 'full_width_image_caption_2' ); ?></figcaption>
									    		</figure>
									    	</div>
									  	</div>

									</div>

							<?php endif; ?>	

							<!-- Content Block -->
							<?php if ( CFS()->get( 'high_quality_delivered' ) ) : ?>

							<div class="parallax-caption-box">

									<div class="wrap">

										<div class="row">
											<div class="col-12 col-lg-8">
									    		<?php echo CFS()->get( 'high_quality_delivered' ); ?>
									    	</div>
									  	</div>

									</div>

							</div>

							<?php endif; ?>

						</div>

						

					</div>

				</div>

			</section><!--// .entry-content -->

		</article>

		<div class="viewport-animate mb-md">

			<div class="container-fluid">

	          	<div class="wrap">

		            <div class="row">
		              	<div class="col-12">
		            
		                	<?php include('get-in-touch.php');?>

		              	</div>
		            </div>

	          	</div>

	        </div>

		</div>


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
			<section class="related-posts viewport-animate">

				<div class="container-fluid">

					<div class="wrap">

					    <div class="row">
					      
					        <?php while ( $connected->have_posts() ) : $connected->the_post(); ?>
					          <div class="col-xs-12 col-sm-6">
					            <img src="<?php echo CFS()->get( 'small_image' ); ?>" width="200">
					            <h4><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
					            <p><?php echo CFS()->get( 'preview_image_hover_text' ); ?></p>
					          </div>
					        <?php endwhile; ?>

					    </div>

					</div>

				</div>

			</section>
		-->

			<?php 
				wp_reset_postdata();
				endif;
			?>
		
<?php get_footer(); ?>