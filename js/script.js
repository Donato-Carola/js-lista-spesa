//!Consegna:
//Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) 
//gli elementi della lista individualmente con un ciclo while.


const elementDiv = document.createElement('div');
const body=document.querySelector('body');
body.appendChild(elementDiv);

const h1 = document.createElement('h1');
elementDiv.appendChild(h1);

const callH1 = document.querySelector('h1');

const listaSpesa= [' 100kg bistecche', ' 100 birre', ' 100g di sale', '50 arance', '50kg riso', '50kg di kiwi'];

const prodotto = [];

let i = 0;

while(i<listaSpesa.length){
  
   prodotto.push (listaSpesa[i]);
   console.log(i,prodotto);
   i++
   

    
    
}

//console.log(i,prodotto)
callH1.innerHTML=`${prodotto}`;