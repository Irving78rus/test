 function qwe() {
	let summ = 0
	return  function(val){
		return summ+=val
	} 
 } 
 const summator=qwe()
 console.log(summator(1)); // 1
 console.log(summator(5)); // 6
 console.log(summator(3)); // 9