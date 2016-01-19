  Twitch.init({clientId: 'mzbri5lzbhbj9fpi0d1ip91hz4lw2b3'}, function(error, status) {
   console.log("Twitch API Loaded");
  });
Twitch.api({method: 'channels/monstercat'},  function(error, channel) {
  document.getElementById('url').innerHTML += '<a href="' + channel.url + '" target="_blank" >' + channel.display_name + '</a>';
  document.getElementById('status').innerHTML += channel.status
});
Twitch.api({method: 'channels/hui101'},  function(error, channel) {
  document.getElementById('url2').innerHTML += '<a href="' + channel.url + '" target="_blank" >' + channel.display_name + '</a>';
  document.getElementById('status2').innerHTML += channel.status
});
Twitch.api({method: 'channels/heyitspassion'},  function(error, channel) {
  document.getElementById('url3').innerHTML += '<a href="' + channel.url + '" target="_blank" >' + channel.display_name + '</a>';
  document.getElementById('status3').innerHTML += channel.status
});
Twitch.api({method: 'channels/jaysc2'},  function(error, channel) {
  document.getElementById('url4').innerHTML += '<a href="' + channel.url + '" target="_blank" >' + channel.display_name + '</a>';
  document.getElementById('status4').innerHTML += channel.status
});


// Offline and Online System

Twitch.api({method: 'streams/monstercat'},  function(error, stream) {
	  if (stream.stream === null) {
	  	document.getElementById('onoff').innerHTML += '<i class="fa fa-ban fa-2x"></i>'
} else {
    document.getElementById('onoff').innerHTML += '<i class="fa fa-check-circle-o fa-2x"></i>'
}
});
Twitch.api({method: 'streams/hui101'},  function(error, stream) {
	  if (stream.stream === null) {
	  	document.getElementById('onoff2').innerHTML += '<i class="fa fa-ban fa-2x"></i>'
} else {
    document.getElementById('onoff2').innerHTML += '<i class="fa fa-check-circle-o fa-2x"></i>'
}
});
Twitch.api({method: 'streams/heyitspassion'},  function(error, stream) {
	  if (stream.stream === null) {
	  	document.getElementById('onoff3').innerHTML += '<i class="fa fa-ban fa-2x"></i>'
} else {
    document.getElementById('onoff3').innerHTML += '<i class="fa fa-check-circle-o fa-2x"></i>'
}
});
Twitch.api({method: 'streams/jaysc2'},  function(error, stream) {
	  if (stream.stream === null) {
	  	document.getElementById('onoff4').innerHTML += '<i class="fa fa-ban fa-2x"></i>'
} else {
    document.getElementById('onoff4').innerHTML += '<i class="fa fa-check-circle-o fa-2x"></i>'
}
});











