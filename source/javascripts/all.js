//= require_tree .

$(".dropdown-trigger").click(function () {
	$("i").toggleClass("fa-chevron-down fa-chevron-up");
	$(".dropdown-content").toggleClass("active");
 });