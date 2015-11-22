'use strict';

// Grab the template script
  var theTemplateScript = $("#address-template").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // Define our data object
  var context = {
  	cats: [
    { name: 'Nyan Cat',
    description: 'Animated cat with PopTart body, flying through space with a trailing rainbow',
    video: 'https://www.youtube.com/watch?v=QH2-TGUlwu4'},

    { name: 

    }
  };

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $('.content-placeholder').html(theCompiledHtml);
});
