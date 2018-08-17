// Activate submit button
$('#submitButton').on('click', function(event) {
  event.preventDefault();

  // Gather user inputs
  var userInputData = {
    name: $('#userName').val().trim(),
    photo: $('#userPhoto').val().trim(),
    scores: [
      $('#q1').val().trim(),
      $('#q2').val().trim(),
      $('#q3').val().trim(),
      $('#q4').val().trim(),
      $('#q5').val().trim(),
      $('#q6').val().trim(),
      $('#q7').val().trim(),
      $('#q8').val().trim(),
      $('#q9').val().trim(),
      $('#q10').val().trim()
    ]
  };

  // Add user inputs to friends list
  $.post('/friends', userInputData)
    .done(function(data) {
      // console.log('response = ' + JSON.stringify(data));
      // Set the name and image values of friend match
      $('#userMatch').html(data.matchName);
      $("#userMatchImage").attr("src", data.matchImage);
      // Pop open the modal dialog
      $('top-results-modal').modal('toggle');
    });
});
