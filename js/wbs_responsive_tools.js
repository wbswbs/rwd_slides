/*******************************************************************************
 *   js/wbs_responsive_tools.js
 ******************************************************************************/
/**
 * @author      Wolfgang Blessen Software (http://www.blessen.de)

 * @requires	prototype.js
 *  
 * @description	Sammlung von Funktionalitäten füre Responsive Layout
 */
/*******************************************************************************
 * M E N U 2 S E L E C T
 ******************************************************************************/
bindEvent(window,"load", function() {
	// Gets the viewport as an object literal
	var viewport = document.viewport.getDimensions(); 	
	var height = viewport.height; // Usable window height Why 20 ?
	var width = viewport.width;
	if (width < 768){
		menu2select();
	}
});
/**
 *  Ändern des Menüs von einer Liste zu einer Select Box 
 */
function menu2select() {
	// Select Box anlegen
	var menu_select_box = new Element(
			'select',
			{
				'class' : 'menu_select_box',
				'id' : 'menu_select_box',
				'onchange' : ' window.location.href = this.options[this.options.selectedIndex].value;'
			});
	$('nav_wrapper').insert(menu_select_box);

	// Vorauswahl aktives Element
	selected_index = -1;
	counter = -1;
	// Alle Link Elemente auslesen
	$$('ul#nav li a').each(
			function(element) {
				counter++;
				if (element.up('li').hasClassName('selected')) {
					selected_index = counter;
				}
				// Link der Select-Box hinzufügen
				$('menu_select_box').insert(
						'<option value="' + element.href + '">'
								+ element.innerHTML + '</option>');
			});
	// Aktiver Menüpunkt ?
	if (selected_index > -1) {
		$('menu_select_box').options[selected_index].selected = true;
		for(var i = 0; i < $('menu_select_box').length; i++)
			$('menu_select_box').options[i].style.backgroundColor = 'white';
		$('menu_select_box').options[selected_index].style.backgroundColor = 'beige';
	}
	$('nav').hide();
}
/**
 * IE HAck für den Suckerfish
 */
sfHover = function() {
	var sfEls = document.getElementById("nav").getElementsByTagName("li");
	for (var i=0; i<sfEls.length; i++) {
		sfEls[i].onmouseover=function() {
			this.className+=" sfhover";
		}
		sfEls[i].onmouseout=function() {
			this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
		}
	}
}
if (window.attachEvent) window.attachEvent("onload", sfHover);

/**
 * Script was successful loaded
 */
info('[WBS] js/wbs_responsive_tools.js loaded');
