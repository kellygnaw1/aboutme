
var roles = [ "Mathematician", "Developer", "Baker", "Music Enthusiast" ]
var roleElement = $("#role");

var counter = 0;
setInterval(function() {
	changeRoles(roleElement);
}, 3000);

function changeRoles(e) {
	e.fadeOut(function() {
		e.text(roles[counter]);
		console.log(roles[counter]);
		counter = (counter + 1) % roles.length;
		e.fadeIn();
	});
}
