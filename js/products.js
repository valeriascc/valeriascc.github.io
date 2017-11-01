  $("#linea").click(function() {
    $('html,body').animate({
        scrollTop: $("#lineaContainer").offset().top},
        'slow');
});

  $("#medida").click(function() {
    $('html,body').animate({
        scrollTop: $("#medida-container").offset().top},
        'slow');
});

  $("#metodoBtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#metodo-descripcion").offset().top},
        'slow');
});

  $("#casosBtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#casos-seccion").offset().top},
        'slow');
});

  $("#medianaBtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#med-description").offset().top},
        'slow');
});

  $("#altaBtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#alta-description").offset().top},
        'slow');
});

  $("#maximaBtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#maxima-description").offset().top},
        'slow');
});

  function myFunction() {
    var x = document.getElementsByClassName("slidesjs-previous")[0].getAttribute("title");
    document.getElementsByClassName('slidesjs-previous').style.display = 'none';
}

$(function(){
      $("#slides").slidesjs({
        width: 940,
        height: 528,
      });
      $('#slides2').slidesjs({
        width: 940,
        height: 528,
      });
      $('#slides3').slidesjs({
        width: 940,
        height: 528,
      });
      $('#slides4').slidesjs({
        width: 940,
        height: 528,
      });
      $('#slides5').slidesjs({
        width: 940,
        height: 528,
      });
      $('#slides').hide()
      $('#slides2').hide()
      $('#slides3').hide()
      $('#slides4').hide()
      $('#slides5').hide()
      $('#med-description-resp').hide()
      $('#alta-description-resp').hide()
      $('#maxima-description-resp').hide()
    });