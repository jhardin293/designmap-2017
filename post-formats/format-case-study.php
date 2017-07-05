<article id="post-<?php the_ID(); ?>" <?php post_class('cf'); ?> role="article">

  <header>

      <!-- carousel -->
      <?php if ( CFS()->get( 'carousel_slides' ) ) { ?>

        <div class="carousel carousel--post">
            
            <div class="wrap">

              <h1><span>Work</span> <?php the_title(); ?></h1>

              <div class="slick-slider">

                <?php 
                  $fields = CFS()->get( 'carousel_slides' );
                  foreach ( $fields as $field ) { 
                ?>

                  <div>
                    <img src="<?php echo $field['carousel_image']; ?>" height="800" data-adaptive-background>
                  </div>

                <?php } ?>

              </div>

            </div>

        </div>

      <?php } ?>
      <!--// carousel -->

  </header>

  <section class="entry-content">

      <!-- tagline -->
      <?php if ( CFS()->get( 'tagline' ) ) : ?>

        <div class="wrap">
          
          <blockquote>
            <?php echo CFS()->get( 'tagline' ); ?>
          </blockquote>

        </div>

      <?php endif; ?>

      <!-- opening content block -->
      <?php if ( CFS()->get( 'content_block' ) ) : ?>

        <div class="wrap">

            <div class="case-studies-content-block copy-condensed content-block">

              <?php echo CFS()->get( 'content_block' ); ?>
              
              <?php if ( CFS()->get( 'quotation' ) && CFS()->get( 'quotation_author' ) ) : ?>
                
                    <div class="case-study-quotation">
                      <?php echo CFS()->get( 'quotation' ); ?>
                      <div class="case-study-quotation__author">
                        <?php echo CFS()->get( 'quotation_author' ); ?>
                      </div>
                    </div>
                
              <?php endif; ?>

            </div>

        </div><!--// wrap -->

      <?php endif; ?>


      <?php 
        $fields = CFS()->get( 'parallax_section' );
        foreach ( $fields as $field ) { 
      ?>

        <?php if ( $field['parallax_image'] ) : ?>
          <div class="parallax-group parallax-group--image">
        <?php else : ?>
          <div class="parallax-group">
        <?php endif; ?>

        <?php if ( $field['parallax_image'] ) { ?>
          <div class="parallax-group__background" style="background-image:url(<?php echo $field['parallax_image']; ?>);"></div>
        <?php } ?>

        <?php if ( $field['parallax_copy'] ) { ?>

          <?php if ( $field['parallax_image'] ) : ?>
            <div class="parallax-group__copy">
          <?php else : ?>
            <div class="parallax-group__copy copy-condensed content-block">
          <?php endif; ?>

              <div class="wrap">

                <?php if ( $field['parallax_image_caption'] ) { ?> 
                  <div class="parallax-group__caption">
                    <?php echo $field['parallax_image_caption']; ?>
                  </div>
                <?php } ?>

                <?php echo $field['parallax_copy']; ?>
              </div>

            </div>
          <?php } ?>

        </div>

      <?php } ?>

      </div>

    </section>


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

  <section class="related-posts">

    <div class="wrap">

      <div class="container-fluid">
  
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

  <?php 
    // Prevent weirdness
    wp_reset_postdata();

    endif;
  ?>


</article>
