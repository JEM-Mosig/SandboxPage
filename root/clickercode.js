// * img coords generated with 
// http://imagemap-generator.dariodomi.de/

// * made responsive with
// https://github.com/stowball/jQuery-rwdImageMaps

function addbone(bonename) {
  var completelist= $(document).getElementById("bonelist");
  counter++;
  completelist.innerHTML += "<li>Bone " + bonename + "</li>";
}

$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();

    $('area').on('focus', function(e) {
      e.preventDefault();
      bones.push($(this).attr('class'));
      $('.selection p').html($(this).attr('class'));
      addbone($(this).attr('class'));
    });
  
    $(document).on('click', function(e) {
      e.preventDefault();
      if ( $(e.target).closest('area').length === 0 ) {
        $('.selection p').html('click a brick'); 
      }  
    });
    
});
