<div class="row">

<?php 

  if ( $post = get_page_by_path( 'homepage/get-in-touch', OBJECT, 'page' ) )
      $postID = $post->ID;
  else
      $postID = 0;

  if ( $post ) {

?>

<div class="col-12 col-md-6">

    <div class="media media--contact media--contact-small">

        <img class="d-flex mr-4" src="<?php echo get_template_directory_uri(); ?>/library/images/get-in-touch.svg" width="90" height="76" alt="Contact icon">
        
        <div class="media-body align-self-center">
          
            <div class="text-24 text-light">
              <?php // echo $post->post_content; ?>
              <p>Let's talk about your needs and how we can help. 
              <span class="text-semibold d-block"><a href="<?php echo CFS()->get( 'button_link', $pageID ); ?>" class="ga-contact-us" onClick="ga('send', 'event', 'Contact Us', 'button', 'mailto:audrey@designmap.com');">Get in touch</a></span></p>
            </div>

        </div><!--// .media-body -->

    </div><!--// .media -->

</div>

<?php } ?>

<?php 
  // Prevent weirdness
  wp_reset_postdata();
?>

<?php 

  if ( $post = get_page_by_path( 'homepage/work-at-designmap', OBJECT, 'page' ) )
      $postID = $post->ID;
  else
      $postID = 0;

  if ( $post ) {

?>

<div class="col-12 col-md-6">

    <div class="media media--contact media--contact-small">

        <img class="d-flex mr-4" src="<?php echo get_template_directory_uri(); ?>/library/images/contact-us.svg" width="93" height="70" alt="Contact icon">
        
        <div class="media-body align-self-center">
          
            <p class="text-24 text-light">
              <?php echo $post->post_content; ?>
              <a href="<?php echo CFS()->get( 'button_link', $postID ); ?>" class="d-inline-block">
                <?php echo CFS()->get( 'button_text', $postID ); ?>
              </a>
            </p>

        </div><!--// .media-body -->

    </div><!--// .media -->

</div>

<?php } ?>

<?php 
  // Prevent weirdness
  wp_reset_postdata();
?>

</div>