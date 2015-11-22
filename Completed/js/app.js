'use strict';
$(document).ready(function(){

	var templateSource = $('#entry-template').html();
	var template = Handlebars.compile(templateSource);
	var context = {"title":"CelebriKitties",
                "cat": [

            {
        		"name": "Nyan Cat",
                "description": "Animated cat with PopTart body, flying through space with a trailing rainbow",
                "profilePic": "https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG",
                "video": "https://www.youtube.com/watch?v=QH2-TGUlwu4"
            },

            {
        		"name": "Grumpy Cat",
                "description": "Grumpy Cat became an internet sensation after her photo was posted on Reddit on September 22, 2012. It was suggested that the original photo was photoshopped, so we posted a few videos on YouTube. The videos went viral and her popularity has continued to increase!",
                "profilePic": "http://cdn2.thr.com/sites/default/files/imagecache/675x380/2014/09/too_good_for_grumpy_cat.jpg",
                "catImage": {
                     "image": "http://cdn.grumpycats.com/wp-content/uploads/2012/10/I-Had-Fun-Once-It-Was-Awful.jpeg",
                     "image": "http://vignette4.wikia.nocookie.net/lego/images/c/c3/39215-grumpy-cat-no-Rwoe.jpeg/revision/latest?cb=20130709214607",
                     "image": "http://i4.mirror.co.uk/incoming/article4764747.ece/ALTERNATES/s615/Grumpy-Cat.jpg"
                }
      		},

            {
        		"name": "Keyboard Cat",
                "description": "Keyboard Cat is an Internet meme. It consists of a video from 1984 of a cat called 'Fatso' wearing a blue shirt and 'playing' an upbeat rhythm on an electronic keyboard. The video was posted to YouTube under the title 'charlie schmidt's cool cats' in June 2007.",
            	"profilePic": "http://img1.wikia.nocookie.net/__cb20140726152323/smashbroslawlorigins/images/3/36/KEYBOARD_CAT.png",
            	"video": "https://www.youtube.com/watch?v=J---aiyznGQ"

            },

            {
        		"name": "Lil Bub",
                "description": "BUB was born with a multitude of genetic anomalies which all add up to one of nature's happiest accidents. She is a 'perma-kitten', which means she will stay kitten sized and maintain kitten-like features her entire life. She also has an extreme case of dwarfism, which means her limbs are disproportionately small relative to the rest of her body and she has some difficulty moving around.",
            	"profilePic": "http://cdn.thedailybeast.com/content/dailybeast/articles/2013/04/19/lil-bub-the-world-s-cutest-cat-stars-in-documentary-lil-bub-friendz-at-tribeca/jcr:content/image.img.2000.jpg/1400303393447.cached.jpg",
        		"catImage": {
                 "image": "http://www.geek.com/wp-content/uploads/2015/10/LilBub.jpg",
                 "image": "https://s-media-cache-ak0.pinimg.com/236x/36/7c/a8/367ca8ab57a1991e44a9c364aceadf9a.jpg",
                 "image": "https://s-media-cache-ak0.pinimg.com/736x/26/95/f2/2695f20e492f92a7cc2babf85e98114c.jpg"
                }
    		}]
        };

	var html    = template(context);	
	
	$(html).appendTo('#content');
});