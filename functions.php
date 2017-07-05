<?php
/*
Author: Eddie Machado
URL: http://themble.com/bones/

This is where you can drop your custom functions or
just edit things like thumbnail sizes, header images,
sidebars, comments, etc.
*/

// LOAD BONES CORE (if you remove this, the theme will break)
require_once( 'library/bones.php' );

// CUSTOMIZE THE WORDPRESS ADMIN (off by default)
// require_once( 'library/admin.php' );

/*********************
LAUNCH BONES
Let's get everything up and running.
*********************/

function bones_ahoy() {

  //Allow editor style.
  // add_editor_style( get_stylesheet_directory_uri() . '/library/css/editor-style.css' );

  // let's get language support going, if you need it
  load_theme_textdomain( 'bonestheme', get_template_directory() . '/library/translation' );

  // launching operation cleanup
  add_action( 'init', 'bones_head_cleanup' );
  // A better title
  add_filter( 'wp_title', 'rw_title', 10, 3 );
  // remove WP version from RSS
  add_filter( 'the_generator', 'bones_rss_version' );
  // remove pesky injected css for recent comments widget
  add_filter( 'wp_head', 'bones_remove_wp_widget_recent_comments_style', 1 );
  // clean up comment styles in the head
  add_action( 'wp_head', 'bones_remove_recent_comments_style', 1 );
  // clean up gallery output in wp
  add_filter( 'gallery_style', 'bones_gallery_style' );

  // enqueue base scripts and styles
  add_action( 'wp_enqueue_scripts', 'bones_scripts_and_styles', 999 );
  // ie conditional wrapper

  // launching this stuff after theme setup
  bones_theme_support();

  // adding sidebars to Wordpress (these are created in functions.php)
  add_action( 'widgets_init', 'bones_register_sidebars' );

  // cleaning up random code around images
  add_filter( 'the_content', 'bones_filter_ptags_on_images' );
  // cleaning up excerpt
  add_filter( 'excerpt_more', 'bones_excerpt_more' );

} /* end bones ahoy */

// let's get this party started
add_action( 'after_setup_theme', 'bones_ahoy' );


/************* OEMBED SIZE OPTIONS *************/

if ( ! isset( $content_width ) ) {
	$content_width = 680;
}

/***************************************/
// custom post type for Careers
/***************************************/
add_action( 'init', 'create_career_post_type' );
function create_career_post_type() {
  $labels = array(
    'name' => __( 'Careers' ),
    'singular_name' => __( 'Position' ),
    'add_new' => __( 'Add New Position' ),
    'add_new_item' => __( 'Add New Position' ),
    'all_items' => __( 'All Positions' ),
    'edit_item' => __( 'Edit Position' ),
    'new_item' => __( 'New Position' ),
    'view_item' => __( 'View Position' ),
    'not_found' => __( 'No Positions found' ),
    'parent' => __( 'Parent Position' )
  );
  
  $args = array(
    'labels' => $labels,
    'public' => true,
    'show_ui' => true,
    'publicly_queryable' => true,
    'exclude_from_search' => false,
    'has_archive' => false, //change to true for archive.php template
    'menu_position' => 8,
    'capability_type' => 'page',
    'hierarchical' => true,
    'query_var' => true,
    'rewrite' => array( 'with_front' => false ),
    'supports' => array('title', 'editor', 'excerpt', 'author', 'page-attributes')
    //'show_in_rest' => true,
    //'rest_base' => 'careers-api',
    //'rest_controller_class' => 'WP_REST_Posts_Controller'
  );
  
  register_post_type( 'careers', $args );
}

/***************************************/
// custom post type for Careers
/***************************************/
add_action( 'init', 'create_prototype_post_type' );
function create_prototype_post_type() {
  $labels = array(
    'name' => __( 'Prototype' ),
    'singular_name' => __( 'Prototype' ),
    'add_new' => __( 'Add New Prototype' ),
    'add_new_item' => __( 'Add New Prototype' ),
    'all_items' => __( 'All Prototypes' ),
    'edit_item' => __( 'Edit Prototype' ),
    'new_item' => __( 'New Prototype' ),
    'view_item' => __( 'View Prototype' ),
    'not_found' => __( 'No Prototypes found' ),
    'parent' => __( 'Parent Prototype' )
  );
  
  $args = array(
    'labels' => $labels,
    'public' => true,
    'show_ui' => true,
    'publicly_queryable' => true,
    'exclude_from_search' => false,
    'has_archive' => false, //change to true for archive.php template
    'menu_position' => 8,
    'capability_type' => 'page',
    'hierarchical' => true,
    'query_var' => true,
    'rewrite' => array( 'with_front' => false ),
    'supports' => array('title', 'editor', 'page-attributes')
    //'show_in_rest' => true,
    //'rest_base' => 'prototype-api',
    //'rest_controller_class' => 'WP_REST_Posts_Controller'
  );
  
  register_post_type( 'prototypes', $args );
}

