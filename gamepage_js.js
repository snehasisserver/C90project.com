player_1_name = localStorage.getItem("player1");
player_2_name = localStorage.getItem("player2");

player_1score = 0;
player_2score = 0;

document.getElementById("player1_name").innerHTML = player_1_name + " : ";
document.getElementById("player2_name").innerHTML = player_2_name + " : ";

document.getElementById("player1_score").innerHTML = player_1score;
document.getElementById("player2_score").innerHTML = player_2score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player_1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_2_name ;