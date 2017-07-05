<?php

	/*
	Template Name: Latest Chronology
	*/
	
	get_header();
	
 ?>

  
 	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

		<div class="container-fluid">

			<div class="wrap">

				<div class="row">
					<div class="col-12">

						<div class="section-title">
							<h1>Sharing is important to us. Discover <a href="http://chad.local:5757/designmap-2016/category/events/" rel="category tag">events</a>, <a href="http://chad.local:5757/designmap-2016/category/inspiration/" rel="category tag">inspiration</a> or <a href="http://chad.local:5757/designmap-2016/category/practice/" rel="category tag">design practice</a>.</h1>
						</div>

					</div>
				</div>

				<div class="row">
					<div class="col-12">

						<section>

							<?php
								
								$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
								$args = array(
									'category__not_in' => array( 37 ),
									'post_status' => 'publish',
									'post_type' => array( 'post', 'event' ),
									'posts_per_page' => 10,
									'paged' => $paged
								);

								$latestPosts = new WP_Query( $args );
								
								if ( $latestPosts->have_posts() ) :
									
									while ( $latestPosts->have_posts() ) : $latestPosts->the_post();
									$theCats = get_the_category(); ?>

										<?php 
												$thumb_id = get_post_thumbnail_id();
												$thumb_url = wp_get_attachment_image_src($thumb_id, 'large', true);
										?>
									
										<article class="blog-post media" itemtype="<?php the_permalink(); ?>">

												<div class="media flex-column flex-sm-row">
													<a href="<?php echo get_permalink( $post->ID ); ?>" aria-hidden="true">
														<figure>
															<img src="<?php echo $thumb_url[0]; ?>">
														</figure>
													</a>

													<div class="media-body">
													
														<h3 class="text-28"><a href='<?php echo get_permalink( $post->ID ); ?>'><?php the_title(); ?></a></h3>

														<div class="d-flex align-items-baseline text-14 text-semibold">
															<time datetime='<?php echo esc_attr( get_the_date( 'c' ) ); ?>'><?php echo esc_html( get_the_date( 'F Y' ) ); ?></time>
															<span class="blog-category">
																<?php printf( __( '', 'bonestheme' ).'%1$s', get_the_category_list(', ') ); ?>
															</span>
														</div>

													</div>

												</div>

										</article>
											
									<?php endwhile;

									if ( $latestPosts->max_num_pages > 1 ) :
									
									$nextSet = get_next_posts_link( '&laquo; Older Posts', $latestPosts->max_num_pages );
									$prevSet = get_previous_posts_link( 'Newer Posts &raquo;' ); ?>

									<nav class="pagination d-flex justify-content-between">
										
											<?php if( !empty( $nextSet ) ) { ?>
												<span><?php echo $nextSet; ?></span>
											<?php }; ?>

											<?php if( !empty( $prevSet ) ) { ?>
												<span><?php echo $prevSet; ?></span>
											<?php }; ?>
										
									</nav>

									<?php endif;
										
											wp_reset_postdata();
										
									else : ?>
							
								<article id="post-0" class="post no-results not-found">
									<header class="entry-header">
										<h1 class="entry-title"><?php _e( 'Nothing Found', 'designMap_2012' ); ?></h1>
									</header>
									
									<div class="entry-content">
										<p><?php _e( 'Apologies, but no results were found for the requested archive. Perhaps searching will help find a related post.', 'designMap_2012' ); ?></p>
									</div>
								</article>

							<?php endif; ?>


						</section>

					</div>
				</div>

				<div class="row">
		            <div class="col-12">
		              
		              <?php include('contact-footer.php');?>

		            </div>
		        </div>

			</div>

		</div>
	
	<?php endwhile; endif; ?>

<?php get_footer(); ?>