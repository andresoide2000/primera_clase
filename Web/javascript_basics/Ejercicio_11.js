words = ["Omega", "Manuel", "Coche", "Casas", "Hermano"]

function alphabetSort(x)  {
	let clean = []
	for(let i = 0; i < words.length - 1; i++)  {
		let minimo = i;
		for(j = i + 1; j < words.length; j++){
			if(x[j] < x[minimo])
				minimo = j
		}
		let aux = x[i];
     		x[i] = x[minimo];
     		x[minimo] = aux;
	}
	return x
}

console.log(alphabetSort(words))



		
