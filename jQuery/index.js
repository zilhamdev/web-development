$("h1").addClass("big-title margin-50");

$("button").html("<del>baabsa</del>");

$("img").attr("width", "100px");

$("a").attr("href", "https://bing.com");
$("a").attr("target", "_blank");

$("h1").on("mouseover", function() {
    $("h1").css("color", "orange");
});

$("button").click(function() {
    $("h1").slideUp().slideDown().animate({opacity:0.5}).animate({opacity:0.8});
});




$(document).keydown(function (event) {
    $("h1").text(event.key);
});






//$("h1").attr("class", "");

// $(document).ready(function() {

// });