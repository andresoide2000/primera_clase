function factoriza(x){
	factors = []
	for (let i = 1; i <= x; i++){
		if (x % i == 0)
			factors.push(i)}
	return factors;}

y = factoriza(12)
console.log(y)
