  Twitch.init({clientId: 'mzbri5lzbhbj9fpi0d1ip91hz4lw2b3'}, function(error, status) {
   console.log("Twitch API Loaded");
  });
Twitch.api({method: 'channels/monstercat'},  function(error, channel) {
  document.getElementById('url').innerHTML += '<a href="' + channel.url + '" target="_blank" >' + channel.name + '</a>';
  document.getElementById('status').innerHTML += channel.status
});
Twitch.api({method: 'channels/hui101'},  function(error, channel) {
  document.getElementById('url2').innerHTML += '<a href="' + channel.url + '" target="_blank" >' + channel.name + '</a>';
  document.getElementById('status2').innerHTML += channel.status
});