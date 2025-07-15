const array = [{id: 1}, {id: 2}, {id: 3}];
const elemento = {id: 2};

const encontrado = array.find(item => item.id === elemento.id);
if (encontrado) {
  console.log('Elemento encontrado!');
}