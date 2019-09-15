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
  
  // Checkbox / Radio Toggles
  $('input[type=checkbox].toggle').on("change", function () {
    $('label[for='.concat($(this).attr('id')).concat('] i.fa')).toggleClass('fa-toggle-on fa-toggle-off');
  });
  
  $('input[type=radio].toggle').on("change", function () {
    $.each($('input[type=radio].toggle[name='.concat($(this).attr('name')).concat(']')), function () {  
      $('label[for=' + $(this).attr('id') + '] i.fa')
      .toggleClass('fa-toggle-on', this.checked)
      .toggleClass('fa-toggle-off', !this.checked);
    });
  });
  
});
