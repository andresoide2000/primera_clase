words = ["Hola","creo","que","yo","soy","cool"]

function lengthCatcher(x){
	let l = x[0].length
	let i = 0
	while(i < x.length)

	{
		if(x[i].length < l){
			l = x[i].length
			i++
		}
		else
			i++
		}
	return l;
	}

y = lengthCatcher(words)
console.log(y)


