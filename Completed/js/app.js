'use strict';
$(document).ready(function(){

  var templateSource = $('#entry-template').html();
  var template = Handlebars.compile(templateSource);
  var context = {"title":"CelebriKitties",
                "cat": [

            {
            "name": "Nyan Cat",
                "description": "Nyan Cat, also known as Pop Tart Cat, is an 8-bit animation depicting a cat with the body of a cherry pop tart flying through outer space. While absurd themes like flying kittens and pastry cats have been around for some time, the surreal humor behind this particular combination has captivated YouTubers and online art communities, spawning fan illustrations as well as user-interface designs and homebrew games across multiple platforms.",
                "profilePic": "https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG",
                "video": "https://www.youtube.com/embed/QH2-TGUlwu4"
            },

            {
            "name": "Grumpy Cat",
                "description": "Grumpy Cat became an internet sensation after her photo was posted on Reddit on September 22, 2012. It was suggested that the original photo was photoshopped, so we posted a few videos on YouTube. The videos went viral and her popularity has continued to increase!",
                "profilePic": "http://images.nymag.com/news/business/boom-brands/business130930_grumpycat_2_560.jpg",
                "catImage": "http://cdn.grumpycats.com/wp-content/uploads/2012/10/I-Had-Fun-Once-It-Was-Awful.jpeg"                  
            },

            {
            "name": "Keyboard Cat",
                "description": "Keyboard Cat is an Internet meme. It consists of a video from 1984 of a cat called 'Fatso' wearing a blue shirt and 'playing' an upbeat rhythm on an electronic keyboard. The video was posted to YouTube under the title 'charlie schmidt's cool cats' in June 2007.",
              "profilePic": "http://img1.wikia.nocookie.net/__cb20140726152323/smashbroslawlorigins/images/3/36/KEYBOARD_CAT.png",
              "video": "https://www.youtube.com/embed/J---aiyznGQ"

            },

            {
            "name": "Lil Bub",
                "description": "BUB was born with a multitude of genetic anomalies which all add up to one of nature's happiest accidents. She is a 'perma-kitten', which means she will stay kitten sized and maintain kitten-like features her entire life. She also has an extreme case of dwarfism, which means her limbs are disproportionately small relative to the rest of her body and she has some difficulty moving around.",
              "profilePic": "http://m1.behance.net/rendition/modules/90497669/disp/a79df67ace41158af5025ad53f967260.jpg",
            "catImage": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Lil_Bub_2013_(crop_for_thumb).jpg"
          }]
        };

  var html    = template(context);  
  
  $(html).appendTo('#content');
});
