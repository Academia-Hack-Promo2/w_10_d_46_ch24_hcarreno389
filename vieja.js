function play(){
	var tablero = [3][3];
	console.log("a jugar");
	var coor = document.getElementById("coor").value;
	var car = document.createElement("h1");
	var jugada = document.createTextNode("X");
	car.appendChild(jugada)
	var recipient = document.getElementById(coor);
	recipient.appendChild(car);

	var corPc1 = 0;
	var corPc2 = 0;
	corPc1 = Math.floor(Math.random()*3+1);
	corPc2 = Math.floor(Math.random()*3+1);
	corPc = corPc1 + ',' + corPc2;
	console.log(corPc);
	var car = document.createElement("h1");
	var jugada = document.createTextNode("O");
	car.appendChild(jugada)
	var recipient = document.getElementById(corPc);
	recipient.appendChild(car);
console.log(tablero);

	
};
