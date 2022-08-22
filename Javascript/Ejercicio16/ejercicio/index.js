const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const basura = document.querySelector("#papelera")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", evento => {
        parrafo.classList.add("dragging")
        evento.dataTransfer.setData("id", parrafo.id)
    })

    parrafo.addEventListener("dragend", () => {
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", evento => {
        evento.preventDefault()
    })

    seccion.addEventListener("drop", evento => {
        const id_parrafo = evento.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})

basura.addEventListener("dragover", evento => {
    evento.preventDefault()
})

basura.addEventListener("drop", evento => {
    const id_parrafo = evento.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove()
})