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
          day = "Segunda";
          day2 = "domingo";
          day3 = "Sabado";
          day4 = "sexta"
      }
      if(Hoje == 2){
          day = "Terca";
          day2 = "Segunda";
          day3 = "Domingo";
          day4 = "Sabado"
      }
      if(Hoje == 3){
          day = "quarta";
          day2 = "terca";
          day3 = "segunda";
          day4 = "domingo"
      }
      if(Hoje == 4){
          day = "quinta";
          day2 = "quarta";
          day3 = "terca";
          day4 = "segunda"
      }
      if(Hoje == 5){
          day = "sexta";
          day2 = "quinta";
          day3 = "quarta";
          day4 = "terca"
      }
      if(Hoje == 6){
          day = "sabado";
          day2 = "sexta";
          day3 = "quinta";
          day4 = "quarta"
      }
      if(Hoje == 7){
          day = "domingo";
          day2 = "sabado";
          day3 = "sexta";
          day4 = "quinta"
      }
  return {
    day, day2, day3, day4, day5, day6, day7
  }
}


export default {
    cotacoes

}