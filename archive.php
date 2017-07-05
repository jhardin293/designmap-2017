<?php get_header(); ?>

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
							
							<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

								<?php 

										$theCats = get_the_category();
										$thumb_id = get_post_thumbnail_id();
										$thumb_url = wp_get_attachment_image_src($thumb_id, 'full', true);

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
								
									<?php endwhile; ?>

											<?php 

												$nextSet = get_next_posts_link( '&laquo; Older Posts' );
												$prevSet = get_previous_posts_link( 'Newer Posts &raquo;' ); 

												if( !empty( $nextSet ) || !empty( $prevSet ) ) {

											?>

												<nav class="pagination d-flex justify-content-between">
													<?php
														if( !empty( $nextSet ) ) { ?>						
														<span><?php echo $nextSet; ?></span>		
													<?php }; ?>
												
													<?php
														if( !empty( $prevSet ) ) { ?>						
														<span"><?php echo $prevSet; ?></span>	
													<?php }; ?>		
												</nav>
							
											<?php } ?>

									<?php else : ?>

										<article id="post-not-found" class="hentry cf">
											<header class="article-header">
												<h1><?php _e( 'Oops, Post Not Found!', 'bonestheme' ); ?></h1>
											</header>
											<section class="entry-content">
												<p><?php _e( 'Uh Oh. Something is missing. Try double checking things.', 'bonestheme' ); ?></p>
											</section>
											<footer class="article-footer">
													<p><?php _e( 'This is the error message in the archive.php template.', 'bonestheme' ); ?></p>
											</footer>
										</article>

							<?php endif; ?>

						</section>

					</div>
				</div>

			</div>

		</div>

	</div>

<?php get_footer(); ?>
