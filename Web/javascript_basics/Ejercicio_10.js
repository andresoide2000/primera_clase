function checkPalindromo(x){
	y = ""
	for(let i = x.length; i > -1; i--)
		y += x.charAt(i)
	if(x ==  y)
		return true
	else
		return false
}
pal = "oso"
console.log(checkPalindromo(pal))
cal = "Arbol"
console.log(checkPalindromo(cal))

