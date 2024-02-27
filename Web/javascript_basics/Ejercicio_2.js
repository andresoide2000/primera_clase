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
}

let x = [4,6,7,1,8,9,10];
bubblesort(x);
console.log(x);
