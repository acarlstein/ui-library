/**
 Author: Alejandro Godofredo Carlstein Ramos Mejia.
 Copyright 2019
*/
$(function() {
  
  // Accordion Cards 
  $('.collapse').on('shown.bs.collapse hidden.bs.collapse', function(){    
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

  // Range
  $('input[type="range"]').each(function(){
    let input = $(this);
    input.next("span.min").text(input.attr("min"));
    input.siblings("span.max").text(input.attr("max"));
    input.attr('data-original-title', input.val());
    input.tooltip({trigger: 'manual'}).tooltip('show');  
    input.on('click mousemove', function(){
      input.attr('data-original-title', $(this).val());  
      input.tooltip('show');  
    });
  }); 
  
  // Date Picker and Time Picker
  $.datepicker.setDefaults($.datepicker.regional["en-US"]);
  $('input[type="datepicker"]').each(function(){
    $(this).datepicker().datepicker('setDate', new Date());  
  });
  
  $('input[type="timepicker"]').each(function(){
    $(this).timepicker();
  });
  
});
