<script>

import TechnologiesContent from "./components/technologies-content.component.vue";

export default {
  name: 'skills-content',
  components: {
    TechnologiesContent},
}
</script>

<template>

  <div class="skills-content">
    <div class="skills-title">
      <img src="/public/subtitle-icons/technologies-icon.png" alt="Job icon" width="50">
      <h1><span class="green-marker">/</span>Skills<span class="green-marker">.</span></h1>
    </div>
    <div class="technologies-content">
      <technologies-content></technologies-content>
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

.skills-content{
  background-color: #2e424b;
  padding: 4rem 4rem 0 4rem;
}

.skills-title{
  display: flex;
  gap: 1rem;
  align-items: center;
}

.technologies-content{
  padding: 4rem 5rem 1rem 5rem;
}

@media screen and (max-width: 930px){
  .technologies-content{
    padding: 4rem 1rem;
  }
}

@media screen and (max-width: 600px){
  .skills-content{
    padding: 3rem 1rem 0 1rem;
  }

  h1{
    font-size: 35px;
  }
}

</style>