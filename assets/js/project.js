jQuery( document ).ready( function( $ ) {
	
	$("#mobile-menu").on("click", function(){
	    $(".filter-mobile__form").toggle();
	}); 

	$("#menu-icon").on("click mouseenter", function(){
	    $(".menu-dropdown").show();
	}); 





	$("#menu-exit").on("click", function(){
	    $(".menu-dropdown").hide();
	}); 

	// $("#form-filter").on("click", function(){
	//     if(service) {
	//         alert("Checkbox is checked.");

	//         $("#test").prepend($('<img>',{id:'theImg',src:'./assets/img/checkbox-real.svg'}));
	//     } else {
	//         alert("Checkbox is unchecked.");
	//         $("#test").remove('<img>');

	//     }
	// }); 

		
// $.ajax({
 
//     // The URL for the request
//     url: "dealers.json",
 
//     // The data to send (will be converted to a query string)
//     data: {
//         "zipcode": "28205"
//     },
 
//     // Whether this is a POST or GET request
//     type: "GET",
 
//     // The type of data we expect back
//     dataType : "json",
// })
//   // Code to run if the request succeeds (is done);
//   // The response is passed to the function
//   .done(function( json ) {
//      // $( "<h1>" ).text( json.title ).appendTo( "body" );
//      // $( "<div class=\"content\">").html( json.html ).appendTo( "body" );
// alert( "Data Saved: " + json );
//      // $("<h2>").text(json.zipcode).appendTo( "body" );
//   })
//   // Code to run if the request fails; the raw request and
//   // status codes are passed to the function
//   .fail(function( xhr, status, errorThrown ) {
//     alert( "Sorry, there was a problem!" );
//     console.log( "Error: " + errorThrown );
//     console.log( "Status: " + status );
//     console.dir( xhr );
//   })
//   // Code to run regardless of success or failure;
//   .always(function( xhr, status ) {
//     alert( "The request is complete!" );
//   });

 });


