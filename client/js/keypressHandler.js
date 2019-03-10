
// $('body').on('keydown', (event) => {
//   var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
//   if (arrowPress) {
//     var direction = arrowPress[1];
//     SwimTeam.move(direction.toLowerCase());
//   }
// });

$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    $.ajax({
      url: 'http://127.0.0.1:3000',
      type: 'GET',
      data: arrowPress,
      success: function (data) {
        var direction = arrowPress[1]
        SwimTeam.move(direction.toLowerCase());
      },
    })
  }
});

console.log('Client is running in the browser!');
