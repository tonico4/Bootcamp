const yo = {
    nombre: "Toni",
    apellido: "García",
    edad: 28,
    altura: 174,
    eresDesarrollador: true
}

let edad = yo.edad

const misDatos = [
    {...yo},
    amigo1 = {
        nombre: "Álvaro",
        apellido: "Aguilar",
        edad: 28,
        altura: 182,
        eresDesarrollador: false
    },
    amigo2 = {
        nombre: "Alejandro",
        apellido: "Rodríguez",
        edad: 27,
        altura: 178,
        eresDesarrollador: false
    }
]

const orden = misDatos.sort((a, b) => b.edad - a.edad)

console.log(orden)