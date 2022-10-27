let c = console.log
let $contenedor = document.getElementById("contenedor")
let fragmento = document.createDocumentFragment()
let url = "https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories"

 function axiosCursosLarnU(){
  axios
    .get(url)
    .then((response) => {
      let json = response.data.communityCategories
      c(json)
      json.forEach((e) => {
        $contenedor.innerHTML += `
        <div class="contenedor__tarjetas">
          <div class="contenedor__icono">
            <img src="${e.icon}">
          </div>
          <div class="texto__contenido">
            <h2 class="contenedor__name">${e.name}</h2>
            <p class="contenedor__totalQ">TotalQuizzes: ${e.totalQuizzes}</p>
            <p class="contenedor__user">Users: ${e.users}</p>
            <a href="https://es.larnu.com/" target="_blank" noopener class="contenedor__link">Go to LarnU</a>
          </div>
        </div>
        `
    })
      })
  .catch ((err) => {
    let mensaje = err.response.statusText ||  "Ocurrió un error"
    $listacursos.innerHTML = `Error ${err.response.status}: ${mensaje}`
  })
 }

 axiosCursosLarnU()

