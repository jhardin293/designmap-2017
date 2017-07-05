<?php

	/*
	Template Name: Design Tools
	*/
	
	get_header();
	
 ?>

<div class="page-transition">

  <main id="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
  
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

		<div class="banner">
			
			<div class="wrap d-flex justify-content-center align-items-center flex-column text-center">
							
				<p class="tagline"><?php echo CFS()->get( 'eyebrow_heading' ); ?></p>

				<select class="select--tools-for">

					<?php 
	                  $fields = CFS()->get( 'tools_selection' );
	                  $index = 0;

	                  foreach ( $fields as $field ) { 
	                ?>

						<option value="#t<?php echo $index; ?>"><?php echo $field['tools_for']; ?></option>
	                  
	                <?php 
	                		$index++;
	                	} 
	                ?>

                </select>

				<p class="tagline"><?php echo CFS()->get( 'tools_text' ); ?></p>

			</div>	

		</div>

		<div class="container-fluid">

			<div class="wrap">

				<div class="row">

					<div class="col">

						<!-- Nav tabs -->
<ul class="nav nav-tabs" role="tablist">
  <li class="nav-item">
    <a class="no-smoothState nav-link active" data-toggle="tab" href="#home" role="tab">Home</a>
  </li>
  <li class="nav-item">
    <a class="no-smoothState nav-link" data-toggle="tab" href="#profile" role="tab">Profile</a>
  </li>
  <li class="nav-item">
    <a class="no-smoothState nav-link" data-toggle="tab" href="#messages" role="tab">Messages</a>
  </li>
  <li class="nav-item">
    <a class="no-smoothState nav-link" data-toggle="tab" href="#settings" role="tab">Settings</a>
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane fade show active" id="home" role="tabpanel">1</div>
  <div class="tab-pane fade" id="profile" role="tabpanel">2</div>
  <div class="tab-pane fade" id="messages" role="tabpanel">3</div>
  <div class="tab-pane fade" id="settings" role="tabpanel">4</div>
</div>

					</div>

				</div>

			</div>

		</div>

	<?php endwhile; endif; ?>

<?php get_footer(); ?>