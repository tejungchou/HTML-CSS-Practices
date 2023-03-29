var item_url = "https://awiclass.monoame.com/api/command.php?type=get&name=itemdata";

var shoplist = {};

shoplist.name = "MyShoppinglist 購物清單";
shoplist.time = "03/28/2023";
shoplist.list = [
  { name: "吹風機", price: 300 },
  { name: "麥克筆", price: 20 },
  { name: "筆記型電腦", price: 54000 },
  { name: "iPhone 14", price: 32000 },
  { name: "神奇海螺", price: 5000 }
];

$.ajax({
  url: item_url,
  success: function(res){
    shoplist.list = JSON.parse(res);
    showlist();
  }
});

var item_html =
  "<li id = {{id}} class='buy_item'>{{num}}.{{item}}<div class='price'>{{price}}</div><div id={{del_id}} data-delid={{del_item_id}} class='del_btn'>X</div></li>";
var total_html =
  "<li class='buy_item total'> 總價 <div class='price'>{{price}}</div></li>";

function showlist() {
  $("#items_list").html("");
  var total_price = 0;
  for (var i = 0; i < shoplist.list.length; i++) {
    var item = shoplist.list[i];
    var item_id = "buy_item_" + i;
    var del_item_id = "del_buy_item_" + i;
    
    total_price += parseInt(item.price);
    var current_item_html = item_html.replace("{{num}}", i + 1)
                                    .replace("{{item}}", item.name)
                                    .replace("{{id}}", item_id)
                                    .replace("{{del_id}}", del_item_id)
                                    .replace("{{price}}", item.price)
                                    .replace("{{del_item_id}}", i);
    $("#items_list").append(current_item_html);
    $("#" + del_item_id).click(function () {
      remove_item(parseInt($(this).attr("data-delid")));
    });
  }
  var current_total_html = total_html.replace("{{price}}", total_price);
  $("#items_list").append(current_total_html);
}
showlist();

$(".add_btn").click(function () {
  shoplist.list.push({
    name: $("#input_name").val(),
    price: $("#input_price").val() || 0
  });
  $("#input_name").val(""); //clear up
  $("#input_price").val("");
  showlist();
});

function remove_item(id) {
  shoplist.list.splice(id, 1);
  showlist();
}