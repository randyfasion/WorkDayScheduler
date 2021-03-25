// var calendardisplay = $('#calendar-display');

//  function dispcalendar(){
//      var date = moment().format('dddd, MMMM Do');
//     calendardisplay.text(date);
// }

 var calendardisplay = moment().format("dddd, MMM Do");
 $("#calendar-display").text(calendardisplay);




//making save buttons clickable 
$(".btn1").click(function(){
console.log("clicked");

})

//input items into schedule - input tag(html-59)/textarea tag


//to local storage

//function to change colors - moment library
//var now = moment().hour(); 
var now = 17;
console.log(now);
//create loop for table - loop through each row of table (hour) get value
//current hour - using data attribute each



//uses current hour to evaluate colors of table row