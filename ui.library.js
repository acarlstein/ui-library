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
    
  // In-Line Editable
  // TODO:
  $('.editable-text').each(function(){
    let editable = $(this);
    let storage = "storage";
    let element = null;
    editable.editable({}, {
      type: editable.attr('type')     
      , cssclass: 'form-control editable-text'
      , cancelcssclass : 'danger'
      , submitcssclass : 'btn'
      , submit: 'Submit'
      , cancel: 'Cancel'
      , placeholder: 'Click Here to Edit'
      , tooltip: 'Click Here to Edit'  
      , width: '75%'
      , data: "Default value being displayed"     
      , submitdata: function(revert, settings, submitdata){
        settings.data=storage;        
      }
      , onsubmit: function(a, b){               
        $("div." + b.className.replace(" ", ".")).each(function(){   
          let elem = $(this);
          if(elem.attr('class') == b.className){           
            storage = elem[0].firstChild[0].value;                             
            setTimeout(function(){
              elem.html(storage);
            }, 1000);
          };         
        });        
      }
    });
  });
  
  // Textarea TinyMCE
  tinymce.init({
    selector: 'textarea.tinymce',
    height: 150,
    resize: false,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
    content_css: [
      '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
      '//www.tiny.cloud/css/codepen.min.css'
    ]
  });
  
  // Modals
  $("div.modal").modal('hide');

  //Progress emulator  
  $(".progress-bar ").each(function(){
    let rndPercentage = (Math.floor(Math.random() * 90) + 10) + "%";
    $(this).css("width", rndPercentage).text(rndPercentage);
  });
  
  // Navigation: Tracking Progress
  let trackingProgress = $('.tracking-progress > li');  
  let w = (99.05 / trackingProgress.length).toFixed(2) + "%";  
  trackingProgress.width(w);
   
  //Pagination
  $('.pagination').twbsPagination({
        totalPages: 3,
        visiblePages: 3,
        next: 'Next',
        prev: 'Prev',
        onPageClick: function (event, page) {
          $(".page").css("display", "none");
          $("#page" + page).css("display", "block");
        }
    });
  
});
