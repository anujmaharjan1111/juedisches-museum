<?php
/**
 * CF& validations
 */
// Email Validation
add_filter( 'wpcf7_validate_email*', 'custom_email_confirmation_validation_filter', 20, 2 );
function custom_email_confirmation_validation_filter( $result, $tag ) {
    /*Can use for multiple tags by only changing values here*/
    $email_tags = array( 'your-email', 'email' );

    $tag = new WPCF7_FormTag( $tag );

    foreach( $email_tags as $email_tag ){
        if ( $email_tag == $tag->name ) {
            $email = filter_input( INPUT_POST, $email_tag );
            if ( preg_match( '/[^a-zA-Z0-9.@_]+/', $email ) ) {
                $result->invalidate( $tag, "The E-mail address is invalid." );
            }
        }
    }
    return $result;
}

// Name validation + country validation
add_filter( 'wpcf7_validate_text*', 'custom_validation_first_name', 20, 2 );
function custom_validation_first_name( $result, $tag ) {

    $tag = new WPCF7_FormTag( $tag );
    $name_tags = array( 'first-name', 'last-name', 'country' );
    foreach( $name_tags as $name_tag ){
        if ( $name_tag == $tag->name ){
            $name_tag = filter_input( INPUT_POST, $name_tag );
            if( !preg_match( "/^[a-zA-Z\s]*$/", $name_tag ) ){
                $result->invalidate( $tag, "Only letters are allowed.");
            }
        }
    }

    return $result;
}

// Phone Validation
add_filter('wpcf7_validate_tel*', 'jm_custom_tel_validation', 20, 2);
function jm_custom_tel_validation( $result, $tag ){
    $tag = new WPCF7_FormTag( $tag );
    $tel_tags = array( 'phone-number', 'phone', 'tel' );
    foreach( $tel_tags as $tel_tag ){
        if( $tel_tag == $tag->name ){
            $tel = filter_input( INPUT_POST, $tel_tag );
            if( strlen( $tel ) > 10 ){
                $result->invalidate( $tag, "Only maximum 10 digits allowed" );
            } else if( strlen( $tel ) < 10 ) {
                $result->invalidate( $tag, "Phone number should consist minimum 10 digits." );
            }
        }
    }

    return $result;
}
