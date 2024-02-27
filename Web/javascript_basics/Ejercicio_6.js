const leet ={b: "8", h:"#", o:"0", l :"1",  a: "4", 
    e: "3", g: "6", i: "1", q: "9",  s: "5", t: "7",
    z: "2", v:"V"
}
function hackerSpeak(str){
	let clean = " "
	for(let i = 0; i < str.length; i++){
		if(str[i] in leet){
			clean += leet[str[i]]
		}
		else{
			clean += str[i]
		}
	}
	return clean
}

x = "Javascript es divertido"

console.log(hackerSpeak(x))
