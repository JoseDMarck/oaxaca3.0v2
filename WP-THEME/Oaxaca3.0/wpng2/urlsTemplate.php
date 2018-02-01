<?php /* Template Name: URLS */  ?>
<!DOCTYPE html>
<html>
<head>
 <meta property="og:url"                content="<?php the_permalink(); ?>" />
<meta property="og:type"               content="article" />
<meta property="og:title"              content="<?php the_title(); ?>" />
<meta property="og:description"        content="<?php echo $excerpt = Extracto($post_id);  ?>" />
<meta property="og:image"              content="<?php echo $value_id_imagen_page = (get_post_meta($post->ID, 'id_imagen_page', true));?>" />

<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/options/styleURL.css">

</head>
<body>
	
	<div class="BloqueGeneralUrl"> 
	<div class="BloqueC">
		 <h2>Nombre:</h2> 
	</div>

	<div class="BloqueD">
		<h2>URL:</h2>
	</div>
	<div style="clear: both;"></div>

  <?php
	  $temp = $wp_query; 
	  $wp_query = null; 
	  $wp_query = new WP_Query(); 
	  $wp_query->query('showposts=20&post_type=post'.'&paged='.$paged); 

  while ($wp_query->have_posts()) : $wp_query->the_post(); 
?>
	
	<div class="BloqueA">
		<?php the_title();?>
	</div>

	<div class="BloqueB">
		<a href="<?php the_permalink();?>" target="_blank">
			<?php the_permalink();?>
		</a>
	</div>


<?php endwhile; ?>

	<div style="clear: both;"></div>

  <?php
      if (function_exists(custom_pagination)) {
        custom_pagination($custom_query->max_num_pages,"",$paged);
      }
    ?>

	<div style="clear: both;"></div>

	</div><!-- BloqueGeneralUrl -->

</body>

</html>


	 



 