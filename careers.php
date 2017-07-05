<?php

	/*
	Template Name: Careers
	*/
	
	get_header();

	global $post;

	require_once 'Mobile_Detect.php';
	$detect = new Mobile_Detect;

	// Query Careers
	$args  = array(
	    'post_status' => 'publish',
	    'post_type' => 'Careers',
	    'orderby' => 'name'
	);
	  
	$DM_careers = new WP_Query($args); 
	
 ?>

<!-- Modals -->
<?php while ( $DM_careers->have_posts() ) : $DM_careers->the_post(); ?>
  
    <div id="modal-<?php the_ID(); ?>" class="modal-screen">
        <div class="close-modal-<?php the_ID(); ?> modal-screen-dismiss"> 
            <svg class="icon icon-modal-dismiss" width="28" height="28"><use xlink:href="#icon-modal-dismiss"></use></svg>
        </div>
            
        <div class="modal-content container-fluid">

			<div class="wrap">

    			<div class="row">
    				<div class="col-12 col-md-8 offset-md-2">

			        	<p class="modal-screen-eyebrow">Role</p>
			            <h1><?php the_title(); ?></h1>

			            <div class="modal-screen-tagline">
			            	<?php the_excerpt(); ?>
			            </div>

			            <?php the_content(); ?>

			            <h5>To Apply</h5>
			            <p>Provide a PDF version of your resume and a link to your portfolio of work to <a href="mailto:nathan@designmap.com?subject=Work at DesignMap">Nathan</a>.</p>
			            <p>Project case studies should show a range of final deliverables, and samples of design process created throughout.</p>
			            <p>Please take the time to peruse our site and project work, and create a cover email that introduces yourself. Use a boilerplate cover email at your own peril.</p>

			        </div>
				</div>

			</div>
        	
        </div>
	</div>
<?php endwhile; ?>
<!--// Modals -->

 	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

		<div class="container-fluid">

			<div class="wrap">

				<div class="row mb--10">
					<div class="col-12">
			  
			  			<div class="section-title">
							<h1><?php echo CFS()->get( 'page_headline' ); ?></h1>
						</div>

					</div>
				</div>
	
				<div class="row">
					<div class="col-12 ">

						<div class="career-list mb--110">

							<h2 class="mb--10"><?php echo CFS()->get( 'open_roles_heading' ); ?></h2>

							<!-- Open Positions -->
							<ul class="d-flex flex-column flex-md-row flex-wrap list-unstyled row">
								<?php while ( $DM_careers->have_posts() ) : $DM_careers->the_post(); ?>
						          <li class="text-24 text-semibold mb-3 col-12 col-sm-5">
						            <a id="<?php the_ID(); ?>" href="#modal-<?php the_ID(); ?>" class="modal-link">
						              <?php the_title(); ?>
						            </a>
						          </li>
						        <?php endwhile; ?>
						    </ul>
							<!--// Open Positions -->

							<?php wp_reset_postdata(); ?>

						</div>

					</div>
				</div>

			</div>

		</div><!--// .container-fluid -->

		<!-- Our Values Carousel -->
		<?php if ( CFS()->get( 'our_values_carousel' ) ) { ?>
			<div class="banner mb--110">

				<div class="wrap">

					<h2><?php echo CFS()->get( 'our_values_heading' ); ?></h2>

					<div class="slick-slider slick--marquee">

		                <?php 
		                  $fields = CFS()->get( 'our_values_carousel' );
		                  foreach ( $fields as $field ) {
		                ?>

		                  <div>
		                  	<?php if ( $field['slide_heading'] ) { ?>
		                    	<h3><?php echo $field['slide_heading']; ?></h3>
		                    <?php } ?>
		                    <?php if ( $field['slide_text'] ) { ?>
		                    	<p><?php echo $field['slide_text']; ?></p>
		                    <?php } ?>
		                  </div>

		                <?php } ?>

		            </div>
				</div>

			</div>
		<?php } ?>
		<!--// Our Values Carousel -->

		<div class="container-fluid">

			<!-- First Paragraph -->
			<?php if ( CFS()->get( 'first_paragraph' ) ) { ?>
				<div class="wrap">

					<div class="row mb--110">
						<div class="col-12">

							<div class="text-28 text-light">
								<?php echo CFS()->get( 'first_paragraph' ); ?>
							</div>
							
						</div>
					</div>

				</div>
			<?php } ?>
			<!--// First Paragraph -->

				<div class="max-width">

					<div class="packery--grid">
						<div class="packery-gutter"></div>

					        <article class="packery-item size-66">
								<?php if ( $detect->isMobile() || $detect->isTablet() ) { ?>
				 					<div style="background-image:url(<?php echo get_template_directory_uri(); ?>/library/images/img_1916.jpg); background-position: 0 -110px;">
								<?php } else { ?>
									<div style="background-image:url(<?php echo get_template_directory_uri(); ?>/library/images/img_1916.jpg); background-position: 0 -110px;">
								<?php } ?>
						            </div>
					        </article>

					        <article class="packery-item size-33">
								<?php if ( $detect->isMobile() || $detect->isTablet() ) { ?>
				 					<div style="background-image:url(<?php echo get_template_directory_uri(); ?>/library/images/GroupPhoto.jpg); background-position: 0 -65px;">
								<?php } else { ?>
									<div style="background-image:url(<?php echo get_template_directory_uri(); ?>/library/images/GroupPhoto.jpg); background-position: 0 -65px;">
								<?php } ?>
						            </div>
					        </article>

							<article class="packery-item size-50">
								<?php if ( $detect->isMobile() || $detect->isTablet() ) { ?>
				 					<div style="background-image:url(<?php echo get_template_directory_uri(); ?>/library/images/P7085171.jpg); background-position: 0 -45px;">
								<?php } else { ?>
									<div style="background-image:url(<?php echo get_template_directory_uri(); ?>/library/images/P7085171.jpg); background-position: 0 -45px;">
								<?php } ?>
						            </div>
					        </article>

					        <article class="packery-item size-50">
								<?php if ( $detect->isMobile() || $detect->isTablet() ) { ?>
				 					<div style="background-image:url(<?php echo get_template_directory_uri(); ?>/library/images/P6284885.jpg); background-position: center;">
								<?php } else { ?>
									<div style="background-image:url(<?php echo get_template_directory_uri(); ?>/library/images/P6284885.jpg); background-position: center;">
								<?php } ?>
						            </div>
					        </article>

			    	</div><!--// packery-grid -->

			    </div>

			<div class="wrap">


				<!-- Work at DesignMap -->
	            <div class="row">
	              <div class="col-12 col-md-10 offset-md-1">
	            
	                <?php include('work-at-designmap.php');?>

	              </div>
	            </div>
				<!--// Work at DesignMap -->

			</div><!--// .wrap -->

		</div><!--// .container-fluid -->

		<?php wp_reset_postdata(); ?>

	<?php endwhile; endif; ?>

<?php get_footer(); ?>