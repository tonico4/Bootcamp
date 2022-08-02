// Lista de compra
const listaCompra = ["fruta", "champú", "pan", "huevos", "verduras"]

listaCompra.push("Aceite de girasol")

console.log(listaCompra)

listaCompra.pop()

console.log(listaCompra)

// Películas favoritas
const pelis = [
    {title: "The Lord of the Rings", director: "Ian McKellen", date: 2001},
    {title: "Expediente Warren The Conjuring", director: "Michael Chaves", date: 2021},
    {title: "Fast and Furious Tokyo Race", director: "Neal H. Moritz", date: 2006}
]

const pelisNuevas = pelis.filter(peli => peli.date >= 2010)

console.log(pelisNuevas)

const diretores = pelis.map(peli => peli.director)

console.log(diretores)

const titulos = pelis.map(peli => peli.title)

console.log(titulos)

const directorTitulo = diretores.concat(titulos)

console.log(directorTitulo)

const directorTitulo2 = [...diretores,...titulos]

console.log(directorTitulo2)