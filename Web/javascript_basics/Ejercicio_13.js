let words = ["Hey", "Hello", "Hola","Coche" , "Hola", "Hey", "Coche", "Hey"]
function mostRepeated(x) {
	let frecuencia = {}

	x.forEach((y) =>{
		frecuencia[y] = (frecuencia[y] || 0) + 1})
	let max = null
	let maxval = 0

	for(let i in frecuencia){
		if(frecuencia[i] > maxval){
			maxval = frecuencia[i]
			max = i
		}
	}
	return max


}	
console.log(mostRepeated(words))
