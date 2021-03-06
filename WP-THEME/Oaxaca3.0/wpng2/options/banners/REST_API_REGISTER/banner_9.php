<?php

/*------------------------------------------*\
     BANNERS HOME 1: ANALITYCS
\*-------------------------------------------*/
add_action( 'rest_api_init', 'slug_register_id_analitycs_banner_home_9' );
function slug_register_id_analitycs_banner_home_9() {
    register_rest_field( 'page',
        'analitycs_banner_home_9',
        array(
            'get_callback'    => 'slug_get_analitycs_banner_home_9',
            'update_callback' => 'slug_update_analitycs_banner_home_9',
            'schema'          => null,
        )
    );
}

function slug_get_analitycs_banner_home_9( $post, $field_name, $request ) {
     return get_post_meta($post['id'], 'analitycs_banner_home_9', true);
}

function slug_update_analitycs_banner_home_9( $value, $object, $field_name ) {
    if ( ! $value || ! is_string( $value ) ) { return; }
    return update_post_meta( $object->ID, $field_name, strip_tags( $value ) );
}

/*------------------------------------------*\
     BANNERS HOME 1: url personal banner 
\*-------------------------------------------*/
add_action( 'rest_api_init', 'slug_register_id_url_banner_home_9' );
function slug_register_id_url_banner_home_9() {
    register_rest_field( 'page',
        'url_banner_home_9',
        array(
            'get_callback'    => 'slug_get_url_banner_home_9',
            'update_callback' => 'slug_update_url_banner_home_9',
            'schema'          => null,
        )
    );
}

function slug_get_url_banner_home_9( $post, $field_name, $request ) {
     return get_post_meta($post['id'], 'url_banner_home_9', true);
}

function slug_update_url_banner_home_9( $value, $object, $field_name ) {
    if ( ! $value || ! is_string( $value ) ) { return; }
    return update_post_meta( $object->ID, $field_name, strip_tags( $value ) );
}

/*------------------------------------------*\
     BANNERS HOME 1: link imagen personal
\*-------------------------------------------*/
add_action( 'rest_api_init', 'slug_register_id_imagen_banner_9' );
function slug_register_id_imagen_banner_9() {
    register_rest_field( 'page',
        'imagen_banner_9',
        array(
            'get_callback'    => 'slug_get_imagen_banner_9',
            'update_callback' => 'slug_update_imagen_banner_9',
            'schema'          => null,
        )
    );
}

function slug_get_imagen_banner_9( $post, $field_name, $request ) {
     return get_post_meta($post['id'], 'imagen_banner_9', true);
}

function slug_update_imagen_banner_9( $value, $object, $field_name ) {
    if ( ! $value || ! is_string( $value ) ) { return; }
    return update_post_meta( $object->ID, $field_name, strip_tags( $value ) );
}


