//Btns para seleccioner el área a calcular
const btnCuadrado = document.querySelector('#Cuadrado');
const btnRectangulo = document.querySelector('#Rectangulo');
const btnCirculo = document.querySelector('#Circulo');
const btnTriangulo = document.querySelector('#Triangulo');

btnCuadrado.addEventListener('click', (e) => {
    e.preventDefault();
    let lado=4;
    let arCua=lado*lado;
    console.log(arCua);
});
btnRectangulo.addEventListener('click', (e) => {
    e.preventDefault();
    let base=4;
    let altura=6;
    let arRec=base*altura;
    console.log(arRec);
});
btnTriangulo.addEventListener('click', (e) => {
    e.preventDefault();
    let base=4;
    let altura=6;
    let arRec=base*altura/2;
    console.log(arRec);
});
btnCirculo.addEventListener('click', (e) => {
    e.preventDefault();
    let radio=4;
    let arCir=Math.PI*(Math.pow(radio,2));
    console.log(arCir);
});