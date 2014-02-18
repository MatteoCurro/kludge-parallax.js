// Author: Currò Matteo
// e-mail: curromatteo@gmail.com
// ver: 1.2
// ultimo aggiornamento: 10/2013
(function($){
	///////////////////
	//  PARALLASSI  ///
	///////////////////
	//  Per il funzionamento dello script è sufficiente assegnare agli
	//  elementi che devono scrollare due custom data html5:
	//  data-type="vertical_parallax"
	//  data-speed="1"
	//  Impostando data-speed a "1" lo scorrimento sarà alla stessa velocità
	//  della pagina; sono contemplati anche valori negativi o decimali.
	//	es. <div data-type="vertical_parallax" data-speed="2">Ciao Mondo!</div>

	//  Dichiarazione delle variabili
	var win = $(window);

	  $('[data-type="vertical_parallax"]').each(function(){

	    //  Dichiarazione delle variabili
	    var elm = $(this); 

	    //  Gestione dell'evento on scroll        
	    win.on('scroll', function() {  
	      // console.log(elm.offset().top);  

	      //  Trasformo il valore di "speed"               
	      var position = -( (win.scrollTop()-elm.offset().top) * elm.data('speed'))/10,

	      //  Assemblo la stringa per la proprietà CSS
	          vertical_translate = 'translate3d(0,' + position + 'px, 0px)'; 

	      //  Assegno all'elemento la nuova posizione
	      elm.css({
	          WebkitTransform : vertical_translate,
	          MoxTransform : vertical_translate,
	          transform : vertical_translate
	      });
	    }); // Fine Window scroll        
	  }); // Fine each elements 
})(jQuery);