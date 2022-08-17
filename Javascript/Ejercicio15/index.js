let nombre = "Toni";
let apellido = "García";
let yo = {
    nombre,
    apellido
};
let hoy = new Date();

//Sesion storage
sessionStorage.setItem("persona", JSON.stringify(yo));

//Local storage
localStorage.setItem("persona", JSON.stringify(yo));

//Cookies
document.cookie = `hoy=${JSON.stringify(hoy)};expires=${new Date(hoy.getTime() + 2 * 60000)}`;