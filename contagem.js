let numeroAlunos = 10;

for(let contador = 0; contador < numeroAlunos; contador++){

    if(contador == 0){
        console.log('o numero é zero')
    }

   
   else if(contador % 2 == 0){
       console.log('O numero ' + contador  + ' é par')
   } else if (contador % 2 == 1) {
       console.log(`o numero ${contador} é impar`)
   }
}
