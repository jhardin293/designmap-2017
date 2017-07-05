<?php 

  if ( $post = get_page_by_path( 'homepage/get-in-touch', OBJECT, 'page' ) )
      $postID = $post->ID;
  else
      $postID = 0;

  if ( $post ) {

?>

<div class="media media--contact">

    <img class="d-flex mr-4" src="<?php echo get_template_directory_uri(); ?>/library/images/get-in-touch.svg" width="90" height="76" alt="Contact icon">
    
    <div class="media-body align-self-center">
      
        <div class="text-36">
          <?php // echo $post->post_content; ?>
          <p>Let's talk about your needs and how we can help. 
            <span class="text-semibold">
              <!-- <a href="<?php echo CFS()->get( 'button_link', $pageID ); ?>" class="ga-contact-us" onClick="ga('send', 'event', 'Contact Us', 'button', 'mailto:audrey@designmap.com');">Get in touch</a> -->
              <a id="emailUs" href="#modal-emailUs" class="ga-contact-us modal-link">Get in touch</a>
            </span>
          </p>
        </div>

    </div><!--// .media-body -->

</div><!--// .media -->

<!-- Modal -->
  <div id="modal-emailUs" class="modal-screen">
      <div class="close-modal-emailUs modal-screen-dismiss"> 
          <svg class="icon icon-modal-dismiss" width="36" height="36"><use xlink:href="#icon-modal-dismiss"></use></svg>
      </div>
          
      <div class="modal-content container-fluid">
        
          <div class="wrap">

            <div class="row">

              <div class="col-12 col-md-8 offset-md-2">

                    <h1>Get in touch</h1>

                    <p class="modal-screen-tagline">
                      We’re glad you’re here. Send us a message, and we will connect you with one of the partners at the studio.
                    </p>

              <div class="row">
                <div class="col-12">
                    <div class="input-group contact-modal-copy-email">
                      <input id="emailNathan" type="text" class="form-control" value="info@designmap.com" placeholder="info@designmap.com" readonly="" aria-describedby="copyAddress">
                      <span data-clipboard="" data-clipboard-target="#emailNathan" class="input-group-addon copy-input-btn" id="copyAddress">Copy</span>
                    </div>
                </div>
              </div>

<!-- Begin Contact Form [contact-form-7 id="4514" title="DesignMap Contact Us"] -->
<div role="form" class="wpcf7" id="wpcf7-f4514-p4511-o1" lang="en-US" dir="ltr">
    <form action="/staging/#wpcf7-f4514-p4511-o1" method="post" class="wpcf7-form" novalidate="novalidate">
        <div style="display: none;">
            <input type="hidden" name="_wpcf7" value="4514" />
            <input type="hidden" name="_wpcf7_version" value="4.8" />
            <input type="hidden" name="_wpcf7_locale" value="en_US" />
            <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f4514-p4511-o1" />
            <input type="hidden" name="_wpcf7_container_post" value="4511" />
            <input type="hidden" name="_wpcf7_nonce" value="319c3d9318" />
        </div>
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="form-group">
                    <label> Your Name (required)
                        <span class="wpcf7-form-control-wrap your-name"><input type="text" name="your-name" value="" size="40" class="form-control wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" /></span> </label>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="form-group">
                    <label> Your Email (required)
                        <span class="wpcf7-form-control-wrap your-email"><input type="email" name="your-email" value="" size="40" class="form-control wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" /></span> </label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="form-group">
                    <label> Your Company
                        <span class="wpcf7-form-control-wrap your-company"><input type="text" name="your-company" value="" size="40" class="form-control wpcf7-form-control wpcf7-text" aria-invalid="false" /></span> </label>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="form-group">
                    <label> Your Role
                        <span class="wpcf7-form-control-wrap your-role"><input type="text" name="your-role" value="" size="40" class="form-control wpcf7-form-control wpcf7-text" aria-invalid="false" /></span> </label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="form-group">
                    <label> Your Message
                        <span class="wpcf7-form-control-wrap your-message"><textarea name="your-message" cols="40" rows="10" class="form-control wpcf7-form-control wpcf7-textarea" aria-invalid="false"></textarea></span> </label>
                </div>
            </div>
        </div>
        <input type="submit" value="Send" class="btn btn--primary btn--lg wpcf7-form-control wpcf7-submit" />
        <div class="wpcf7-response-output wpcf7-display-none"></div>
    </form>
</div>


                  </div>

              </div>

              </div>

      </div>
  </div>

<?php } ?>

<?php 
  // Prevent weirdness
  wp_reset_postdata();
?>