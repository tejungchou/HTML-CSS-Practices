var button_audio = new Audio("https://monoame.com/awi_class/ballsound/click14.wav");
var change_page_audio = new Audio("https://monoame.com/awi_class/ballsound/click18.wav");
var home_button_audio = new Audio("https://monoame.com/awi_class/ballsound/click23.wav");
var wiggle_audio = new Audio("https://monoame.com/awi_class/ballsound/phonevi.mp3");


$(".i5").click(function(){
  $(".phone").css("width", ""); //to default size
  $(".screen").css("height", "");
  $(".phonename").text($(this).text());
  button_audio.play();
});

$(".i5s").click(function(){
  $(".phone").css("width", "250px");
  $(".screen").css("height","420px");
  $(".phonename").text($(this).text());
  button_audio.play();
});
$(".i6").click(function(){
  $(".phone").css("width", "270px"); //to default size
  $(".screen").css("height", "440px");
  $(".phonename").text($(this).text());
  button_audio.play();
});

$(".i6s").click(function(){
  $(".phone").css("width", "300px");
  $(".screen").css("height","480px");
  $(".phonename").text($(this).text());
  button_audio.play();
});
var page = 0;
$(".screen").click(function(){
  page += 1;
  if (page >= 3){
    page = 0;
  }
  $(".pages").css("left", "-"+page*100+"%"); //我們在CSS有把position變成relatvie, 代表可以把左距left設成負數 就會往左跑。
  change_page_audio.play();
});
$(".button").click(function(){
  page = 0;
  $(".pages").css("left", "-"+page*100+"%");
  home_button_audio.play();
});

var spin = 360;
$(".turn").click(
  function(){
    $(".phone").css("transform", "rotate("+ spin +"deg)");
    spin += 360;
});

$(".wiggle").click(
  function(){
  wiggle_audio.play();
  wiggleTime = 0;
});

var wiggleTime = 21;
setInterval(
  function(){
    if (wiggleTime <=20){
      wiggleTime += 1;
    console.log(wiggleTime);
    if (wiggleTime%2==0){
      $(".phone").css("left", "-30px");
    }
    else {
      $(".phone").css("left", "30px");
    }
    }
    if (wiggleTime == 21){
      $(".phone").css("left", "");
    }
  }
, 60);