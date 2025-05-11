function removeNewline(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        let  semLine = array[i].replace('\n', '')
        

      newArray.push(semLine);
    }
    return newArray;
  }

async function cotacoes(values){

    const newArray = []
let tabeleArray = values
    for (const key in tabeleArray) {

        let   stringArray = JSON.stringify(tabeleArray[key].data)
          if( stringArray != undefined){
              if(stringArray != null || tabeleArray[key].data != " "){
                  
                  
                  newArray.push(tabeleArray[key].data)
              }
          
      }
      }


      const arraySemNewline = await removeNewline(newArray);
      let { day, day2, day3, day4} =await  diaSemanas()
      const semana = {
        day: {
            day,
            price: arraySemNewline[0],
        },
        day2: {
            day2,
            price: arraySemNewline[1]},
        day3: {
            day3,
            price: arraySemNewline[2]},
        day4:{ day4, price: arraySemNewline[3]},
         
      }



      return semana;

}

async function diaSemanas() {
    let Hoje = new Date()
    Hoje = Hoje.getDay()


    let day, day2, day3, day4, day5, day6, day7
      if(Hoje == 1){
          day = "Segunda-feira";
          day2 = "Domingo";
          day3 = "Sabado";
          day4 = "Sexta-feira"
      }
      if(Hoje == 2){
          day = "Terça-feira";
          day2 = "Segunda-feira";
          day3 = "Domingo";
          day4 = "Sabado"
      }
      if(Hoje == 3){
          day = "Quarta-feira";
          day2 = "Terça-feira";
          day3 = "Segunda-feira";
          day4 = "Domingo"
      }
      if(Hoje == 4){
          day = "Quinta-feira";
          day2 = "Quarta-feira";
          day3 = "Terça-feira";
          day4 = "Segunda-feira"
      }
      if(Hoje == 5){
          day = "Sexta-feira";
          day2 = "Quinta-feira";
          day3 = "Quarta-feira";
          day4 = "Terça-feira"
      }
      if(Hoje == 6){
          day = "Sabado";
          day2 = "Sexta-feira";
          day3 = "Quinta-feira";
          day4 = "Quarta-feira"
      }
      if(Hoje == 7|| Hoje == 0){
          day = "Domingo";
          day2 = "Sabado";
          day3 = "Sexta-feira";
          day4 = "Quinta-feira"
      }
  return {
    day, day2, day3, day4, day5, day6, day7
  }
}


export default {
    cotacoes

}