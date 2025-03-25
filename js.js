$(document).ready(function(){
    $(".team1").click(function(){
        var userInput = prompt("Enter the name of the team");
        if (userInput != null && userInput != "") {
            $(".team1 h1").text(userInput);
        }
    });
    $(".team2").click(function(){
        var userInput = prompt("Enter the name of the team");
        if (userInput != null && userInput != "") {
            $(".team2 h1").text(userInput);
        }
    });
    $(".team1score").click(function(){
        $(".team1score span").text(parseInt($(".team1score span").text()) + 1);
    });
    $(".team2score").click(function(){
        $(".team2score span").text(parseInt($(".team2score span").text()) + 1);
    });
    $(".team1deduct").click(function(){
        if (parseInt($(".team1score span").text()) > 0){
            $(".team1score span").text(parseInt($(".team1score span").text()) - 1);
        }
    });
    $(".team2deduct").click(function(){
        if (parseInt($(".team2score span").text()) > 0){
            $(".team2score span").text(parseInt($(".team2score span").text()) - 1);
        }
    });
  });