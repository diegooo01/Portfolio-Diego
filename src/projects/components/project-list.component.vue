<script>

export default {
  name: 'project-list',
}
</script>

<template>
  <div class="project-list">
    <h2>Estas son los <span class="green-marker">proyectos académicos y personales</span>  que he realizado en los últimos años. Gran parte de estos proyectos fueron realizados con los conocimientos que fui adquiriendo a lo largo de la carrera hasta el día de hoy, <span class="green-marker">enseñanzas y métodologías</span>  que sigo perfeccionando.</h2>
    <div class="projects">
      <div class="group-project">
        <div class="image-hover">
          <img src="/public/projects-logos/cambiazo-vue.png" alt="Cambiazo Vue">
          <a href="https://cambiazzo.netlify.app/" target="_blank">Página web</a>
          <a href="https://github.com/TechZo-Organization/Fronted" target="_blank">Código</a>
        </div>
        <p>Aplicativo web que permite el intercambio de bienes entre los usuarios y la posibilidad de informarse sobre organizaciones certificadas para realizar intercambios. Este proyecto fue desarrollado usando <span class="green-marker">Vue.Js + Javascript</span>  para el Frontend y <span class="green-marker">C# + .NET</span>  para el Backend.</p>
      </div>
      <div class="group-project">
        <div class="image-hover">
          <img src="/public/projects-logos/cambiazo-angular.png" alt="Cambiazo Angular">
          <a href="https://cambiazoo-techzo.netlify.app/" target="_blank">Página web</a>
          <a href="https://github.com/TechZoOrganization-OpenSource/CambiaZo-Frontend" target="_blank">Código</a>
        </div>
        <p>Aplicativo web que permite el intercambio de bienes entre los usuarios y la posibilidad de informarse sobre organizaciones certificadas para realizar intercambios. Este proyecto fue desarrollado usando <span class="green-marker">Angular + Typescript</span>  para el Frontend y <span class="green-marker">Java + Springboot</span>  para el Backend.</p>
      </div>
      <div class="group-project">
        <div class="image-hover">
          <img src="/public/projects-logos/findu-angular.png" alt="FindU Angular">
          <a href="https://findu-techzo.netlify.app/login" target="_blank">Página web</a>
          <a href="https://github.com/diegooo01/FindU" target="_blank">Código</a>
        </div>

        <p>Aplicativo web que permite que estudiantes universitarios puedan chatear juntos y establecer conexiones. Este proyecto empleo en gran medida el uso de máquinas virtuales para alojar la capa de aplicación y de datos. Además de ello usamos <span class="green-marker">Docker</span>  para los contenedores, <span class="green-marker">MongoDB</span>  para la Base de Datos, <span class="green-marker">Python</span>  para el Backend y <span class="green-marker">Angular</span>  para el Frontend.</p>
      </div>
      <div class="group-project">
        <div class="image-hover">
          <img src="/public/projects-logos/snake.io-js.png" alt="Snake.io Js">
          <a href="https://diegooo01.github.io/Snake/Snake/" target="_blank">Página web</a>
          <a href="https://github.com/diegooo01/Snake" target="_blank">Código</a>
        </div>
        <p>Proyecto personal y aplicativo web que permite a los usuarios jugar el clásico videojuego Snake con pequeñas funcionalidades extra. Este juego hace uso netamente de <span class="green-marker">Javascript</span>  puro, por lo cual se empleó mucha lógica de programación y funcionalidades propias del lenguaje.</p>
      </div>
      <div class="group-project">
        <div class="image-hover">
          <img src="/public/projects-logos/pong.io-js.png" alt="Pong.io Js">
          <a href="https://diegooo01.github.io/Pong/Pong/" target="_blank">Página web</a>
          <a href="https://github.com/diegooo01/Pong" target="_blank">Código</a>
        </div>
        <p>Proyecto personal y aplicativo web que permite a usuarios jugar de manera multijugador local el juego Pong. El desarrollo de esta versión del clásico videojuego fue hecho usando solo <span class="green-marker">Javascript</span> , por lo que hace uso de todo el potencial que posee este lenguaje.</p>
      </div>
      <div class="group-project">
        <div class="image-hover">
          <img src="/public/projects-logos/aliens-vs-ambulances-cpp.png" alt="Aliens vs. Ambulances Cpp">
          <a href="https://github.com/diegooo01/Aliens-vs.-Ambulances/tree/main" target="_blank">Código</a>
        </div>
        <p>Videojuego creado usando <span class="green-marker">C++</span> y las herramientas de <span class="green-marker">Visual Studio 2019</span>  que se basa en un carro de ambulancia que tiene la finalidad de conseguir medicamentos que aparecen en el mapa y al obtener todas dirigirse a la base de este mismo. Cuenta con dos dificultades y enemigos que le dan la complejidad al juego, se hace mucho uso de los conceptos de <span class="green-marker">programación orientada a objetos</span> .</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

.green-marker{
  color:#2DB99A;
  font-family: "PT Sans Caption", sans-serif;
}

.project-list{
  color: #fff;
}

.project-list h2{
  font-family: "PT Sans Caption", sans-serif;
  padding-bottom: 4.5rem;
  font-size: 20px;
}

.project-list p{
  font-family: "PT Sans Caption", sans-serif;
  text-align: justify;
  font-weight: bold;
}

.projects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-content: center;
}

.group-project {
  width: 100%;
  padding-bottom: 2rem;
}

.group-project p{
  padding-top: 1rem;
}

.image-hover {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.image-hover img {
  width: 100%;
  height: 40vh;
  object-fit: cover;
  transition: opacity 0.3s ease;
}

.image-hover a {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  width: 100px;
  text-align: center;
}

.image-hover a:nth-child(2) {
  top: 35%;
}

.image-hover a:nth-child(3) {
  top: 55%;
}

.image-hover:hover img {
  opacity: 0.45;
}

.image-hover:hover a {
  opacity: 1;
  pointer-events: auto;
}

@media screen and (max-width: 1200px) {
  .projects {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 800px) {
  .projects {
    grid-template-columns: repeat(1, 1fr);
  }

}

@media screen and (max-width: 600px) {
  .project-list h2{
    font-size: 18px;
  }

}

</style>