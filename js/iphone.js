if (window.innerWidth && window.innerWidth >= 568) {
	$(document).ready(function(){
		$(".navlink").removeClass("nav");
	});
}
if (window.innerWidth && window.innerWidth <= 568) {
	$(document).ready(function(){
		$(".navlink").addClass("nav");
	});
}
$("nav").click(function(){
	$(".nav").toggle();
});