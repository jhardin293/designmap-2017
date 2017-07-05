							
							<div class="meta" style="display: none;" aria-hidden="true">
		
								<?php if ( CFS()->get( 'meta_description' )) { ?>
									<span class="seo_description"><?php echo CFS()->get( 'meta_description' ); ?></span>
								<?php } elseif ( CFS()->get( 'tagline' )) { ?>
									<span class="seo_description"><?php echo CFS()->get( 'tagline' ); ?></span>
								<?php } else { ?>
									<span class="seo_description"><?php bloginfo('description'); ?></span>
								<?php } ?>
								
								<?php if ( CFS()->get( 'meta_keywords' )) { ?>
									<span class="seo_keywords"><?php echo CFS()->get( 'meta_keywords' ); ?></span>
								<?php } else { ?>
									<span class="seo_keywords">something</span>
								<?php } ?>

							</div>

					</main>

					<footer class="page-footer" role="contentinfo">

						<div class="container-fluid">

							<div class="wrap">

								<div class="row">

									<div class="col-12 col-sm-6">

										<h2 class="text-28 text-semibold">Design that matters.<br>Designers you can trust.</h2>

									</div>

									<div class="col-12 col-sm-6">

										<nav role="navigation" aria-label="site navigation">
											<?php wp_nav_menu(array(
											'container' => 'div',                           
											'container_class' => 'footer-links', 
											'menu' => __( 'Footer Links', 'bonestheme' ),
											'menu_class' => 'footer-nav list-unstyled', 
											'theme_location' => 'footer-links', 
											'before' => '',                                 
											'after' => '',                                 
											'link_before' => '',                           
											'link_after' => '',                             
											'depth' => 0,                                  
											'fallback_cb' => 'bones_footer_links_fallback'
											)); ?>
										</nav>

									</div>

								</div>

								<div class="row align-items-center">

									<div class="col-12 col-sm-4 flex-sm-last">
										
										<!--
										<nav role="navigation" aria-label="DesignMap social media links">
											<?php wp_nav_menu(array(
											'container' => '',                           
											'container_class' => 'social-icons', 
											'menu' => __( 'Social Icons', 'bonestheme' ),
											'menu_class' => 'social-nav list-unstyled', 
											'theme_location' => 'social-icons', 
											'before' => '',                                 
											'after' => '',                                 
											'link_before' => '<span class="visually-hidden">',                           
											'link_after' => '</span>',                             
											'depth' => 0,                                  
											'fallback_cb' => 'bones_social_icons_fallback'
											)); ?>
										</nav>
										-->

										<nav role="navigation" aria-label="DesignMap social media links">
											<ul class="social-nav d-flex justify-content-md-end list-unstyled">
												<li>
													<a href="https://www.linkedin.com/company/designmap">
														<svg class="icon icon-linkedin" width="28" height="28"><use xlink:href="#icon-linkedin"></use></svg><span class="sr-only"> LinkedIn</span>
													</a>
												</li>
												<li>
													<a href="https://twitter.com/designmap">
														<svg class="icon icon-twitter" width="28" height="28"><use xlink:href="#icon-twitter"></use></svg><span class="sr-only"> Twitter</span>
													</a>
												</li>
												<li>
													<a href="https://medium.com/search?q=designmap">
														<svg class="icon icon-medium" width="28" height="28"><use xlink:href="#icon-medium"></use></svg><span class="sr-only"> Medium</span>
													</a>
												</li>
												<li>
													<a href="https://www.facebook.com/DesignMap">
														<svg class="icon icon-facebook" width="28" height="28"><use xlink:href="#icon-facebook"></use></svg><span class="sr-only"> Facebook</span>
													</a>
												</li>
											</ul>
										</nav>

									</div>

									<div class="col-12 col-sm-8 flex-sm-first">

										<p>&copy; <?php echo date('Y'); ?> DesignMap, Inc. All rights reserved.</p>

									</div>

								</div>

							</div>

						</div>

					</footer>

		</div><!--// #page -->

	<?php wp_footer(); ?>

	</body>

</html>
