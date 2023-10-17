<?php
/**
 * Plugin Name:       Restaurant - To Eat In
 * Plugin URI:        https://melodious-griffin-d3095a.netlify.app/
 * Description:       Este bloque añade la estructura para las entradas de los restaurants to eat in
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Jesus Antonio Jimenez Jaimes
 * Text Domain:       restaurant-toeatin
 * Update URI:        https://melodious-griffin-d3095a.netlify.app/
 *
 * @package           mycodedev
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function mycodedev_restaurant_toeatin_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'mycodedev_restaurant_toeatin_block_init' );

