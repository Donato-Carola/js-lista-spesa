//!Consegna:
//Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) 
//gli elementi della lista individualmente con un ciclo while.


const elementDiv = document.createElement('div');
const body=document.querySelector('body');
body.appendChild(elementDiv);

const callDiv = document.querySelector('div')

/*const ul = document.createElement('ul');
elementDiv.appendChild(ul);

const CallLi=document.createElement('li');
ul.appendChild(CallLi)

const callLi = document.querySelector('li');*/

const listaSpesa= [' 100kg bistecche', ' 100 birre', ' 100g di sale', '50 arance', '50kg riso', '50kg di kiwi'];

const prodotto = [];

let i = 0;

while(i<listaSpesa.length){
  
   prodotto.push (listaSpesa[i]);
  
   console.log(i,prodotto);
   i++
   //CallLi.innerHTML=`${prodotto}`;

    
    
}

//console.log(i,prodotto)
callDiv.innerHTML=`${prodotto}`
