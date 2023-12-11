// ELIMINAR Y ACTUALIZAR DATOS DE LocalStorage

//ELIMINAR
//                 llave a eliminar
localStorage.removeItem('nombre')

// ACTUALIZAR EL REGISTRO

//se convierte meses a un arreglo ya que viene como string
const mesesArray = JSON.parse(localStorage.getItem('meses') );
console.log(mesesArray)
//Agregar el elemento al arreglo
mesesArray.push('Nuevo mes')
console.log(mesesArray)
//Reescribir el valor actual
localStorage.setItem('meses', JSON.stringify(mesesArray))


//ELIMINAR TODOS LOS DATOS DE LocalStorage
// localStorage.clear();