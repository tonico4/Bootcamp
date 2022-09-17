function siempreTrue () {
    return true
}

const asin = setTimeout((a => console.log("Hola soy una promesa")), 5000)

function* genIdPar() {
    let id = 0
    while(true) {
        yield id += 2
    }
}

const gen = genIdPar()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value) 
