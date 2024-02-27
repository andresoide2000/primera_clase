
function powerOfTwo(x){
	if (x / 2 == 1)
		return true
	else if (x / 2 != 1 && x % 2 != 0)
		return false
	else if (x / 2 != 1 && x % 2 == 0)
		return powerOfTwo(x/2) 
}

console.log(powerOfTwo(24))
console.log(powerOfTwo(64))

