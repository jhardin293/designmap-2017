<?php get_header(); ?>

		<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

		<article id="post-<?php the_ID(); ?>" <?php post_class( 'cf' ); ?> role="article">

			<h1><?php the_title(); ?></h1>

			<section>
				<?php the_content(); ?>
			</section> 

		</article>

		<?php endwhile; endif; ?>


<?php get_footer(); ?>