/***************************************/
// custom post type for Events
/***************************************/
add_action( 'init', 'create_events_post_type' );
function create_events_post_type() {
  $labels = array(
    'name' => __( 'Events' ),
    'singular_name' => __( 'Event' ),
    'add_new' => __( 'Add Event' ),
    'add_new_item' => __( 'Add Event' ),
    'all_items' => __( 'All Events' ),
    'edit_item' => __( 'Edit Event' ),
    'new_item' => __( 'New Event' ),
    'view_item' => __( 'View Event' ),
    'not_found' => __( 'No Events found' ),
    'parent' => __( 'Parent Event' )
  );
  
  $args = array(
    'labels' => $labels,
    'public' => true,
    'show_ui' => true,
    'publicly_queryable' => true,
    'exclude_from_search' => false,
    'has_archive' => false,
    'menu_position' => 6,
    'capability_type' => 'post',
    'hierarchical' => true,
    'query_var' => true,
    'rewrite' => array( 'with_front' => true ),
    'supports' => array('title', 'editor', 'excerpt', 'thumbnail')
    //'show_in_rest' => true,
    //'rest_base' => 'events-api',
    //'rest_controller_class' => 'WP_REST_Posts_Controller'
  );
  
  register_post_type( 'event', $args );
}

/***************************************/
// custom post type for Case Studies
/***************************************/
add_action( 'init', 'create_case_studies_post_type' );
function create_case_studies_post_type() {
  $labels = array(
    'name' => __( 'Case Studies' ),
    'singular_name' => __( 'Case Study' ),
    'add_new' => __( 'Add Case Study' ),
    'add_new_item' => __( 'Add Case Study' ),
    'all_items' => __( 'All Case Studies' ),
    'edit_item' => __( 'Edit Case Study' ),
    'new_item' => __( 'New Case Study' ),
    'view_item' => __( 'View Case Study' ),
    'not_found' => __( 'No Case Studies found' ),
    'parent' => __( 'Parent Case Study' )
  );
  
  $args = array(
    'labels' => $labels,
    'public' => true,
    'show_ui' => true,
    'publicly_queryable' => true,
    'exclude_from_search' => false,
    'has_archive' => false,
    'menu_position' => 6,
    'capability_type' => 'post',
    'hierarchical' => true,
    'query_var' => true,
    'rewrite' => array( 'with_front' => true ),
    'supports' => array('title', 'editor')
  );
  
  register_post_type( 'case-studies', $args );
  flush_rewrite_rules();
}

/***************************************/
// custom post type for Testimonials
/***************************************/
add_action( 'init', 'create_testimony_post_type' );
function create_testimony_post_type() {
  $labels = array(
    'name' => __( 'Testimonials' ),
    'singular_name' => __( 'Testimonial' ),
    'add_new' => __( 'Add New Testimonial' ),
    'add_new_item' => __( 'Add New Testimonial' ),
    'all_items' => __( 'All Testimonials' ),
    'edit_item' => __( 'Edit Testimonial' ),
    'new_item' => __( 'New Testimonial' ),
    'view_item' => __( 'View Testimonial' ),
    'not_found' => __( 'No Testimonials found' ),
    'parent' => __( 'Parent Testimonial' )
  );
  
  $args = array(
    'labels' => $labels,
    'public' => true,
    'show_ui' => true,
    'publicly_queryable' => true,
    'exclude_from_search' => false,
    'has_archive' => false, //change to true for archive.php template
    'menu_position' => 9,
    'capability_type' => 'page',
    'hierarchical' => true,
    'query_var' => true,
    'rewrite' => array( 'with_front' => false ),
    'supports' => array('title', 'editor', 'excerpt')
    //'show_in_rest' => true,
    //'rest_base' => 'testimonials-api',
    //'rest_controller_class' => 'WP_REST_Posts_Controller'
  );
  
  register_post_type( 'testimonies', $args );
}

/***************************************/
// custom post type for Secure
/***************************************/
add_action( 'init', 'create_secure_post_type' );
function create_secure_post_type() {
  $labels = array(
    'name' => __( 'Secure' ),
    'singular_name' => __( 'Secure Copy' ),
    'add_new' => __( 'Add Secure Copy' ),
    'add_new_item' => __( 'Add Secure Copy' ),
    'all_items' => __( 'All Secure Copy' ),
    'edit_item' => __( 'Edit Secure Copy' ),
    'new_item' => __( 'New Secure Copy' ),
    'view_item' => __( 'View Secure Copy' ),
    'not_found' => __( 'No Secure Copy found' ),
    'parent' => __( 'Parent Secure Copy' )
  );
  
  $args = array(
    'labels' => $labels,
    'public' => false,
    'show_ui' => true,
    'publicly_queryable' => false,
    'exclude_from_search' => false,
    'has_archive' => false,
    'menu_position' => 10,
    'capability_type' => 'page',
    'hierarchical' => true,
    'query_var' => true,
    'rewrite' => array( 'with_front' => false ),
    'supports' => array('title', 'editor', 'thumbnail')
    //'show_in_rest' => true,
    //'rest_base' => 'secure-api',
    //'rest_controller_class' => 'WP_REST_Posts_Controller'
  );
  
  register_post_type( 'secure', $args );
}

