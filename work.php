<?php

	/*
	Template Name: Work
	*/
	
	get_header();

	require_once 'Mobile_Detect.php';
	$detect = new Mobile_Detect;
	
 ?>
  
 	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

		<div class="container-fluid">

			<div class="wrap">

				<div class="row">
					<div class="col-12">

						<div class="section-title">
							<?php if ( CFS()->get( 'page_headline' ) ) : ?>
								<h1><?php echo CFS()->get( 'page_headline' ); ?></h1>
							<?php endif; ?>
						</div>	

					</div>
				</div>
					
		  	</div>

		</div>

		<div class="max-width">

			<div class="packery--grid mb--110">
				<div class="packery-gutter"></div>

						<?php

							$values = CFS()->get( 'case_study_grid' );
							$index = 1;

							foreach ( $values as $post_id ) :
							    $the_post = get_post( $post_id );
								$post_url = get_permalink( $post_id );

								$large = CFS()->get( 'large_image', $post_id );
								$medium = CFS()->get( 'medium_image', $post_id ) ? CFS()->get( 'medium_image', $post_id ) : $large;
								$small = CFS()->get( 'small_image', $post_id );

								$pos = CFS()->get( 'image_position', $post_id );
								foreach ( $pos as $key => $position ) {

									switch ($position) {
									    case "Top Left":
									        $position = 'pos-top-left';
									        break;
									    case "Top Right":
									        $position = 'pos-top-right';
									        break;
									    case "Bottom Left":
									        $position = 'pos-bottom-left';
									        break;
									    case "Bottom Right":
									        $position = 'pos-bottom-right';
									        break;
									    default:
									        $position = 'pos-top-left';
									}
								};

								$dimension = CFS()->get( 'image_dimensions', $post_id );
								foreach ( $dimension as $key => $size ) {

									switch ($size) {
									    case "Small: 33% wide":
									        $size = 'size-33';
									        break;
									    case "Medium: 50% wide":
									        $size = 'size-50';
									        break;
									    case "Large: 66% wide":
									        $size = 'size-66';
									        break;
									    case "Tall: 66% vertical":
									        $size = 'size-66-vertical';
									        break;
									    default:
									        $size = 'size-33';
									}
								};

						?>

						<article class="packery-item <?php echo $position; ?> <?php echo $size; ?>">
							<?php if ( $detect->isMobile() || $detect->isTablet() ) { ?>
			 					<div style="background-image:url(<?php echo $small; ?>);">
							<?php } else { ?>
								<div style="background-image:url(<?php echo $large; ?>);">
							<?php } ?>
					              <a href="<?php echo $post_url; ?>" aria-label="<?php echo $the_post->post_title; ?> page">
					                  <figure>
					                    <figcaption>
					                    	<?php if ( CFS()->get( 'hover_title', $post_id ) ) : ?>
					                    		<h4 class="h2 color--white"><?php echo CFS()->get( 'hover_title', $post_id ); ?></h4>
					                    	<?php endif; ?>
					                      <p class="text-14"><?php echo CFS()->get( 'preview_image_hover_text', $post_id ); ?></p>
					                    </figcaption>
					                  </figure>
					              </a>
					            </div>
				        </article>
					
		    	<?php 

		    		$index++;
		    		endforeach; 

		    	?>

	    	</div><!--// packery-grid -->

	    </div>

		<div class="container-fluid">

			<!-- content -->
			<div class="wrap">
				<div class="row entry-content mb--80">

					<?php if ( CFS()->get( 'column_one' ) ) : ?>
						<div class="col-12 col-md-6 body2">
							<?php echo CFS()->get( 'column_one' ); ?>
						</div>
					<?php endif; ?>

					<?php if ( CFS()->get( 'column_two' ) ) : ?>
						<div class="col-12 col-md-6 body2">
							<?php echo CFS()->get( 'column_two' ); ?>
						</div>
					<?php endif; ?>
					
				</div>
			</div>
			<!--// content -->

			

			 	<?php

			 		$clientLogos = new WP_Query( array( 'pagename' => 'client-logos' ) );
			 	
				 	if ( $clientLogos->have_posts() ) {

						while ( $clientLogos->have_posts() ) {

							$clientLogos->the_post();

				    		if ( CFS()->get( 'client_logos' ) ) { 

				?>
				
								<!-- client logos -->
								<div>
									<div class="wrap">
										<div class="row">
							
											<div class="col-12">

												<div class="client-logos">

													<h2 class="mb--30"><?php echo get_the_title(); ?></h2>

											      	<ul class="list-unstyled d-flex flex-wrap align-items-center">

												        <?php 
												          $fields = CFS()->get( 'client_logos' );
												          foreach ( $fields as $field ) { 
												        ?>

												        <li>
												        	<img src="<?php echo $field['logo_image']; ?>" width="<?php echo $field['logo_width']; ?>">
												        </li>
												          
												        <?php } ?>

											       	</ul>

											    </div><!--// client-logos -->
											</div><!--// col -->

										</div><!--// row -->
									</div>
								</div>
								<!--// client logos -->

			<?php 
						} 
					}
					// prevent weirdness
					wp_reset_postdata();
				}

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

		</div><!--// container-fluid -->

		<?php endwhile; endif; ?>
	
<?php get_footer(); ?>