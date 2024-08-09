<script>

export default {
  name: 'technologies-content',
}
</script>

<template>

  <div class="technologies-icons">
    <h2>Estas son algunas de las <span class="green-marker">tecnologías y metodologías</span>  de trabajo que empleo para darle vida a mis proyectos.</h2>
    <div class="technologies">
      <div class="group-icon">
        <img src="/public/technologies-icons/html5-icon.png" alt="Html 5 icon" width="80">
        <h2>HTML5</h2>
      </div>
      <div class="group-icon">
        <img src="/public/technologies-icons/css3-icon.png" alt="Css 3 icon" width="80">
        <h2>CSS3</h2>
      </div>
      <div class="group-icon">
        <img src="/public/technologies-icons/javascript-icon.png" alt="Javascript icon" width="80">
        <h2>Javascript</h2>
      </div>
      <div class="group-icon">
        <img src="/public/technologies-icons/typescript-icon.png" alt="Typescript icon" width="80">
        <h2>Typescript</h2>
      </div>
      <div class="group-icon">
        <img src="/public/technologies-icons/angular-icon.png" alt="Angular icon" width="75">
        <h2>Angular</h2>
      </div>
      <div class="group-icon">
        <img src="/public/technologies-icons/vuejs-icon.png" alt="Vue icon" width="93">
        <h2>Vue.Js</h2>
      </div>
      <div class="group-icon">
        <img src="/public/technologies-icons/python-icon.png" alt="Python icon" width="91">
        <h2>Python</h2>
      </div>
      <div class="group-icon">
        <img src="/public/technologies-icons/csharp-icon.png" alt="C# icon" width="91">
        <h2>C#</h2>
      </div>
      <div class="group-icon">
        <img src="/public/technologies-icons/cpp-icon.png" alt="C++ icon" width="80">
        <h2>C++</h2>
      </div>
      <div class="group-icon">
        <img src="/public/technologies-icons/java-icon.png" alt="Java icon" width="91">
        <h2>Java</h2>
      </div>
      <div class="group-icon">
        <img src="/public/technologies-icons/mssql-icon.png" alt="MSSQL icon" width="91">
        <h2>MSSQL</h2>
      </div>
      <div class="group-icon">
        <img src="/public/technologies-icons/mysql-icon.png" alt="MySQL icon" width="91">
        <h2>MySQL</h2>
      </div>
      <div class="group-icon">
        <img src="/public/technologies-icons/nosql-icon.png" alt="MongoDB icon" width="91">
        <h2>MongoDB</h2>
      </div>
      <div class="group-icon">
        <img src="/public/technologies-icons/scrum-icon.png" alt="Scrum icon" width="91">
        <h2>Scrum</h2>
      </div>
      <div class="group-icon">
        <img src="/public/technologies-icons/figma-icon.png" alt="Figma icon" width="91">
        <h2>Figma</h2>
      </div>
      <div class="group-icon">
        <img src="/public/technologies-icons/azure-icon.png" alt="Azure icon" width="91">
        <h2>Azure</h2>
      </div>
      <div class="group-icon">
        <img src="/public/technologies-icons/git-icon.png" alt="Git icon" width="91">
        <h2>Git</h2>
      </div>
      <div class="group-icon">
        <img src="/public/technologies-icons/office-icon.png" alt="Office icon" width="91">
        <h2>Office</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>

.green-marker{
  color:#2DB99A;
  font-family: "PT Sans Caption", sans-serif;
}

.technologies-icons{
  color: #fff;
}

.technologies-icons h2{
  font-family: "PT Sans Caption", sans-serif;
  padding-bottom: 4.5rem;
  font-size: 20px;
}

.group-icon{
  text-align: center;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.group-icon:hover{
  transform: scale(1.1);
}

.technologies{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 1200px) {
  .technologies {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media screen and (max-width: 900px) {
  .technologies {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media screen and (max-width: 600px) {
  .technologies {
    grid-template-columns: repeat(3, 1fr);
  }

  .technologies-icons h2{
    font-size: 18px;
  }

}

@media screen and (max-width: 400px) {
  .technologies {
    grid-template-columns: repeat(2, 1fr);
  }
}

</style>