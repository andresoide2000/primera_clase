let x = [1,0,1,1,0,0]

function quitaDuplicados(arr){
	let clean = []
	for(let i = 0; i < arr.length; i++){
		if(!clean.includes(arr[i]))
			{clean.push(arr[i])}}
	return clean;}
y = quitaDuplicados(x);
console.log(y)
			
