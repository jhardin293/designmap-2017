<?php 

  if ( $post = get_page_by_path( 'homepage/work-at-designmap', OBJECT, 'page' ) )
      $postID = $post->ID;
  else
      $postID = 0;

  if ( $post ) {

?>

<div class="media media--contact">

    <img class="d-flex mr-4" src="<?php echo get_template_directory_uri(); ?>/library/images/contact-us.svg" width="93" height="70" alt="Contact icon">
    
    <div class="media-body align-self-center">
      
        <p class="text-36">
          <?php echo $post->post_content; ?>
          <a href="<?php echo CFS()->get( 'button_link', $postID ); ?>">
            <?php echo CFS()->get( 'button_text', $postID ); ?>
          </a>
        </p>

    </div><!--// .media-body -->

</div><!--// .media -->


<?php } ?>

<?php 
  // Prevent weirdness
  wp_reset_postdata();
?>