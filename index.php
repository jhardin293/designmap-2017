<?php get_header(); ?>

<?php

  require_once 'Mobile_Detect.php';
  $detect = new Mobile_Detect;
  $pageID = get_id_by_slug('homepage');

  $args = array(
    'post_type' => 'page',
    'page_id' => $pageID
  );

  $post = get_posts( $args );

  if ( $post ) {

?>

    <section class="homepage-proper mt-md">

      <div class="container-fluid">

        <div class="wrap">

          <div class="row mt--85 mb--160">
            <div class="col-12 col-md-10 offset-md-1">

              <?php if ( CFS()->get( 'body_content', $pageID ) ) : ?>
                <div class="text-36">
                    <?php echo CFS()->get( 'body_content', $pageID ); ?>
                </div>
              <?php endif; ?>

            </div>
          </div>

        </div>

      </div>

      <!-- Packery Grid -->
      <div class="max-width">

        <div class="packery--grid">
          <div class="packery-gutter"></div>

            <?php

              $values = CFS()->get( 'homepage_grid', $pageID );
              $index = 1;

              foreach ( $values as $post_id ) :
                $the_post = get_post( $post_id );
                $post_url = get_permalink( $post_id );

                $large = CFS()->get( 'large_image', $post_id );
                $medium = CFS()->get( 'medium_image', $post_id ) ? CFS()->get( 'medium_image', $post_id ) : $large;
                $small = CFS()->get( 'small_image', $post_id ) ? CFS()->get( 'small_image', $post_id ) : $large;

                $pos = CFS()->get( 'image_position', $post_id );
                foreach ( $pos as $key => $position ) {

                  switch ($position) {
                      case "Top Left":
                          $position = 'pos-top-left';
                          break;
                      case "Top Right":
                          $position = 'pos-top-right';
                          break;
                      case "Bottom Left":
                          $position = 'pos-bottom-left';
                          break;
                      case "Bottom Right":
                          $position = 'pos-bottom-right';
                          break;
                      default:
                          $position = 'pos-top-left';
                  }
                };

                $dimension = CFS()->get( 'image_dimensions', $post_id );
                foreach ( $dimension as $key => $size ) {

                  switch ($size) {
                      case "Small: 33% wide":
                          $size = 'size-33';
                          break;
                      case "Medium: 50% wide":
                          $size = 'size-50';
                          break;
                      case "Large: 66% wide":
                          $size = 'size-66';
                          break;
                      case "Tall: 66% vertical":
                          $size = 'size-66-vertical';
                          break;
                      default:
                          $size = 'size-33';
                  }
                };

            ?>

            <?php if (strpos($post_url, 'testimonies') !== false) { ?>

              <article class="packery-item packery-testimonial size-66 d-flex justify-content-center flex-column">
                <div>
                  <blockquote>
                    <h4 class="text-28 text-bold color--white mb--20">“<?php echo $the_post->post_title; ?>”</h4>
                    <p><?php echo CFS()->get( 'author', $post_id ); ?></p>
                    <p><?php echo CFS()->get( 'author_company', $post_id ); ?></p>
                  </blockquote>
                </div>
              </article>

            <?php } else { ?>

              <article class="packery-item <?php echo $position; ?> <?php echo $size; ?>">
                <?php if ( $detect->isMobile() || $detect->isTablet() ) { ?>
                  <div style="background-image:url(<?php echo $small; ?>);">
                <?php } else { ?>
                  <div style="background-image:url(<?php echo $large; ?>);">
                <?php } ?>
                  <a href="<?php echo $post_url; ?>" aria-label="<?php echo $the_post->post_title; ?> page">
                      <figure>
                        <figcaption>
                          <?php if ( CFS()->get( 'hover_title', $post_id ) ) : ?>
                            <h6 class="h2 color--white"><?php echo CFS()->get( 'hover_title', $post_id ); ?></h6>
                          <?php endif; ?>
                            <?php echo CFS()->get( 'preview_image_hover_text', $post_id ); ?>
                        </figcaption>
                      </figure>
                  </a>
                </div>
              </article>

            <?php } ?>

            <?php 

              $index++;
              endforeach; 

            ?>

        </div>
        <!--// packery-grid -->

      </div>

      <!-- Contact links -->
      <div class="container-fluid">

        <div class="wrap">

          <div class="row">
            <div class="col-12 col-md-10 offset-md-1">
              
              <?php include('get-in-touch.php');?>

            </div>
          </div>

        </div>

      </div>
      <!--// Contact links -->
        
    </section>

<?php } ?>

<?php 
  // Prevent weirdness
  wp_reset_postdata();
?>

<?php get_footer(); ?>