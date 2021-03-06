<?php
/*
Plugin Name: ZEIT ONLINE Big Share Buttons
Plugin URI: http://www.zeit.de/
Description: Ersetzt Default Share Leiste mit großen Facebook und Twitter Share Buttons
Version: 1.2
Author: Holger Wiebe, Thomas Strothjohann
Author URI: http://www.zeit.de
Min WP Version: 4.2.2
*/

function zon_big_share_scripts() {
    wp_enqueue_style( 'zon-big-share-styles', plugins_url( 'css/zon-big-share.css', __FILE__ ));
    wp_enqueue_script( 'zon-big-share', plugins_url( 'js/zon-big-share.js', __FILE__ ), array( 'jquery' ), '1.2.0', true );
}

add_action( 'wp_enqueue_scripts', 'zon_big_share_scripts' );
