// * img coords generated with 
// http://imagemap-generator.dariodomi.de/

// * made responsive with
// https://github.com/stowball/jQuery-rwdImageMaps

// function addbone(bonename) {
//   var completelist= $(document).getElementById("bonelist");
//   counter++;
//   completelist.innerHTML += "<li>Bone " + bonename + "</li>";
// }

$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();

    $('area').on('focus', function(e) {
      e.preventDefault();
      $('.selection p').html($(this).attr('class'));
      
      var completelist= $(document).getElementById("bonelist");
      completelist.innerHTML += "<li>Bone " + $(this).attr('class') + "</li>";
//       addbone();
    });
  
    $(document).on('click', function(e) {
      e.preventDefault();
      if ( $(e.target).closest('area').length === 0 ) {
        $('.selection p').html('click a brick'); 
      }  
    });
    
});
