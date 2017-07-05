<article id="post-<?php the_ID(); ?>" <?php post_class('cf'); ?> role="article">

  <header class="article-header entry-header">

    <div class="wrap">
      
      <h1 class="entry-title single-title" rel="bookmark"><?php the_title(); ?></h1>

    </div>

  </header>

  <section class="entry-content">

    <?php 
      $fields = CFS()->get( 'parallax_section' );
      foreach ( $fields as $field ) { 
    ?>

      <?php if ( $field['parallax_image'] ) : ?>
        <div class="parallax-group parallax-group--page parallax-group--image">
      <?php else : ?>
        <div class="parallax-group parallax-group--page">
      <?php endif; ?>

        <?php if ( $field['parallax_image'] ) { ?>
          <div class="parallax-group__background" style="background-image:url(<?php echo $field['parallax_image']; ?>);"></div>
        <?php } ?>

        <?php if ( $field['parallax_copy'] ) { ?>
          <div class="parallax-group__copy">
            <div class="wrap">
              <?php echo $field['parallax_copy']; ?>
            </div>
          </div>
        <?php } ?>

      </div>

    <?php } ?>

  </section>

</article>
