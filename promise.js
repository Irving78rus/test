function hamming(string) {
  const aSplit = string.split(" ");
  
 const a =   aSplit.map(item=>{
 
    const itemArr = item.split("") 
 
    const wei =itemArr.reduce((accumulator,value)=>Number(accumulator)+Number(value)) 
    return {
        [item]:wei
    }
    
    })
const res =[]
        for (let i = 0; i < a.length; i++) {
            let min = Object.values(a[i])
            let minobj={}
            for (let j = 0; j < a.length; j++) {
              if(min>Object.values(a[j])){
                min = Object.values(a[j])
                minobj = a[j]
              }
              
            }
            res.push(minobj)
        }



        console.log(res)
    return a
}

console.log(hamming("56 65 74 100 99 68 86 180 90"));
 //"100 180 90 56 65 74 68 86 99"
