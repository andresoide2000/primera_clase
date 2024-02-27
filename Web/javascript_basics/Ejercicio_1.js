const findFirstNonRepeatingChar = (str) => {
	for(let i = 0; i < str.length; i++){
		if(Object.keys(chars).includes(str[i])){
			chars[str[i]]++;
		}else{
			chars[str[i]] = 1;	
		}
	}
	
	return Object.keys(chars).reduce((result, key) => {
		if(chars[key] === 1){
			result[key] = chars[key];
		}
		return result;
	}, {});
}

let str = 'abacddbec';
let chars = {};

console.log(findFirstNonRepeatingChar(str));
