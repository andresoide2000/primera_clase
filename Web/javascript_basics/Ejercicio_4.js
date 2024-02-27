function capitalize(str){
	clean = ""
	for(let i = 0; i < str.length; i++){
		if(i == 0){
			clean += str[i].toUpperCase()
		}
		else if (str[i] == " "){
			clean += str[i] + str[i+1].toUpperCase()
			i++
		}
		else{
			clean += str[i]
		}
	}
	return clean
}
let x = "string de prueba"
let y = "me llamo andres"
console.log(capitalize(x))
console.log(capitalize(y))

