/**
 Author: Alejandro Godofredo Carlstein Ramos Mejia.
 Copyright 2019
*/
$(function() {
  
  // Accordion Cards 
  $('.collapse').on('shown.bs.collapse', function(){    
    $(this).parent().find(".toggle-icon").toggleClass("down").toggleClass("up");
  }).on('hidden.bs.collapse', function(){   
    $(this).parent().find(".toggle-icon").toggleClass("down").toggleClass("up");
  });
  
});
