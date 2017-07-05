<?php get_header(); ?>


	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

			<article id="post-<?php the_ID(); ?>" <?php post_class('cf'); ?> role="article">

				<?php if (!is_singular('careers')) { ?>

					<header class="hero">

						<div class="wrap">

							<p>Blog</p>
							<h1><?php the_title(); ?></h1>

							<figure>

								<?php 
									if ( '' != get_the_post_thumbnail() ) { 
				            			the_post_thumbnail('full');
				            		} else {
				          		?>
				            		<img src="<?php echo get_template_directory_uri(); ?>/library/images/no-image.png" width="990" height="495">	
								<?php } ?>

							</figure>

						</div>

					</header>
				
				<?php } ?>

				<section class="entry-content mb--50">

					<div class="container-fluid">

						<div class="wrap">

							<?php get_template_part( 'post-formats/format', get_post_format() ); ?>
								
						</div>

					</div>

				</section>

				<div class="wrap">

					<div class="media mb--80">
		
						<?php echo get_avatar( get_the_author_meta('user_email'), $size = '75'); ?>

						<div class="media-body align-self-center ml-3">

							<?php 
								$member_info = get_userdata( get_the_author_meta( 'ID' ) ); 
								$member_title = get_the_author_meta( 'title', $member_info->ID );
							?>

							<p class="m-0 text-14 text-semibold text-uppercase"><?php echo $member_title; ?></p>

							<p class="m-0"><?php echo get_the_author_meta('first_name'); ?> <?php echo get_the_author_meta('last_name'); ?></p>

						</div>

					</div>

				</div>

			</article>

	
	<?php endwhile; endif; ?>

	<!-- Contact links -->
    <div class="container-fluid">

        <div class="wrap">

          	<div class="row">
            	<div class="col-12">
              
              		<?php include('contact-footer.php');?>

            	</div>
        	</div>

        </div>

    </div>
    <!--// Contact links -->
		
<?php get_footer(); ?>