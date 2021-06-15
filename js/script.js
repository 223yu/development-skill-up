$(function(){
  $('#menu-box').on('click', function(){
    $(this).toggleClass('open');
    $('nav').toggleClass('open');
  });
});