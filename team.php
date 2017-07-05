<?php

	/*
	Template Name: Team
	*/

	get_header();

 ?>

<div id="animatedModal" class="modal-screen">
    <!--THIS IS IMPORTANT! to close the modal, the class name has to match the name given on the ID  class="close-animatedModal" -->
    <div class="close-animatedModal modal-screen-dismiss"> 
        <svg class="icon icon-modal-dismiss" width="36" height="36"><use xlink:href="#icon-modal-dismiss"></use></svg>
    </div>


    <div class="modal-content">

    	<div class="container-fluid">

	    	<div class="wrap">

				<div class="media media--contact mb-4">

				    <img class="team-modal-img d-flex align-self-center mr-4" src="" width="120" height="120" alt="avatar">
				              
				    <div class="media-body align-self-center">
				    	<p class="team-modal-role modal-screen-eyebrow"></p>
	            		<h1 class="team-modal-name"></h1>
				    </div>

				</div>


    			<p class="team-modal-bio"></p>

				<div class="row">

					<div class="col-12 col-md-4">
						<div class="media media--contact mb-4">

						    <img class="d-flex mr-4" src="<?php echo get_template_directory_uri(); ?>/library/images/icon-people.svg" width="60" height="60" alt="icon">
						              
						    <div class="media-body align-self-center">
						    	<ul class="team-modal-projects list-unstyled m-0"></ul>
						    </div>

						</div>
					</div>

					<div class="col-12 col-md-4">
						<div class="media media--contact mb-4">

						    <img class="d-flex mr-4" src="<?php echo get_template_directory_uri(); ?>/library/images/icon-channel.svg" width="60" height="60" alt="icon">
						              
						    <div class="media-body align-self-center">
						    	<ul class="team-modal-slack list-unstyled m-0"></ul>
						    </div>

						</div>
					</div>

					<div class="col-12 col-md-4">
						<div class="media media--contact mb-4">

						    <img class="d-flex mr-4" src="<?php echo get_template_directory_uri(); ?>/library/images/icon-years.svg" width="60" height="60" alt="icon">
						              
						    <div class="media-body align-self-center">
						    	<p class="team-modal-year m-0"><span class="year"></span>with DM</p>
						    </div>

						</div>
					</div>

				</div>

			</div><!--// .wrap -->

		</div><!--// .container-fluid -->

    </div><!--// .modal-content -->
</div><!--// .modal-screen -->

  
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		<div class="filters-and-viz" data-state='resetToAll'>
		    <div id="headerControls" class="wrap mb-sm">

		    	<div class="section-title">
					<h1>Meet the 47 design-centered people that call DesignMap a place to
						<a href="#" class="team-view-options" id="resetToAll">work</a>,
						<a href="#" class="team-view-options" id='date'>grow</a> and
						<a href="#"  class="team-view-options" id="slack">have fun</a>.</h1>
				</div>

		    </div>

		    <div data-section="work">

		        <div class="team-nav nav-list nav-options">
					<div class="teamFilter" id="filterByRole">
		              <label class="nav-header">Role</label>
		              <ul class="list-unstyled">
		                  <li><a href="#">Partner</a></li>
		                  <li><a href="#">Design Director</a></li>
		                  <li><a href="#">Designer</a></li>
		                  <li><a href="#">Engineer</a></li>
		                  <li><a href="#">Researcher</a></li>
		                  <li><a href="#">Support</a></li>
		              </ul>
					</div>
								


					<div class="teamFilter" id="filterByClient">
		              <label class="nav-header">Client</label>
		              <ul class="list-unstyled">
		                  <li><a href="#">Bankrate</a></li>
		                  <li><a href="#">Bloomberg</a></li>
		                  <li><a href="#">Carfax</a></li>
		                  <li><a href="#">Centric Digital</a></li>
		                  <li><a href="#">CloudGenix</a></li>
		                  <li><a href="#">ExactTarget</a></li>
		                  <li><a href="#">Magnetic</a></li>
		                  <li><a href="#">Riverbed</a></li>
		                  <li><a href="#">Schwab</a></li>
		                  <li><a href="#">SyncHR</a></li>
		                  <li><a href="#">Trumaker</a></li>
		                  <li><a href="#">Virtual Incentives</a></li>
		                  <li><a href="#">eBay</a></li>
		              </ul>
								</div>
	        </div>

        	<div class="vis-container">
				<div class="client-container"></div>
			</div>
	    </div>

	    <div class="viz-spacer"></div>
		    <div class="graph-container"></div>
		</div>

	    <a id="teamModal" href="#animatedModal">DEMO01</a>

		<div class="mobile-team-page">
			<div class="container-fluid">
				<div class="wrap">
					    <div id="headerControls" class="team-header_row wrap">
						    <h2>Team</h2>
					      <p>Meet the 47 design-centered people that call DesignMap a place to work, grow and have fun.
					      <div class="mobile-viz">
					        <div class="role-group-wrapper">
					      		<h6>Partner</h6>
						      	<div class="role-group" data-role="partner">
						      	</div>
					        </div>
					        <div class="role-group-wrapper">
						      	<h6>Director</h6>
						      	<div class="role-group" data-role="director">
						      	</div>
					        </div>
					        <div class="role-group-wrapper">
					      		<h6>Designer</h6>
						      	<div class="role-group" data-role="designer">
						      	</div>
					        </div>
					        <div class="role-group-wrapper">
						      	<h6>Researcher</h6>
						      	<div class="role-group" data-role="researcher">
						      	</div>
					        </div>
					        <div class="role-group-wrapper">
						      	<h6>Engineer</h6>
						      	<div class="role-group" data-role="engineer">
						      	</div>
					        </div>
					        <div class="role-group-wrapper">
						      	<h6>Support</h6>
						      	<div class="role-group" data-role="support">
						      	</div>
					        </div>
					      </div>
					    </div>
				</div>
			</div>
		</div>

			    <!-- work at designmap -->
		<div class="mb-md mt-md">

	        <div class="container-fluid">

	          <div class="wrap">

	            <div class="row">
	              <div class="col-12 col-md-10 offset-md-1">
	            
	                <?php include('work-at-designmap.php');?>

	              </div>
	            </div>

	          </div>

	        </div>

		</div>
		<!--// work at designmap -->

	<?php endwhile; endif; ?>

<?php get_footer(); ?>
