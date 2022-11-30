var acertadas = 0;
var clic = 0;

const click = document.querySelector('.click');

const f1x1 = document.querySelector('.f1x1');
const f1x2 = document.querySelector('.f1x2');
const f1x3 = document.querySelector('.f1x3');
const f1x4 = document.querySelector('.f1x4');
const f1x5 = document.querySelector('.f1x5');
const f1x6 = document.querySelector('.f1x6');
const f1x7 = document.querySelector('.f1x7');
const f1x8 = document.querySelector('.f1x8');

const f2x1 = document.querySelector('.f2x1');
const f2x2 = document.querySelector('.f2x2');
const f2x3 = document.querySelector('.f2x3');
const f2x4 = document.querySelector('.f2x4');
const f2x5 = document.querySelector('.f2x5');
const f2x6 = document.querySelector('.f2x6');
const f2x7 = document.querySelector('.f2x7');
const f2x8 = document.querySelector('.f2x8');

const f3x1 = document.querySelector('.f3x1');
const f3x2 = document.querySelector('.f3x2');
const f3x3 = document.querySelector('.f3x3');
const f3x4 = document.querySelector('.f3x4');
const f3x5 = document.querySelector('.f3x5');
const f3x6 = document.querySelector('.f3x6');
const f3x7 = document.querySelector('.f3x7');
const f3x8 = document.querySelector('.f3x8');

const f4x1 = document.querySelector('.f4x1');
const f4x2 = document.querySelector('.f4x2');
const f4x3 = document.querySelector('.f4x3');
const f4x4 = document.querySelector('.f4x4');
const f4x5 = document.querySelector('.f4x5');
const f4x6 = document.querySelector('.f4x6');
const f4x7 = document.querySelector('.f4x7');
const f4x8 = document.querySelector('.f4x8');

/************************************************** */
export function fondo(nombre){
    let fondo = document.querySelector('.juego');
    fondo.style.backgroundImage='url('+nombre+')';    
}

function cliqueo(){
    clic += 1;
    click.textContent = String(clic);
    console.log('cliqueo: '+ String(clic))
}

function modificarInfoTrue(ficha,caja,n){
    ficha.classList.remove('box');
    ficha.classList.add('watch');
    caja.style.backgroundImage='url(assets/picture/vacio.png)';
    caja.style.outline='1px solid #000';

    if(n.value == "n"){
        console.log("valor: " + n.value)        
    }else{
        acertadas += 1;
        n.setAttribute("value","n");
    }

    //Aquí podriamos poner una condicion para cuando complete los 32 puntos nos envie al siguiente nivel o finalicemos.
    acertadas == 32 ? finNivel() : console.log('Acertadas: '+ String(acertadas)) ;    
}

function modificarInfoFalse(cub){
    cub.style.outline='1px solid #000';
}

function finNivel(){
    //resetear datos
    acertadas = 0;
    clic = 0;
    //cambiar nivel
    if(JSON.parse(sessionStorage.getItem("nivel")) == 8){
        finJuego();
    }else{
        let nivel = JSON.parse(sessionStorage.getItem("nivel")) + 1;        
        sessionStorage.setItem("nivel",JSON.stringify(nivel));
        refrescar();
    }
}

function finJuego(){
    //eliminar usuario y nivel, y reiniciar web
    sessionStorage.removeItem("nombre");
    sessionStorage.removeItem("nivel");
    alInicio();

}
function refrescar(){
    location.reload();
}
function alInicio(){    
    swal({
        title: "HAS TERMINADO TODOS LOS NIVELES!! :)",                  
        icon: "success",                    
      }).then(result =>{
        if(result.value){
            location.reload(); 
        }else{location.reload();}
      })
}
/************************************************** */
let dato;
let cubo;
let nro;