/***************************************/
// custom post type for Presentation
/***************************************/
add_action( 'init', 'create_presentation_post_type' );
function create_presentation_post_type() {
  $labels = array(
    'name' => __( 'Presentations' ),
    'singular_name' => __( 'Presentation' ),
    'add_new' => __( 'Add Presentation' ),
    'add_new_item' => __( 'Add Presentation' ),
    'all_items' => __( 'All Presentations' ),
    'edit_item' => __( 'Edit Presentation' ),
    'new_item' => __( 'New Presentation' ),
    'view_item' => __( 'View Presentation' ),
    'not_found' => __( 'No Presentations found' ),
    'parent' => __( 'Parent Presentation' )
  );
  
  $args = array(
    'labels' => $labels,
    'public' => true,
    'show_ui' => true,
    'publicly_queryable' => true,
    'exclude_from_search' => false,
    'has_archive' => false,
    'menu_position' => 6,
    'capability_type' => 'post',
    'hierarchical' => true,
    'query_var' => true,
    'rewrite' => array( 'with_front' => true ),
    'supports' => array('title')
  );
  
  register_post_type( 'presentations', $args );
  flush_rewrite_rules();
}

/***************************************/
// add Admin.css 
/***************************************/
function dm2016_admin_head() {
  $dmAdminCSS = get_bloginfo('stylesheet_directory') . '/library/css/admin.css';
  echo "<link rel='stylesheet' type='text/css' href='$dmAdminCSS' />";
}
add_action('admin_head', 'dm2016_admin_head');

/***************************************/
// Add a Stylesheet for the visual editor (editor-style.css) to match the theme.
/***************************************/
add_editor_style( 'library/css/editor-style.css' );

/***************************************/
// posts 2 posts plugin
/***************************************/
function case_study_connections() {
    p2p_register_connection_type( array(
        'name' => 'case_study_related',
        'from' => 'case-studies',
        'to' => 'case-studies',
        'admin_box' => array(
          'show' => 'from'
        )
    ) );
}
add_action( 'p2p_init', 'case_study_connections' );

/***************************************/
// remove color scheme from user profile
/***************************************/
remove_action('admin_color_scheme_picker', 'admin_color_scheme_picker');

/***************************************/
// addition user profile fields
/***************************************/
function add_user_fields($profile_fields) {

  // Add new fields
  $profile_fields['title'] = 'Title';

  return $profile_fields;
}
add_filter('user_contactmethods', 'add_user_fields');

/***************************************/
// rest api for 'title'
/***************************************/
add_action( 'rest_api_init', 'slug_register_title' );
function slug_register_title() {
    register_rest_field( 'user',
        'title',
        array(
            'get_callback'    => 'slug_get_title',
            'update_callback' => null,
            'schema'          => null,
        )
    );
}

function slug_get_title( $object, $field_name, $request ) {
    return get_user_meta( $object[ 'id' ], $field_name, true );
}

/***************************************/
// rest api for 'avatar'
/***************************************/
add_action( 'rest_api_init', 'slug_register_avatar' );
function slug_register_avatar() {
    register_rest_field( 'user',
        'wp_user_avatars',
        array(
            'get_callback'    => 'slug_get_avatar',
            'update_callback' => null,
            'schema'          => null,
        )
    );
}

function slug_get_avatar( $object, $field_name, $request ) {
    return get_user_meta( $object[ 'id' ], $field_name, true );
}

/***************************************/
// use <figure> for images w/caption
/***************************************/
function my_img_caption_shortcode( $empty, $attr, $content ){
  $attr = shortcode_atts( array(
    'id'      => '',
    'align'   => 'alignnone',
    'width'   => '',
    'caption' => ''
  ), $attr );

  if ( 1 > (int) $attr['width'] || empty( $attr['caption'] ) ) {
    return '';
  }

  if ( $attr['id'] ) {
    $attr['id'] = 'id="' . esc_attr( $attr['id'] ) . '" ';
  }

  return '<figure ' . $attr['id']
  . 'class="wp-caption ' . esc_attr( $attr['align'] ) . '">'
  . do_shortcode( $content )
  . '<figcaption class="wp-caption-text">' . $attr['caption'] . '</figcaption>'
  . '</figure>';

}
add_filter( 'img_caption_shortcode', 'my_img_caption_shortcode', 10, 3 );


/***************************************/
// get page id
/***************************************/
function get_id_by_slug($page_slug) {
  $page = get_page_by_path($page_slug);
  if ($page) {
    return $page->ID;
  } else {
    return null;
  }
}

/***************************************/
// turn off automatic smushing as we are using a plugin
/***************************************/
add_filter( 'jpeg_quality', 'smashing_jpeg_quality' );
function smashing_jpeg_quality() {
   return 100;
}

/***************************************/
// turn off Wp Admin CSS
/***************************************/
add_action('get_header', 'remove_admin_login_header');
function remove_admin_login_header() {
  remove_action('wp_head', '_admin_bar_bump_cb');
}

/***************************************/
// remove WP emoji
/***************************************/
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');

remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
remove_action( 'admin_print_styles', 'print_emoji_styles' );

/* DON'T DELETE THIS CLOSING TAG */ ?>
