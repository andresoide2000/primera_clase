function bubblesort(datos){
    let n = datos.length;
    for(let i = 1; i < n; i++){
        let flag = false;
        for (let j = 0; j < n - i; j++){
            if (datos[j+1] < datos[j]){
                let aux = datos[j+1];
                datos[j+1] = datos[j];
                datos[j] = aux;
                flag = true;}

        }

    if(!flag) break;
    }
    return datos
}
function medianaModa(x){
	let b = bubblesort(x)	
	ans = {"mediana" : null , "moda" : null}
	if(b.length % 2 == 0){
		ans["mediana"] = (b[b.length/2] + b[(b.length/2)-1])/2
	}
	else if(b.length % 2 != 0){
		ans["mediana"] = b[(b.length-1)/2]
	}
	let frecuencia = {}
	b.forEach((y) =>{
		frecuencia[y] = (frecuencia[y] || 0) + 1})
	let max = null
	let maxval = 0

	for(let i in frecuencia){
		if(frecuencia[i] > maxval){
			maxval = frecuencia[i]
			max = i
		}
	}
	ans["moda"] = max
	return ans
}

let arr = [5,1,3,8,9,10,20,4,4,4,5,10]

console.log(medianaModa(arr))
