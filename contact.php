<?php

    /*
    Template Name: Contact
    */
    
    get_header();
    
 ?>
    <!-- Modal -->
    <div id="modal-emailUs" class="modal-screen">
        <div class="close-modal-emailUs modal-screen-dismiss">
            <svg class="icon icon-modal-dismiss" width="36" height="36">
                <use xlink:href="#icon-modal-dismiss"></use>
            </svg>
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
                            <form action="/staging/contact/#wpcf7-f4514-p4511-o1" method="post" class="wpcf7-form" novalidate="novalidate">
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
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
    <div class="container-fluid">
        <div class="wrap">
            <div class="row">
                <div class="col-12">
                    <div class="section-title mb-0">
                        <h1 class="text-48 text-bold mb-4">Get in touch</h1>
                    </div>
                </div>
            </div>
            <div class="row mb--110">
                <div class="col-12 col-md-6 d-flex entry-content">
                    <?php if ( CFS()->get( 'column_one' ) ) : ?>
                    <div class="card">
                        <?php if ( CFS()->get( 'column_one_heading' ) ) : ?>
                        <header>
                            <h2><?php echo CFS()->get( 'column_one_heading' ); ?></h2>
                        </header>
                        <?php endif; ?>
                        <div class="card__body">
                            <?php echo CFS()->get( 'column_one' ); ?>
                        </div>
                        <div class="card__footer d-flex align-items-center">
                            <p class="m-0"><a id="emailUs" href="#modal-emailUs" class="btn btn--primary btn--lg modal-link">Contact Us</a></p>
                        </div>
                    </div>
                    <?php endif; ?>
                </div>
                <div class="col-12 col-md-6 d-flex entry-content">
                    <?php if ( CFS()->get( 'column_two' ) ) : ?>
                    <div class="card">
                        <?php if ( CFS()->get( 'column_two_heading' ) ) : ?>
                        <header>
                            <h2><?php echo CFS()->get( 'column_two_heading' ); ?></h2>
                        </header>
                        <?php endif; ?>
                        <div class="card__body">
                            <?php echo CFS()->get( 'column_two' ); ?>
                        </div>
                        <div class="card__footer d-flex align-items-center">
                            <div class="input-group">
                                <input id="emailNathan" type="text" class="form-control" value="nathan@designmap.com" placeholder="nathan@designmap.com" readonly aria-describedby="copyAddress">
                                <span data-clipboard data-clipboard-target="#emailNathan" class="input-group-addon copy-input-btn" id="copyAddress">Copy</span>
                            </div>
                        </div>
                    </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
    <div id="map"></div>
    <div class="wrap">
        <div class="address-box mb--110">
            <div class="media">
                <svg class="icon icon-map-marker d-flex mr--12" width="25" height="25">
                    <use xlink:href="#icon-map-marker"></use>
                </svg>
                <address class="media-body">
                    700 Alabama Street
                    <br> San Francisco, CA
                </address>
            </div>
            <div class="media">
                <svg class="icon icon-telephone d-flex mr--12" width="20" height="20">
                    <use xlink:href="#icon-telephone"></use>
                </svg>
                <tel class="media-body">
                    415-357-1875
                </tel>
            </div>
        </div>
    </div>
    <?php endwhile; endif; ?>
    <?php get_footer(); ?>
