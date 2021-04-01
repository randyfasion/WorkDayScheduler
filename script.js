 var calendardisplay = $('#calendar-display');

//  function dispcalendar(){
//      var date = moment().format('dddd, MMMM Do');
//     calendardisplay.text(date);
// }


//set date

function displaytime(){ 
 var calendardisplay = moment().format("dddd, MMM Do [|] hh:mm:ss a");
 $("#calendar-display").text(calendardisplay);

}
 setInterval(displaytime, 1000);
 saveSchedule();

function saveSchedule(){
   $('#9 .w-75').val(localStorage.getItem('9'));
   var content =  $('.w-75').val();
   var time =  $('#9'); 

   if (!content || !time){
       return;
   }
}


//save button
$(".btn1").click(function(){
    console.log("clicked");

    var content =  $('.w-75').val();
   var time =  $('#9');

   console.log(time);
   
   localStorage.setItem(time , content);
   
    
})

//color blocks 
$(".time-b").each(function() {

    var hour = parseInt($(this).data().number);
    var currentTime = parseInt(moment().format("HH"))
  
      if(currentTime > hour){
        $(this).addClass("past")
        //console.log("seth, whats up?"); //used for testing functions
      } else if (currentTime < hour) {
        $(this).addClass("future");
      } else {
        $(this).addClass("present");
      }
       console.log("are you working?", (this))
  });