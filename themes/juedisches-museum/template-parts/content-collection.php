<?php
$images = get_post_meta( get_the_ID(), "images", true );
$image_urls = array();
if ( isset( $images["image"] ) && ! empty( $images["image"] ) ) {
	if ( array_depth( $images["image"] ) > 2 && count( $images["image"] ) > 1 ) { //in case of multiple image
		echo "<pre>";
		foreach ( $images["image"] as $image ) {
			if ( isset( $image["file"] ) && ! empty( $image["file"] ) ) {
				$image_urls[] = $image["file"];
			}
		}
	} else {
		if ( isset( $images["image"]["file"] ) && ! empty( $images["image"]["file"] ) ) {
			$image_urls[] = $images["image"]["file"];
		}
	}
}
print_r($image_urls);
echo "<br>";