export function comparar(d,c,n){ 
    dato = d;
    cubo = c;
    nro = n;
 }  
    //escuchas de cada caja
    f1x1.addEventListener('click',()=>{
        cliqueo();        
        dato == 1 ? modificarInfoTrue(f1x1,cubo,nro) : modificarInfoFalse(cubo);        
    })

    f1x2.addEventListener('click',()=>{
        cliqueo();
        dato == 2 ? modificarInfoTrue(f1x2,cubo,nro) : modificarInfoFalse(cubo);
    })

    f1x3.addEventListener('click',()=>{
        cliqueo();
        dato == 3 ? modificarInfoTrue(f1x3,cubo,nro) : modificarInfoFalse(cubo);          
    })

    f1x4.addEventListener('click',()=>{
        cliqueo();
        dato == 4 ? modificarInfoTrue(f1x4,cubo,nro) : modificarInfoFalse(cubo);  
    })

    f1x5.addEventListener('click',()=>{
        cliqueo();
        dato == 5 ? modificarInfoTrue(f1x5,cubo,nro) : modificarInfoFalse(cubo);  
    })

    f1x6.addEventListener('click',()=>{
        cliqueo();
        dato == 6 ? modificarInfoTrue(f1x6,cubo,nro) : modificarInfoFalse(cubo);  
    })

    f1x7.addEventListener('click',()=>{
        cliqueo();
        dato == 7 ? modificarInfoTrue(f1x7,cubo,nro) : modificarInfoFalse(cubo);  
    })

    f1x8.addEventListener('click',()=>{
        cliqueo();
        dato == 8 ? modificarInfoTrue(f1x8,cubo,nro) : modificarInfoFalse(cubo);  
    })

    f2x1.addEventListener('click',()=>{
        cliqueo();
        dato == 9 ? modificarInfoTrue(f2x1,cubo,nro) : modificarInfoFalse(cubo); 
    })

    f2x2.addEventListener('click',()=>{
        cliqueo();
        dato == 10 ? modificarInfoTrue(f2x2,cubo,nro) : modificarInfoFalse(cubo); 
    })

    f2x3.addEventListener('click',()=>{
        cliqueo();
        dato == 11 ? modificarInfoTrue(f2x3,cubo,nro) : modificarInfoFalse(cubo); 
    })

    f2x4.addEventListener('click',()=>{
        cliqueo();
        dato == 12 ? modificarInfoTrue(f2x4,cubo,nro) : modificarInfoFalse(cubo); 
    })

    f2x5.addEventListener('click',()=>{
        cliqueo();
        dato == 13 ? modificarInfoTrue(f2x5,cubo,nro) : modificarInfoFalse(cubo);
    })

    f2x6.addEventListener('click',()=>{
        cliqueo();
        dato == 14 ? modificarInfoTrue(f2x6,cubo,nro) : modificarInfoFalse(cubo);
    })

    f2x7.addEventListener('click',()=>{
        cliqueo();
        dato == 15 ? modificarInfoTrue(f2x7,cubo,nro) : modificarInfoFalse(cubo);
    })

    f2x8.addEventListener('click',()=>{
        cliqueo();
        dato == 16 ? modificarInfoTrue(f2x8,cubo,nro) : modificarInfoFalse(cubo);
    })

    f3x1.addEventListener('click',()=>{
        cliqueo();
        dato == 17 ? modificarInfoTrue(f3x1,cubo,nro) : modificarInfoFalse(cubo);
    })

    f3x2.addEventListener('click',()=>{
        cliqueo();
        dato == 18 ? modificarInfoTrue(f3x2,cubo,nro) : modificarInfoFalse(cubo);
    })

    f3x3.addEventListener('click',()=>{
        cliqueo();
        dato == 19 ? modificarInfoTrue(f3x3,cubo,nro) : modificarInfoFalse(cubo);
    })

    f3x4.addEventListener('click',()=>{
        cliqueo();
        dato == 20 ? modificarInfoTrue(f3x4,cubo,nro) : modificarInfoFalse(cubo);
    })

    f3x5.addEventListener('click',()=>{
        cliqueo();
        dato == 21 ? modificarInfoTrue(f3x5,cubo,nro) : modificarInfoFalse(cubo);
    })

    f3x6.addEventListener('click',()=>{
        cliqueo();
        dato == 22 ? modificarInfoTrue(f3x6,cubo,nro) : modificarInfoFalse(cubo);
    })

    f3x7.addEventListener('click',()=>{
        cliqueo();
        dato == 23 ? modificarInfoTrue(f3x7,cubo,nro) : modificarInfoFalse(cubo);
    })

    f3x8.addEventListener('click',()=>{
        cliqueo();
        dato == 24 ? modificarInfoTrue(f3x8,cubo,nro) : modificarInfoFalse(cubo);
    })

    f4x1.addEventListener('click',()=>{
        cliqueo();
        dato == 25 ? modificarInfoTrue(f4x1,cubo,nro) : modificarInfoFalse(cubo);
    })

    f4x2.addEventListener('click',()=>{
        cliqueo();
        dato == 26 ? modificarInfoTrue(f4x2,cubo,nro) : modificarInfoFalse(cubo);
    })

    f4x3.addEventListener('click',()=>{
        cliqueo();
        dato == 27 ? modificarInfoTrue(f4x3,cubo,nro) : modificarInfoFalse(cubo);
    })

    f4x4.addEventListener('click',()=>{
        cliqueo();
        dato == 28 ? modificarInfoTrue(f4x4,cubo,nro) : modificarInfoFalse(cubo);
    })

    f4x5.addEventListener('click',()=>{
        cliqueo();
        dato == 29 ? modificarInfoTrue(f4x5,cubo,nro) : modificarInfoFalse(cubo);
    })

    f4x6.addEventListener('click',()=>{
        cliqueo();
        dato == 30 ? modificarInfoTrue(f4x6,cubo,nro) : modificarInfoFalse(cubo);
    })

    f4x7.addEventListener('click',()=>{
        cliqueo();
        dato == 31 ? modificarInfoTrue(f4x7,cubo,nro) : modificarInfoFalse(cubo);
    })

    f4x8.addEventListener('click',()=>{
        cliqueo();
        dato == 32 ? modificarInfoTrue(f4x8,cubo,nro) : modificarInfoFalse(cubo);
    })

