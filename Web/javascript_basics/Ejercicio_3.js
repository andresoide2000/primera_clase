function oldList(x){
	let clean = []
       	for(let i = x.length - 1; i > -1; i--)
		clean.push(x[i])
	for(let j = 0; j < clean.length; j++)
		x[j] = clean[j]
	return x
}

function newList(x){
	let clean = []
       	for(let i = x.length - 1; i > -1; i--)
		clean.push(x[i])
	return clean
}

let a = [1,2,3,4,5,6,7]
let b = [8,9,10,11,12,13,14]
console.log(oldList(a))
console.log(newList(b))

		
