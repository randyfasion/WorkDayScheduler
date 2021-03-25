/*// var calendardisplay = $('#calendar-display');

//  function dispcalendar(){
//      var date = moment().format('dddd, MMMM Do');
//     calendardisplay.text(date);
// }

 var calendardisplay = moment().format("dddd, MMM Do");
 $("#calendar-display").text(calendardisplay);




//making save buttons clickable 


//input items into schedule - input tag(html-59)/textarea tag


//to local storage
saveSchedule();

function saveSchedule(){
    $('#9 .w-75').val(localStorage.getItem('9'));
    //document.getElementById("ct");
    var content =  $('.w-75').val();
    var time =  $('#9'); 



    if (!content || !time){
        return;
    }
    
//console.log("done")

}
$(".btn1").click(function(){
    console.log("clicked");
    
    var content =  $('.w-75').val();
    var time =  $('#9');

    console.log(time);


    
        
    
    localStorage.setItem(time , content);
    
    
    
    
    })


//function to change colors - moment library
//var now = moment().hour(); 


// var now = 17;
// console.log(now);


//create loop for table - loop through each row of table (hour) get value
//current hour - using data attribute each



//uses current hour to evaluate colors of table row
*/