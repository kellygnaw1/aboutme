
var roles = [ "UCSB Math Major", "Lorem ipsum", "Mauris faucibus", "Class aptent taciti" ]
var roleElement = $("#role");

var counter = 0;
setInterval(function() {
	changeRoles(roleElement);
}, 1000);

function changeRoles(e) {
	e.fadeOut(function() {
		e.text(roles[counter]);
		console.log(roles[counter]);
		counter = (counter + 1) % roles.length;
		e.fadeIn();
	});
}
