'use strict';
$(document).ready(function(){

	var templateSource = $('#entry-template').html();
	var template = Handlebars.compile(templateSource);
	var context = { "title":"Hello World!"
	};
	var html    = template(context);	
	
	$(html).appendTo('#content');

});