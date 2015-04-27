var tablero = [[0,0,0],[0,0,0],[0,0,0]];
function play(){
	
	console.log("a jugar");
	
	var coor = document.getElementById("coor").value;
	var car = document.createElement("h1");
	var jugada = document.createTextNode("X");
	car.appendChild(jugada)
	var recipient = document.getElementById(coor);
	if (tablero[coor[0]-1][coor[2]-1]=="X" || tablero[coor[0]-1][coor[2]-1]=="O") { alert("Esa posicion esta ocupada");
	return;}
	recipient.appendChild(car);
	tablero[coor[0]-1][coor[2]-1]="X";
	var win = checkWiner(tablero);
	if (win) {alert("felicidades jugador has ganado\n Preciona F5 para jugar de nuevo");
	}
	else{
		if (win=='Vieja') {
			alert("Jajaja gano la vieja \n Preciona F5 para jugar de nuevo");
			return;
		}
	}
playMachine(tablero);


};

function playMachine(tablero){
	var corPc1 = 0;
	var corPc2 = 0;
	do{
		corPc1 = Math.floor(Math.random()*3+1);
		corPc2 = Math.floor(Math.random()*3+1);
		corPc = corPc1 + ',' + corPc2;
		console.log(corPc);
		var car = document.createElement("h1");
		var jugada = document.createTextNode("O");
		car.appendChild(jugada)
		var recipient = document.getElementById(corPc);
	}while(tablero[corPc[0]-1][corPc[2]-1]=="X" || tablero[corPc[0]-1][corPc[2]-1]=="O");
	tablero[corPc[0]-1][corPc[2]-1]="O";
	recipient.appendChild(car);
	var win = checkWiner(tablero);
	if (win) { alert("Jajaja gano la maquina\n Preciona F5 para jugar de nuevo");
	return;
	}
	else{
		if (win=='Vieja') {
			alert("Jajaja gano la vieja \n Preciona F5 para jugar de nuevo");
			return;
		}
	}
	console.log(tablero[0]);
	console.log(tablero[1]);
	console.log(tablero[2]);
};
function checkWiner(board){

	if( board[0][0] == board[0][1] && board[0][1] == board[0][2] && board[0][2] != "0" ||
		board[1][0] == board[1][1] && board[1][1] == board[1][2] && board[1][2] != "0" ||
		board[2][0] == board[2][1] && board[2][1] == board[2][2] && board[2][2] != "0" ||
		board[0][0] == board[1][0] && board[1][0] == board[2][0] && board[2][0] != "0" ||
		board[0][1] == board[1][1] && board[1][1] == board[2][1] && board[2][1] != "0" ||
		board[0][2] == board[1][2] && board[1][2] == board[2][2] && board[2][2] != "0" ||
		board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[2][2] != "0" ||
		board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[2][0] != "0"){
		return true;

}else{
	if (checkFull(board)){
		return "Vieja";
	}
}
return false;

};
function checkFull(board){
	var i;
	var j;
	for (i = 0; i < 3; i++){
		for (j = 0; j < 3; j++){
			if (board[i][j] == "0"){
				return false;
			}
		}
	}
	return true;
};
