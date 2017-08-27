var foo = document.getElementById("friendNameDiv");

$("#submit").on("click", function(){
  console.log("submit button clicked");
  showFriend();
  event.preventDefault();
  jQuery.noConflict();
  $("#resultsModal").modal('show');
})// end on.click()
  function showFriend(){
    console.log("showFriend()");
  // When User Submits
  $("#submit").on("click", function(){
    event.preventDefault();
    $("#resultsModal").modal();
    // isValid = false;

    // // Makes sure that all answers are valid
    // function validateForm() {
    // 	var isValid = true;
    // 	// Checks Text Input Fields Value
    // 	$('.textValue').each(function() {
    // 		if ($(this).val() === "")
    // 			isValid = false;
    // 	});
    // 	$('.radioValue').each(function() {
    // 		if ($(this).val() === "")
    // 			isValid = false;
    // 	})
    // 	return isValid;
    // }// end validateForm()
    // if(isValid === true){
    // 	// Turns input into object
    var inputData = {
      name: $("#name").val(),
      photo: $("#photo").val(),
      scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val(), ]
    }// end inputData()
    console.log(inputData);
    $.post("/api/friends", inputData, function(data) {
      console.log(data);
    });// end .post()

    friendNameDiv.innerHTML(bestMatch.name);
  });// end on.click()
}// end showFriend()