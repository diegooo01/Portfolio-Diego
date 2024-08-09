<script>
export default {
  name:"footer-content",
}
</script>

<template>

  <footer>
    <p>Diseño realizado en Figma y desarrollo propio usando Vue.Js. Todos los derechos reservados. © Diego Criollo</p>
    <div class="social-media">
      <a href="https://www.linkedin.com/in/diego-criollo-7b1b3b1b1/" target="_blank" rel="noopener noreferrer">
        <img src="/public/social-media-icons/linkedin-icon.png" alt="Linkedin icon" width="50">
      </a>
      <a href="https://github.com/diegooo01" target="_blank">
        <img src="/public/social-media-icons/github-icon.png" alt="Github logo" width="50">
      </a>
    </div>
    <p>Contacto: criollodiego542@gmail.com</p>
  </footer>

</template>

<style scoped>

footer{
  background-color: #1f3139;
  color: #fff;
  text-align: center;
  padding: 2rem 3rem;
}

footer p{
  font-family: "PT Sans Caption", sans-serif
}

.social-media{
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

</style>