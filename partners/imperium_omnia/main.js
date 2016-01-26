// Get the twitch api loaded.
  Twitch.init({clientId: 'mzbri5lzbhbj9fpi0d1ip91hz4lw2b3'}, function(error, status) {
   console.log("Twitch API Loaded");
  });


// Streamer Info

Twitch.api({method: 'channels/imperium_omnia'},  function(error, channel) {
	if (channel.logo === null) {
		document.getElementById('picture').innerHTML += '<img src="http://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_150x150.png" class="img-responsive img-circle">';
	} else {
		document.getElementById('picture').innerHTML += '<img src="' + channel.logo + '" height="150" width="150" class="img-responsive img-circle">';
	}
	document.getElementById('status').innerHTML += '<h3>' + channel.display_name + ' currently playing ' + channel.game + '</h3>' + channel.status
});

