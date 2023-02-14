function greet(name) {
  console.log( "привет -" , name);
}
  greet('lena')

const sumAll = (...all) =>{
  let result = 0
  for(let num of all){
    result+=num
  }
  return result
}
console.log (sumAll(1,2,3,4,5))


