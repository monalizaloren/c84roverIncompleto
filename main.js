canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

roverWidth = ?; // definir a largura
roverHeight = ?; // definir a altura

//Coloque o nome da imagem de fundo
backgroundImage = "???";

//Coloque o nome da imagem do rover
roverImage = "???";

roverX = ?; // posição no eixo x
roverY = ?; // posição no eixo y 

function add() {
	//Utilize o código 'new Image();', pois a variável 'backgroundImgTag' definirá uma imagem
	backgroundImgTag = ??? 
	backgroundImgTag.onload = CarregarPlanoDeFundo; // ajustando uma função, ao carregar essa variável
	backgroundImgTag.src = backgroundImage;   // carregar a imagem

	//Utilize o código que definirá a imagem do rover
	roverImgTag = ??? //definindo uma variável com uma nova imagem
	roverImgTag.onload = CarregarRover; // ajustando uma função, ao carregar essa variável
	roverImgTag.src = roverImage;   // carregar a imagem
}

function CarregarPlanoDeFundo() {
	//Utilize 'drawImage' para que a imagem especificada seja desenhada na tela
	ctx.???(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function CarregarRover() {
	ctx.???(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}

//Utilize 'addEventListener', pois se o evento que acontecer na tela for 'pressionar tecla para baixo', acontecerá a função 'myKeyDown'
window.???("keydown", myKeyDown);

//Digite o nome da função
function ???(e)
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
		//Coloque o nome da variável que gaurda o eixo y do rover
		??? = ??? - 10;
		CarregarPlanoDeFundo();
		 CarregarRover();
	}
}
function baixo()
{
	if(roverY <=500)
	{
		//Coloque o nome da variável que gaurda o eixo y do rover
		??? =???+ 10;
		CarregarPlanoDeFundo();
		CarregarRover();
	}
}
function esquerda()
{
	if(roverX >= 0)
	{
		//Coloque o nome da variável que gaurda o eixo X do rover
		??? =??? - 10;
		CarregarPlanoDeFundo();
		CarregarRover();
	}
}
function direita()
{
	if(roverX <= 700)
	{
		//Coloque o nome da variável que gaurda o eixo X do rover
		??? =??? + 10;
		CarregarPlanoDeFundo();
		CarregarRover();
   }
}

	
