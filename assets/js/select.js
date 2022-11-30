import { comparar } from "./frame.js";

//cards for select
const s1x1 = document.querySelector('.s1x1');   const s1 = document.querySelector('.s1');
const s1x2 = document.querySelector('.s1x2');   const s2 = document.querySelector('.s2');
const s1x3 = document.querySelector('.s1x3');   const s3 = document.querySelector('.s3');
const s1x4 = document.querySelector('.s1x4');   const s4 = document.querySelector('.s4');

const s2x1 = document.querySelector('.s2x1');   const s5 = document.querySelector('.s5');
const s2x2 = document.querySelector('.s2x2');   const s6 = document.querySelector('.s6');
const s2x3 = document.querySelector('.s2x3');   const s7 = document.querySelector('.s7');
const s2x4 = document.querySelector('.s2x4');   const s8 = document.querySelector('.s8');

const s3x1 = document.querySelector('.s3x1');   const s9 = document.querySelector('.s9');
const s3x2 = document.querySelector('.s3x2');   const s10 = document.querySelector('.s10');
const s3x3 = document.querySelector('.s3x3');   const s11 = document.querySelector('.s11');
const s3x4 = document.querySelector('.s3x4');   const s12 = document.querySelector('.s12');

const s4x1 = document.querySelector('.s4x1');   const s13 = document.querySelector('.s13');
const s4x2 = document.querySelector('.s4x2');   const s14 = document.querySelector('.s14');
const s4x3 = document.querySelector('.s4x3');   const s15 = document.querySelector('.s15');
const s4x4 = document.querySelector('.s4x4');   const s16 = document.querySelector('.s16');

const s5x1 = document.querySelector('.s5x1');   const s17 = document.querySelector('.s17');
const s5x2 = document.querySelector('.s5x2');   const s18 = document.querySelector('.s18');
const s5x3 = document.querySelector('.s5x3');   const s19 = document.querySelector('.s19');
const s5x4 = document.querySelector('.s5x4');   const s20 = document.querySelector('.s20');

const s6x1 = document.querySelector('.s6x1');   const s21 = document.querySelector('.s21');
const s6x2 = document.querySelector('.s6x2');   const s22 = document.querySelector('.s22');
const s6x3 = document.querySelector('.s6x3');   const s23 = document.querySelector('.s23');
const s6x4 = document.querySelector('.s6x4');   const s24 = document.querySelector('.s24');

const s7x1 = document.querySelector('.s7x1');   const s25 = document.querySelector('.s25');
const s7x2 = document.querySelector('.s7x2');   const s26 = document.querySelector('.s26');
const s7x3 = document.querySelector('.s7x3');   const s27 = document.querySelector('.s27');
const s7x4 = document.querySelector('.s7x4');   const s28 = document.querySelector('.s28');

const s8x1 = document.querySelector('.s8x1');   const s29 = document.querySelector('.s29');
const s8x2 = document.querySelector('.s8x2');   const s30 = document.querySelector('.s30');
const s8x3 = document.querySelector('.s8x3');   const s31 = document.querySelector('.s31');
const s8x4 = document.querySelector('.s8x4');   const s32 = document.querySelector('.s32');

//exportamos los arreglos en main.js para asignar una imagen y valor.
export const arr = [s1x1,s1x2,s1x3,s1x4,
                    s2x1,s2x2,s2x3,s2x4,
                    s3x1,s3x2,s3x3,s3x4,
                    s4x1,s4x2,s4x3,s4x4,
                    s5x1,s5x2,s5x3,s5x4,
                    s6x1,s6x2,s6x3,s6x4,
                    s7x1,s7x2,s7x3,s7x4,
                    s8x1,s8x2,s8x3,s8x4]
export const val = [s1,s2,s3,s4,
                    s5,s6,s7,s8,
                    s9,s10,s11,s12,
                    s13,s14,s15,s16,
                    s17,s18,s19,s20,
                    s21,s22,s23,s24,
                    s25,s26,s27,s28,
                    s29,s30,s31,s32]
                    
export function start(){   

    s1x1.addEventListener('click',()=>{
        preparar(s1x1,s1);        
    })
    s1x2.addEventListener('click',()=>{  
        preparar(s1x2,s2);    
    })
    s1x3.addEventListener('click',()=>{         
        preparar(s1x3,s3);     
    })
    s1x4.addEventListener('click',()=>{ 
        preparar(s1x4,s4);      
    })

    s2x1.addEventListener('click',()=>{
        preparar(s2x1,s5);        
    })
    s2x2.addEventListener('click',()=>{  
        preparar(s2x2,s6);    
    })
    s2x3.addEventListener('click',()=>{         
        preparar(s2x3,s7);     
    })
    s2x4.addEventListener('click',()=>{ 
        preparar(s2x4,s8);      
    })

    s3x1.addEventListener('click',()=>{
        preparar(s3x1,s9);        
    })
    s3x2.addEventListener('click',()=>{  
        preparar(s3x2,s10);    
    })
    s3x3.addEventListener('click',()=>{         
        preparar(s3x3,s11);     
    })
    s3x4.addEventListener('click',()=>{ 
        preparar(s3x4,s12);      
    })

    s4x1.addEventListener('click',()=>{
        preparar(s4x1,s13);        
    })
    s4x2.addEventListener('click',()=>{  
        preparar(s4x2,s14);    
    })
    s4x3.addEventListener('click',()=>{         
        preparar(s4x3,s15);     
    })
    s4x4.addEventListener('click',()=>{ 
        preparar(s4x4,s16);      
    })

    s5x1.addEventListener('click',()=>{
        preparar(s5x1,s17);        
    })
    s5x2.addEventListener('click',()=>{  
        preparar(s5x2,s18);    
    })
    s5x3.addEventListener('click',()=>{         
        preparar(s5x3,s19);     
    })
    s5x4.addEventListener('click',()=>{ 
        preparar(s5x4,s20);      
    })

    s6x1.addEventListener('click',()=>{
        preparar(s6x1,s21);        
    })
    s6x2.addEventListener('click',()=>{  
        preparar(s6x2,s22);    
    })
    s6x3.addEventListener('click',()=>{         
        preparar(s6x3,s23);     
    })
    s6x4.addEventListener('click',()=>{ 
        preparar(s6x4,s24);      
    })

    s7x1.addEventListener('click',()=>{
        preparar(s7x1,s25);        
    })
    s7x2.addEventListener('click',()=>{  
        preparar(s7x2,s26);    
    })
    s7x3.addEventListener('click',()=>{         
        preparar(s7x3,s27);     
    })
    s7x4.addEventListener('click',()=>{ 
        preparar(s7x4,s28);      
    })

    s8x1.addEventListener('click',()=>{
        preparar(s8x1,s29);        
    })
    s8x2.addEventListener('click',()=>{  
        preparar(s8x2,s30);    
    })
    s8x3.addEventListener('click',()=>{         
        preparar(s8x3,s31);     
    })
    s8x4.addEventListener('click',()=>{ 
        preparar(s8x4,s32);      
    })
    //********************************************** */

    function preparar(f,n){
        f.style.outline='4px solid red';
        let valSelect = (Number(n.value) + 1);
        // console.log(valSelect)
        comparar(valSelect,f,n);
    }
    
}