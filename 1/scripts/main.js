if($(window).scrollTop() >= 100){
  $(".headerContainer").addClass("scrolled");
  $(".logo")[0].innerHTML = '<img src="images/logoBlack.png" alt="">'
}
$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 100){
      $(".headerContainer").addClass("scrolled");
      $(".logo")[0].innerHTML = '<img src="images/logoBlack.png" alt="">'
    }else{
      $(".headerContainer").removeClass("scrolled");
      $(".logo")[0].innerHTML = '<img src="images/logoNTxt.png" alt="">'
    }
  });
});
var v = $(".video")
var videoPoster = $(".videoPoster")
var playIcon = $(".playIcon")

function playVideo(){
  v.css("display","block")
  videoPoster.css("display", "none");
  playIcon.css("display", "none");
  v[0].play()
}

var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
});
