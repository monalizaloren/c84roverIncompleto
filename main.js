canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

roverWidth = ?; // definir a largura
roverHeight = ?; // definir a altura

backgroundImage = "mars.jpg";

roverImage = "rover.png";

roverX = ?; // posição no eixo x
roverY = ?; // posição no eixo y 

function add() {
	backgroundImgTag = new Image(); //definindo uma variável com uma nova imagem
	backgroundImgTag.onload = CarregarPlanoDeFundo; // ajustando uma função, ao carregar essa variável
	backgroundImgTag.src = backgroundImage;   // carregar a imagem

	roverImgTag = new Image(); //definindo uma variável com uma nova imagem
	roverImgTag.onload = CarregarRover; // ajustando uma função, ao carregar essa variável
	roverImgTag.src = roverImage;   // carregar a imagem
}

function CarregarPlanoDeFundo() {
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function CarregarRover() {
	ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			cima();
			console.log("?");
		}
		if(keyPressed == '40')
		{
			baixo();
			console.log("?");
		}
		if(keyPressed == '37')
		{
			esquerda();
			console.log("?");
		}
		if(keyPressed == '39')
		{
			direita();
			console.log("?");
		}
}
function cima()
{
	if(roverY >=0)
	{
		roverY = roverY - 10;
		CarregarPlanoDeFundo();
		 CarregarRover();
	}
}
function baixo()
{
	if(roverY <=500)
	{
		roverY =roverY+ 10;
		CarregarPlanoDeFundo();
		CarregarRover();
	}
}
function esquerda()
{
	if(roverX >= 0)
	{
		roverX =roverX - 10;
		CarregarPlanoDeFundo();
		CarregarRover();
	}
}
function direita()
{
	if(roverX <= 700)
	{
		roverX =roverX + 10;
		CarregarPlanoDeFundo();
		CarregarRover();
   }
}

	