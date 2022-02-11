$(document).ready( function() {                  // It is also possibe to use CSS properties and give it a value to that property
    $("header").hover(function(){
        $(this).css("background-color", "lightblue");
    }, function(){
        $(this).css("background-color", "lightgray");
    });
});

$(document).ready(function(){
    $("p").click(function(){
      $("p").text("jQuery is a fast, JavaScript library that makes many tasks easier and simpler to accomplish. " +
      "A JavaScript library contains pre-written JavaScript which makes developing applications a bit easier for the developer. " +
      "This means jQuery is not a language, but an extension of JavaScript. " +
      "It takes many lines of JavaScript code, which we would have had to write ourselves before jQuery, and compresses it.");
    });
  });

$("li").dblclick(function(){
    $(this).hide();
});

$("input").keydown(function(){
    $(this).toggleClass("input");
});