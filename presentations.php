<?php

  /*
  Template Name: presentations
  */

  get_header();

  global $post;

  // Query Careers
  $args  = array(
    'post_status' => 'publish',
    'post_type' => 'Presentations',
    'orderby' => 'date'
  );
  
  $presentations = new WP_Query($args); 

 ?>

        <div class="container-fluid">

          <div class="wrap">

            <div class="row">

              <div class="col-xs-12 col-sm-6">
                <h1><?php the_title(); ?></h1>
              </div>
              
              <div class="col-xs-12 col-sm-6">
                Search
              </div>

            </div>

            <div class="row">

                <div class="col-xs-12 col-sm-5">
                  <strong>Topic</strong>
                </div>

                <div class="col-xs-12 col-sm-2">
                  <strong>Date</strong>
                </div>

                <div class="col-xs-12 col-sm-5">
                  <strong>Materials</strong>
                </div>

            </div>

            <?php if ( $presentations->have_posts() ) :

              while ( $presentations->have_posts() ) : $presentations->the_post(); ?>

                  <div class="row">
                    
                    <div class="col-xs-12 col-sm-5">
                      <h4><?php the_title(); ?></h4> 
                      <?php echo CFS()->get( 'description' );  ?>
                    </div>

                    <div class="col-xs-12 col-sm-2">
                      <?php echo get_the_date( 'M j, Y' ); ?>
                    </div>

                    <div class="col-xs-12 col-sm-5">
                        
                        <div class="row">
                          
                          <div class="col-xs-12 col-sm-6">
                            <a href="<?php echo CFS()->get( 'presentation' ); ?>">Presentation</a>
                          </div>
                          <div class="col-xs-12 col-sm-6">
                            <a href="<?php CFS()->get( 'video' ); ?>">Video</a>
                          </div>

                        </div>

                        <div class="row">

                          <div class="col-xs-12 col-sm-6">
                            <a href="<?php CFS()->get( 'text_outline' ); ?>">Text Outline</a>
                          </div>
                          <div class="col-xs-12 col-sm-6">
                            <a href="<?php CFS()->get( 'webex_recording' ); ?>">Webex Recording</a>
                          </div>

                        </div>

                    </div>
                    
                  </div><!--// row -->

            <?php endwhile;
                  wp_reset_postdata();
                  endif;
            ?>

        </div><!--// wrap -->
    
      </div><!--// container-fluid -->

    
<?php get_footer(); ?>
