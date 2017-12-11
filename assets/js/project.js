jQuery( document ).ready( function( $ ) {
	$( document ).foundation();

	$("#mobile-menu").on("click", function(){
	    $(".filter-mobile__form").toggle();
	}); 

	$("#menu-icon").on("click mouseenter", function(){
	    $(".dropdown").show();
	}); 

	$("#dropdown-exit").on("click", function(){
	    $(".dropdown").hide();
	}); 

	$.ajax({
	 
	    // The URL for the request
	    url: "dealers.json",
	 
	    // The data to send (will be converted to a query string)
	    data: {
	        "dealers": "data"
	    },
	 
	    // Whether this is a POST or GET request
	    type: "GET",
	 
	    // The type of data we expect back
	    dataType : "json",
	})
	  // Code to run if the request succeeds (is done);
	  // The response is passed to the function
	  .done(function( json ) {
	    // $( "<h2>" ).text( json.dealers[0].data['name'] ).appendTo( "h2" );
         // $(".option__title").html(json.dealers[0].data['name']);

        // titles
		$("#title-one").text(json.dealers[0].data['name']);
		$("#title-two").text(json.dealers[1].data['name']);
		$("#title-three").text(json.dealers[2].data['name']);
		
		// hours
		$("#week-one").text(json.dealers[0].data['weekHours']['mon']);
		$("#sat-one").text(json.dealers[0].data['weekHours']['sat']);
		$("#sun-one").text(json.dealers[0].data['weekHours']['sun']);

		$("#week-two").text(json.dealers[1].data['weekHours']['mon']);
		$("#sat-two").text(json.dealers[1].data['weekHours']['sat']);
		$("#sun-two").text(json.dealers[1].data['weekHours']['sun']);

		$("#week-three").text(json.dealers[2].data['weekHours']['mon']);
		$("#sat-three").text(json.dealers[2].data['weekHours']['sat']);
		$("#sun-three").text(json.dealers[2].data['weekHours']['sun']);

		// certifications
		$("#certification-star-one").text(json.dealers[0].data['certifications'][0]);
		$("#certification-house-one").text(json.dealers[0].data['certifications'][1]);
		$("#certification-gear-one").text(json.dealers[0].data['certifications'][2]);
		$("#certification-user-one").text(json.dealers[0].data['certifications'][3]);

		$("#certification-star-two").text(json.dealers[1].data['certifications'][0]);
		$("#certification-user-two").text(json.dealers[1].data['certifications'][1]);
		$("#certification-house-two").text(json.dealers[1].data['certifications'][2]);
		$("#certification-gear-two").text(json.dealers[1].data['certifications'][3]);
		

		$("#certification-star-three").text(json.dealers[2].data['certifications'][0]);
		$("#certification-user-three").text(json.dealers[2].data['certifications'][1]);
		$("#certification-house-three").text(json.dealers[2].data['certifications'][2]);
		$("#certification-gear-three").text(json.dealers[2].data['certifications'][3]);

		
	  })
	  // Code to run if the request fails; the raw request and
	  // status codes are passed to the function
	  .fail(function( xhr, status, errorThrown ) {
	    alert( "Sorry, there was a problem!" );
	    console.log( "Error: " + errorThrown );
	    console.log( "Status: " + status );
	    console.dir( xhr );
	  })
	  // Code to run regardless of success or failure;
	  .always(function( xhr, status ) {
	    alert( "The request is complete!" );
    });

 });


