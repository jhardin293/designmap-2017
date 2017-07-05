<?php

	/*
	Template Name: Working with us
	*/
	
	get_header();
	
 ?>

	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

		<div class="banner banner--large mb--80">

			<div class="container-fluid">
			
				<div class="wrap d-flex justify-content-center align-items-center flex-column text-center">
					
					<div class="row">

						<div class="col-12 col-md-8 offset-md-2">
							
							<h1 class="text-48 text-bold mb--10"><?php the_title(); ?></h1>
							<?php echo CFS()->get( 'banner_text' ); ?>

						</div>

					</div>

				</div>	

			</div>

		</div>

		<div class="container-fluid">

			<div class="wrap">

				<!-- First Paragraph -->
				<?php if ( CFS()->get( 'first_paragraph' ) ) { ?>
					
					<div class="row mb--80">
						<div class="col-12 col-md-10 offset-md-1">

							<div class="text-28 text-light entry-content">
								<?php echo CFS()->get( 'first_paragraph' ); ?>
							</div>

						</div>
					</div>

				<?php } ?>
				<!--// First Paragraph -->

				<!-- Project Types -->
				<?php if ( CFS()->get( 'project_types_heading' ) ) { ?>
					
					<div class="row">
						<div class="col-12">

							<h2 class="text-20 mb--30"><?php echo CFS()->get( 'project_types_heading' ); ?></h2>

						</div>
					</div>

				<?php } ?>
				<!--// Project Types -->
	
				<!-- Project Types -->
				<?php if ( CFS()->get( 'first_project_type_heading' ) ) { ?>
					
					<div class="row mb--110">
						<div class="col-12 col-md-4 entry-content"> 

							<h3 class="body1 text-capitalize"><?php echo CFS()->get( 'first_project_type_heading' ); ?></h3>
							<?php echo CFS()->get( 'first_project_type_text' ); ?>

						</div>

						<div class="col-12 col-md-4 entry-content"> 

							<h3 class="body1 text-capitalize"><?php echo CFS()->get( 'second_project_type_heading' ); ?></h3>
							<?php echo CFS()->get( 'second_project_type_text' ); ?>

						</div>

						<div class="col-12 col-md-4 entry-content"> 

							<h3 class="body1 text-capitalize"><?php echo CFS()->get( 'third_project_type_heading' ); ?></h3>
							<?php echo CFS()->get( 'third_project_type_text' ); ?>

						</div>
					</div>

				<?php } ?>
				<!--// Project Types -->

			</div>

			<!-- Download for Printing -->
			<?php if ( CFS()->get( 'pdf_heading' ) ) { ?>
			<div class="pdf-wrapper">
				<a class="pdf-download no-smoothState" href="<?php echo get_template_directory_uri(); ?>/library/images/pdf-test.pdf" download>Download for printing</a>

				<div class="wrap">

					<h1 class="mb--80"><?php echo CFS()->get( 'pdf_heading' ); ?></h1>

					<div class="pdf-wrapper__columns entry-content">

						<div class="row">

							<?php if ( CFS()->get( 'column_one' ) ) { ?>
							<div class="col-12 col-md-6 body2">
								<?php echo CFS()->get( 'column_one' ); ?>
							</div>
							<?php } ?>

							<?php if ( CFS()->get( 'column_two' ) ) { ?>
							<div class="col-12 col-md-6 body2">
								<?php echo CFS()->get( 'column_two' ); ?>
							</div>
							<?php } ?>

						</div>

					</div>

				</div>
			</div>
			<?php } ?>
			<!--// Download for Printing -->

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