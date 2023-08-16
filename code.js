//Objeto
class Figura{
    constructor(base,altura,radio){
        this.base=base;
        this.altura=altura;
        this.radio=radio;

    }
    AreaTriangulo(){
        let arTriangulo=this.base*this.altura/2;
        alert('El área del triángulo con las dimensiones asignadas es: '+ arTriangulo);
        const area=document.querySelector('.contenedor');
        const pTriangulo=document.createElement('p');
        pTriangulo.textContent=('El área del triángulo con las dimensiones asignadas es: '+ arTriangulo);
        area.appendChild(pTriangulo);

    }
    AreaRectangulo(){
        let arRectangulo=this.base*this.altura;
        alert('El área del rectángulo con las dimensiones asignadas es: '+ arRectangulo);
        const area=document.querySelector('.contenedor');
        const pRectangulo=document.createElement('p');
        pRectangulo.textContent=('El área del rectángulo con las dimensiones asignadas es: '+ arRectangulo);
        area.appendChild(pRectangulo);

    }
    AreaCirculo(){
        let arCirculo=Math.PI*(Math.pow(this.radio,2));
        alert('El área del círculo con las dimensiones asignadas es: '+ arCirculo);
        const area=document.querySelector('.contenedor');
        const pCirculo=document.createElement('p');
        pCirculo.textContent=('El área del círculo con las dimensiones asignadas es: '+ arCirculo);
        area.appendChild(pCirculo);
    }
    AreaCuadrado(){
        let arCuadrado=this.base*this.base;
        alert('El área del cuadrado con las dimensiones asignadas es: '+ arCuadrado);
        const area=document.querySelector('.contenedor');
        const pCuadrado=document.createElement('p');
        pCuadrado.textContent=('El área del cuadrado con las dimensiones asignadas es: '+ arCuadrado);
        area.appendChild(pCuadrado);
    }

}
function limpiarFormulario() {
    document.getElementById("formulario").reset();
}



//Btns para seleccioner el área a calcular
const btnCuadrado = document.querySelector('#Cuadrado');
const btnRectangulo = document.querySelector('#Rectangulo');
const btnCirculo = document.querySelector('#Circulo');
const btnTriangulo = document.querySelector('#Triangulo');

//Btn para ocultar ventana modal
const btnOcultarCuadrado = document.querySelector('#ocultar-cuadrado');
const btnOcultarCirculo = document.querySelector('#ocultar-circulo');
const btnOcultarTriangulo = document.querySelector('#ocultar-triangulo');
const btnOcultarRectangulo = document.querySelector('#ocultar-rectangulo');


//Variables que almacenan a las ventanas modales
const contCuadrado = document.querySelector('.contenedor-cuadrado');
const contTriangulo = document.querySelector('.contenedor-triangulo');
const contRectangulo = document.querySelector('.contenedor-rectangulo');
const contCirculo = document.querySelector('.contenedor-circulo');


//Datos a ingresar dependiendo del area seleccionada




//Eventos para accionar las ventanas
btnCuadrado.addEventListener('click', (e) => {
    e.preventDefault();
    contCuadrado.classList.add('mostrar');
});
btnRectangulo.addEventListener('click', (e) => {
    e.preventDefault();
    contRectangulo.classList.add('mostrar');
});
btnTriangulo.addEventListener('click', (e) => {
    e.preventDefault();
    contTriangulo.classList.add('mostrar');
});
btnCirculo.addEventListener('click', (e) => {
    e.preventDefault();
    contCirculo.classList.add('mostrar');
});

//Objetos

//const AreaRect=new Figura(baseInput,alturaInput,0);



//Evento del boton para ocultar las ventanas
btnOcultarCuadrado.addEventListener('click', (e) => {
    e.preventDefault();
    const ladoInput = document.getElementById("lado").value;
    
    if (ladoInput===''|| isNaN(ladoInput)){
        alert("Ingrese un valor adecuado");
        return false;
    }else{
        const AreaCuad=new Figura(ladoInput,0,0);
        AreaCuad.AreaCuadrado();
        contCuadrado.classList.remove('mostrar');
        
    }
    

});
btnOcultarCirculo.addEventListener('click', (e) => {
    e.preventDefault();
    const radioInput = document.getElementById("radio").value;
    if (radioInput===''|| isNaN(radioInput)){
        alert("Ingrese un valor adecuado");
        return false;
    }else{
        contCirculo.classList.remove('mostrar');
        const AreaCir=new Figura(0,0,radioInput);
        AreaCir.AreaCirculo();
        
    }
    

});


btnOcultarTriangulo.addEventListener('click', (e) => {
    e.preventDefault();
    const alturaInput = document.getElementById("altura").value;
    const baseInput = document.getElementById("base").value;
    if (baseInput===''|| isNaN(baseInput) ||alturaInput==='' || isNaN(alturaInput)){
        alert("Ingrese un valor adecuado");
        return false;
    }else{
        contTriangulo.classList.remove('mostrar');
        const AreaTrian= new Figura(baseInput,alturaInput,0);
        AreaTrian.AreaTriangulo();
        
        
    }
    

});

btnOcultarRectangulo.addEventListener('click', (e) => {
    e.preventDefault();
    const alturaInput = document.getElementById("alturaR").value;
    const baseInput = document.getElementById("baseR").value;
    if (baseInput===''|| isNaN(baseInput) ||alturaInput==='' || isNaN(alturaInput)){
        alert("Ingrese un valor adecuado");
        return false;
    }else{
        contRectangulo.classList.remove('mostrar');
        const AreaRect= new Figura(baseInput,alturaInput,0);
        AreaRect.AreaRectangulo();
        
        
    }
    
    

});