//const url = '../json/list.json';  // Tal vez esto no sea necesario
import {start,arr,val} from './select.js';
import {fondo} from './frame.js';

const body = document.querySelector('body');
const jugador = document.querySelector('.jugador');
const frac = document.createDocumentFragment();

const fondoNivel = [
                'assets/picture/dibujo1.png',
                'assets/picture/dibujo2.png',
                'assets/picture/dibujo3.png',
                'assets/picture/dibujo4.png',
                'assets/picture/dibujo5.png',
                'assets/picture/dibujo6.png',
                'assets/picture/dibujo7.png',
                'assets/picture/dibujo8.png'
                    ]
const piezas = [
            'assets/picture/p1x',
            'assets/picture/p2x',
            'assets/picture/p3x',
            'assets/picture/p4x',
            'assets/picture/p5x',
            'assets/picture/p6x',
            'assets/picture/p7x',
            'assets/picture/p8x'
            ]

//primero validar si existe un usuario (localsession) 
if(sessionStorage.getItem("nombre")){

    //si existe usuario, imprimimos el nombre en el html
    jugador.textContent = JSON.parse(sessionStorage.getItem("nombre"));
    //llamamos funcion para configurar nivel según registro
    cargarJuego(JSON.parse(sessionStorage.getItem("nivel")));

}else{

    //creamos los elementos de login para la sesion
    const div = document.createElement('div');
    const p = document.createElement('p');
    const input = document.createElement('input');
    const button = document.createElement('button');
    
    div.setAttribute('class','login');
    p.textContent = 'Primero debes ingresar un nombre de jugador y cliquear en Comenzar. Una vez dentro,'
                    +' en "fichas", tendrás que cliquear en una de las fichas y luego dirigirte al lado '
                    +'Derecho, en "Tablero", y deberas cliquear en alguna casilla. Si coincide, esta casilla se abrirá'
                    +' destapando la imagen del puzzle.'  
    input.setAttribute('id','nombre');
    input.placeholder='Nombre';
    input.required=true;
    button.setAttribute('id','btn');
    button.textContent = 'Comenzar';

    div.appendChild(p);
    div.appendChild(input);
    div.appendChild(button);
    frac.appendChild(div);

    body.appendChild(frac);

    //llamamos la funcion crear sesion
    crearSesion(div);
}

function crearSesion(d){
    const nombre = document.querySelector('#nombre');    
    const btn = document.querySelector('#btn');

    btn.addEventListener('click',()=>{      

        if(document.querySelector('#nombre').value){
            
           //guardamos el nombre del jugador y el primer nivel en sessionStorage
            sessionStorage.setItem("nombre",JSON.stringify(nombre.value));
            sessionStorage.setItem("nivel",JSON.stringify(1));

            //setear el nombre del jugador en el html
            jugador.textContent = JSON.parse(sessionStorage.getItem("nombre"));

            //eliminamos el div que contiene los elementos de login
            body.removeChild(d);

            //cargamos juego con primer nivel
            cargarJuego(JSON.parse(sessionStorage.getItem("nivel"))); 
        }else{
            alert('Debe ingresar un nombre de jugador');
        }
    })
}


function cargarJuego(n){

    let ram = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    let r = ram.sort(()=> Math.random() -0.5)

    let nro = (n - 1);
    fondo(fondoNivel[nro]);

    //primero cargamos el valor del input   
    for(let i=0; i<32; i++){
        let numero = r[i];
        val[i].setAttribute("value",numero);
        arr[i].style.backgroundImage='url('+String(piezas[nro])+String(numero)+'.png)';
    }
    
    start(); 
}