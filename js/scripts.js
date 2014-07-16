$(document).ready(function(){
  $("form#list").submit(function(event){
    event.preventDefault();

    var inputtedItem = $("input#item").val();
    var inputtedDate = $("input#date").val();
    var newListItem = {item: inputtedItem, date: inputtedDate};

  $("ul#finalList").append("<li>" + inputtedItem + " by " + inputtedDate + "</li>");


  $("input#item").val("");
  $("input#date").val("");

  $("#finalList li").last().click(function(){
    $(this).addClass("selected")
  });
});
});
