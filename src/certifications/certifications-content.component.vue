<script>

import ProjectList from "../projects/components/project-list.component.vue";
import CertificationsListContent from "./components/certifications-list.component.vue";

export default {
  name: 'certifications-content',
  components: {
    CertificationsListContent,
    ProjectList
  },
}
</script>

<template>
  <div class="certifications-content">
    <div class="certifications-title">
      <img src="/public/subtitle-icons/project-icon.png" alt="Job icon" width="50">
      <h1><span class="green-marker">/</span>Certificaciones<span class="green-marker">.</span></h1>
    </div>
    <div class="certificactions-list-content">
      <certifications-list-content></certifications-list-content>
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

.certifications-content{
  background-color: #2e424b;
  padding: 4rem 4rem 2rem 4rem;
}

.certifications-title{
  display: flex;
  gap: 1rem;
  align-items: center;
}

.certificactions-list-content{
  padding: 4rem 3rem;
}

@media screen and (max-width: 930px){
  .certificactions-list-content{
    padding: 4rem 1rem;
  }
}

@media screen and (max-width: 600px){
  .certifications-content{
    padding: 3rem 1rem 0 1rem;
  }

  h1{
    font-size: 35px;
  }
}


</style>