setInterval(function() {

  const serverUrl = 'http://127.0.0.1:3000';
  $.ajax({
    url: serverUrl,
    type: 'GET',
    success: function (data) {
      SwimTeam.move(data)
    }
  })
}, 3000)
