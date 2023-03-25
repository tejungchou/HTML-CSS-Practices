var count=12;
function clicker(ope, num){
  if (ope == '+') {
    num = num + 1
  }
  else {
    num = num - 1
  }
  return num
}
function num_check(count){
  if (count < 10){
      $(".text").text("Low stock!!");
      $(".text").css("border-color", "#FF6505");
      $(".text").css("color", "#FF6505");
      $(".fill_stock").addClass("fill_stock_open");
    }
    else if (10 <= count && count < 20){
      $(".text").text("Selling good!!");
      $(".text").css("border-color", "#FFCD05");
      $(".text").css("color", "#FFCD05");
      $(".fill_stock").removeClass("fill_stock_open");
    }
    else if (count >= 20){
      $(".text").text("Ample supply!!");
      $(".text").css("border-color", "#FFF");
      $(".text").css("color", "#FFF");
    }
}

$(".minus").click(
  function(){
    count = clicker('-', count);
    $(".num").text(count);
    num_check(count);
  }
);
$(".add").click(
  function(){
    count = clicker('+', count);
    $(".num").text(count);
    num_check(count);
  }
);
var waitTime=0;
$(".fill_stock").click(
  function(){
    $(".fill_stock").text("☎ Contacting our provider... ");
    setInterval(
      function(){
        waitTime += 1;
        $(".fill_stock").text("☎ Contacting our provider..."+waitTime);
      }
      ,1000);
  }
);