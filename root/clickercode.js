// * img coords generated with 
// http://imagemap-generator.dariodomi.de/

// * made responsive with
// https://github.com/stowball/jQuery-rwdImageMaps

const bones = [];

$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();

    $('area').on('focus', function(e) {
      e.preventDefault();
      bones.push($(this).attr('class'));
//       $('.selection p').html($(this).attr('class'));
      $('.selection p').html(bones);
    });
  
    $(document).on('click', function(e) {
      e.preventDefault();
      if ( $(e.target).closest('area').length === 0 ) {
        $('.selection p').html('click a brick'); 
      }  
    });
    
  
    
});
