// Activate submit button
$('#submitButton').on('click', function(event) {
  event.preventDefault();

  // Validate responses to each question
  function formValidation() {
    var isValid = true;

    $("form-control").each(function() {
      if ($(this).val() === "Please Select") {
        isValid = false;
      }
    });
    return isValid;
  }

  if (formValidation()) {

  // Gather user inputs
  var userInputData = {
    name: $('#userName').val(),
    photo: $('#userPhoto').val(),
    scores: [
      $('#q1').val(),
      $('#q2').val(),
      $('#q3').val(),
      $('#q4').val(),
      $('#q5').val(),
      $('#q6').val(),
      $('#q7').val(),
      $('#q8').val(),
      $('#q9').val(),
      $('#q10').val()
    ]
  };

  // Add user inputs to friends list
  $.post('/friends', userInputData)
    .done(function(data) {
      // console.log('response = ' + JSON.stringify(data));
      // Set the name and image values of friend match
      $('#matchName').html(data.matchName);
      $("#matchImage").attr("src", data.matchImage);
      // Pop open the modal dialog
      $('top-results-modal').modal('toggle');
    });
  }
  else {
    alert("All fields are required before submitting.")
  }
})
