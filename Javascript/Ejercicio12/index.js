function Fibonacci(num) {
    var n1 = 0
    var n2 = 1
    let arr = [n1, n2]

    if (num <= 0) {
        return console.log("El número debe ser positivo")
    } else if (num === 1) {
        return arr[0]
    } else if (num === 2){
        return arr
    } else {
        while (arr.length < num) {
            //actualizar valores
            let suma = n1 + n2
            n1 = n2
            n2 = suma
            //actualizar array
            arr.push(suma)

            if (arr.length === num) {
                return arr
            }
        }
        
        
    }
}

console.log(Fibonacci(13))