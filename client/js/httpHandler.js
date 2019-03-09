(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  var random = Math.floor(Math.random() * 4)
  var directions = ['left', 'right', 'up', 'down']

  $.ajax({
    url: serverUrl,
    data: directions[random],
    type: 'GET',
    success: function (data) {
      SwimTeam.move(data)
    },
    error: errorCB || function(error) {
      console.error('chatterbox: Failed to post messages', error);
    }
  });
})();
