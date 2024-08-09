<script>
export default {
  name: 'home-content',
}

</script>

<template>
  <div class="home-content">
    <div class="home-text-content">
      <div class="home-text">
        <h1>¡Hola, Soy <br> Diego <span class="green-marker">Criollo</span>!</h1>
        <p>Actualmente me encuentro finalizando el 3er año de la carrera de <span class="green-marker">Ingeniería de Software</span>  en la Universidad Peruana de Ciencias Aplicadas (UPC). </p>
        <p>Tengo un gran interés en especializarme como <span class="green-marker">FullStack Developer</span>   y adquirir mayor experiencia.</p>
        <div class="home-media">
          <a href="https://github.com/diegooo01" target="_blank">
            <img src="/public/social-media-icons/github-icon.png" alt="Github logo" width="50">
          </a>
          <a href="https://www.linkedin.com/in/diego-criollo-de-la-cruz-680830258/details/education/" target="_blank">
            <img src="/public/social-media-icons/linkedin-icon.png" alt="Linkedin logo" width="50">
          </a>
        </div>
      </div>
    </div>
    <div class="home-image">
      <img src="/public/main-photo/main-picture.png" alt="Main picture" class="main-img">
    </div>
  </div>

</template>

<style scoped>

.green-marker{
  color:#2DB99A;
}

.home-content{
  background-color: #2E424B;
  display: flex;
  padding: 6rem 3rem 4.5rem 3rem;
}

.home-text-content{
  width: 50%;
  padding: 3rem;
  padding-left: 5rem;
  align-content: center;
}

.home-text h1{
  color: #fff;
  font-size: 65px;
}

.home-text p{
  color: #fff;
  font-family: "PT Sans Caption", sans-serif;
  font-size: 16px;
  width: 80%;
  margin-top: 1rem;
}

.home-media{
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
}

.home-image {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.main-img {
  width: 85%;
}

@media screen and (max-width: 850px) {
  .home-content{
    display: grid;
  }

  .home-text-content{
    width: 100%;
    padding: 0rem 0rem 2rem 0rem;
  }

  .home-text p{
    width: 90%;
  }

  .home-image{
    width: 100%;
  }

  .main-img{
    width: 65%;
  }
}

</style>