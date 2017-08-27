// // When user clicks on the form submit button this runs
// $("#submit").on("click", function(){
//   // Calls the showFriend function
//   showFriend();
//   // Prevents the form from submitting and refreshing the page
//   event.preventDefault();
//   // Gives control to library that called the jQuery Action
//   jQuery.noConflict();
//   // Causes the modal to show on screen
//   $("#resultsModal").modal('show');
// })// end on.click()
//   function showFriend(){
//     var inputData = {
//       name: $("#name").val(),
//       photo: $("#photo").val(),
//       scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val(), ]
//     }// end inputData()
//     console.log(inputData);
//     $.post("/api/friends", inputData, function(data) {
//       console.log(data);
//     });// end .post()

//     friendNameDiv.innerHTML(bestMatch.name);
//   });// end on.click()
// }// end showFriend()