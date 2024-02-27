function Calculo(x,y){
	if(y == 0){
		return x}
	return Calculo(y, x % y)}
n = 24
m = 12

console.log(Calculo(n,m))

a = 168
b = 134

console.log(Calculo(a,b))
	
