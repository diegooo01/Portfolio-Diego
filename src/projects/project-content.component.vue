<script>

import TechnologiesContent from "../skills/components/technologies-content.component.vue";
import ProjectList from "./components/project-list.component.vue";

export default {
  name: 'project-content',
  components: {ProjectList, TechnologiesContent},
}
</script>

<template>
  <div class="project-content">
    <div class="project-title">
      <img src="/public/subtitle-icons/project-icon.png" alt="Job icon" width="50">
      <h1><span class="green-marker">/</span>Proyectos<span class="green-marker">.</span></h1>
    </div>
    <div class="project-list-content">
      <project-list></project-list>
    </div>
  </div>
</template>

<style scoped>

.green-marker{
  color:#2DB99A;
}

h1{
  color: #fff;
  font-size: 48px;
}

.project-content{
  background-color: #2e424b;
  padding: 4rem 4rem 0 4rem;
}

.project-title{
  display: flex;
  gap: 1rem;
  align-items: center;
}

.project-list-content{
  padding: 4rem 5rem 1rem 5rem;
}

@media screen and (max-width: 930px){
  .project-list-content{
    padding: 4rem 1rem;
  }
}

@media screen and (max-width: 600px){
  .project-content{
    padding: 3rem 1rem 0 1rem;
  }

  h1{
    font-size: 35px;
  }
}


</style>