/**
 * Slideshow
 */
var Slideshow = function(){
	this.title 			= 'MyFirstSlide';
	this.currentSlide 	= null;
	this.slides 		= [];
};
/**
 * Initialize the Slide show
 */
Slideshow.prototype.init = function(title) {
	this.title = title;
	//alert('Slideshow ' + this.title + ' loaded'); 
	this.startListening();
};
/**
 * Show Slide
 */
Slideshow.prototype.startListening = function() {

	document.onkeypress = function(evt) {
	    evt = evt || window.event;
	    var charCode = evt.keyCode || evt.which;
	    switch (charCode){
	    	case 32:
	    	  slideshow.nextSlide();
	    	  break;
	    	case 98:
	    	  slideshow.previousSlide();
	    	  break;
	    	default:
	    		//alert('CharCode ' + charCode + ' is ' + String.fromCharCode(charCode));
	    		break;
	    }
	    //var charStr = String.fromCharCode(charCode);
	    //alert(charStr);
	};
};	
/**
 * Show Slide
 */
Slideshow.prototype.showSlide = function(slideID) {
	//alert('Show Slide ' + slideID); 
	var slides =  document.getElementsByClassName('slide');
	//alert(slides.length + 'Slides'); 

	for(var i=0,j=slides.length; i<j; i++){
	  slides[i].style.display = 'none';
	  //alert('hiding ' + slides[i].getAttribute('id'));
	};
	//alert('Show Slide ' + slideID); 
	var show_slide = document.getElementById(slideID);
	show_slide.style.display = '';
	
	this.currentSlideID	= slideID;
	//alert('Show Slide ' + slideID);
};
/**
 * Next Slide
 */
Slideshow.prototype.nextSlide = function() {
	//alert('Show Slide ' + slideID); 
	var slides =  document.getElementsByClassName('slide');

	for(var i=0,j=slides.length; i<j; i++){
	  slides[i].style.display = 'none';
	  if(slides[i].getAttribute('id')==this.currentSlideID){
	  	current_index = i;
	  };
	};
	// Obergrenze
	var new_index =Math.min(current_index+1,slides.length-1);
	// Untergrenze
	new_index = Math.max(new_index,0);
	//alert('Show Slide ' + slideID); 
	this.showSlide(slides[new_index].getAttribute('id'));
};
/**
 * Previous Slide
 */
Slideshow.prototype.previousSlide = function() {
	//alert('Show Slide ' + slideID); 
	var slides =  document.getElementsByClassName('slide');

	for(var i=0,j=slides.length; i<j; i++){
	  slides[i].style.display = 'none';
	  if(slides[i].getAttribute('id')==this.currentSlideID){
	  	current_index = i;
	  };
	};

	// Untergrenze
	var new_index = Math.max(current_index - 1, 0);
	// Obergrenze
	new_index = Math.min(new_index, slides.length - 1);
	//alert('Show Slide ' + slideID);
	this.showSlide(slides[new_index].getAttribute('id')); 
};

/**
 * Load the Navigation
 * @param string divID
 */
Slideshow.prototype.loadNavigation = function(divID) {
	
	
	var nav_html = '';
	
	// Load Slides
	var slides =  document.getElementsByClassName('slide');
	//alert(slides.length + 'Slides'); 

	// previousSlide
	nav_html += '<a class="button red" href="#" onclick="slideshow.previousSlide();">';
	nav_html += 'Previous</a>';


	for(var i=0,j=slides.length; i<j; i++){
	  var slideID =  slides[i].getAttribute('id');
	  nav_html += '<a class="button" href="#" onclick="slideshow.showSlide(\'' + slideID + '\');">';
	  nav_html += slideID + '</a>';
	};

	// Next Slide
	nav_html += '<a class="button red" href="#" onclick="slideshow.nextSlide();">';
	nav_html += 'Next</a>';

	var navigation_container = document.getElementById(divID);
    navigation_container.innerHTML = nav_html;
    
	console.log('Navigation loaded');
};