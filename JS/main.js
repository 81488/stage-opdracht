var clickcounter = 0;
correctcount = 0;
total = 0;
var start = ".start";
var number1, number2, number3, number4, number5;
var check1, check2, check3, check4, check5;
var a = 0, b = 1, c = 2,d = 3,e = 4, f = 5, g = 6, h = 7, i= 8, j = 9;
$(document).ready(function(){
    $(start).one("click", function()
    {
        $('.number').empty();
        timer1();
        for (var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], i = a.length; i--; ) {
            var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
            $('.number').append('<span>' + random + '</span>');

            var fivedigitsrandom = Math.floor(10000 + Math.random() * 90000);
            document.getElementById("code").innerHTML=fivedigitsrandom;
    };
    $(".reset").on("click", function(){
        location.reload();
    })

    $(".number").on("click" ,function() {
        clickcounter++;
        $("#correct").html(correctcount = correctcount + 1);
        if(clickcounter < 5){
            var number = +($(this).find('.number').text());
            $("#pressed").append(number);
        }else{
            var fivedigitsrandom = Math.floor(10000 + Math.random() * 90000);
            document.getElementById("code").innerHTML=fivedigitsrandom;
            $("#pressed").empty("");
            $('.number').empty();

            for (var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], i = a.length; i--; ) {
            var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
            $('.number').append('<span>' + random + '</span>');
        //     // $("#total").html(total);
        //     // total = total + 1;
        // }    
            clickcounter = 0;
        }
        // alert(fired_button);
    };

    $("[data-toggle=popover]").popover();

 
    
});
    });
function timer1(){
    let remSec = $("#seconds"),
  countSec = 60,
 
  timer = setInterval(() => {
  countSec >= 0 ? remSec.text(countSec--) : clearInterval(timer);
  if(countSec < 0){
    // if (confirm('Time Done')) {
        alert('Time done');
        location.reload();
    //      $(".number-container").fadeOut(1500);
    //     // $("#button").fadeIn(1500);
    //     $("#button").click(function(){
    //         location.reload();
    //     });
    // } else {
    //     alert("Press OK to play again")
    //     location.reload();
    // }
  } 
  }, 1000); 
}
});
