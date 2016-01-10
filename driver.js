$(document).ready(function() {

  $('#find_movie').on('click', function(event){
    var title = $('#movie_name').val();
    movieSearch(title).then(function(cast){
      $('#cast').html(cast);

    })
  })

});