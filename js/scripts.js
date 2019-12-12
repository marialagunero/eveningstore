$(document).ready(function(){
  $("form#items").submit(function(event) {
    event.preventDefault();
    var items = ["item1", "item2", "item3", "item4"];

    // console.log(items)
    var inputItems = items.map(function(item) {
      return $("input#" + item).val().toUpperCase();
    });

    inputItems.sort();
    inputItems.forEach(function(item) {
      $("#input").append(item);

    });

    $("#input").show();
  });

});
