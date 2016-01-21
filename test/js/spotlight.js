var spotlight = 1
var member = "Monstercat"


if (spotlight === 1) {
	 document.getElementById('spotlight').innerHTML += '<h3 class="hvr-hang">' + member + ' </h3>';
	 document.getElementById('spotlight_window').innerHTML += '<iframe src="http://player.twitch.tv/?channel=' + member + '&autoplay=false" frameborder="0" scrolling="no" height="310" width="510"></iframe>';
} else {
	document.getElementById('spotlight').innerHTML += '<h3 class="hvr-hang">No one atm :(</h3>';
}