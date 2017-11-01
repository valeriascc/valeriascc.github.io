  $(".aprende-mas").click(function() {
    $('html,body').animate({
        scrollTop: $(".top-body").offset().top},
        'slow');
});

  $("#volver-in").click(function() {
    $('html,body').animate({
        scrollTop: $(".slideshow-container").offset().top},
        'slow');
});

  $(".conoce-mas").click(function() {
  $('html,body').animate({
      scrollTop: $(".body").offset().top},
      'slow');
});

  $('button').on('click', function(){
    $('button').removeClass('selected');
    $(this).addClass('selected');
  });

$('.carousel').carousel({
  interval: 4000,
  pause: false
})

$('#myModal').modal(options)

function plantaBtn() {
  document.getElementById('plan').style.display = "block";
  document.getElementById('oficina').style.display = "none";
}

function oficinasBtn() {
  document.getElementById('oficina').style.display = "block";
  document.getElementById('plan').style.display = "none";
}

