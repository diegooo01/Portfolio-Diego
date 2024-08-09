<script>
import TimelineJob from "./components/timeline-job.component.vue";

export default {
  name:"job-experience-content",
  components: {
    TimelineJob
  },
}
</script>

<template>
  <div class="job-content">
    <div class="job-title">
      <img src="/public/subtitle-icons/jobs-icon.png" alt="Job icon" width="50">
      <h1><span class="green-marker">/</span>Experiencia Laboral<span class="green-marker">.</span></h1>
    </div>
    <div class="timeline-experience">
      <timeline-job
          job-title="Agente Bilingüe"
          company="TELEPERFORMANCE"
          description="Atención al cliente mediante llamadas telefónicas y chat. Además de venta de servicios al cliente según las necesidades de los clientes. Por último, retención de clientes mediante la mejoría de su experiencia con los servicios de la compañía."
      >
        <template v-slot:job-dates>
          Enero <span class='green-marker'>2024</span> - Marzo <span class='green-marker'>2024</span>
        </template>
      </timeline-job>
      <timeline-job
          job-title="Agente Bilingüe"
          company="TELEPERFORMANCE"
          description="Atención al cliente mediante llamadas telefónicas, chat y correo electrónico. Además de soporte al cliente con software especializado en atender sus inconvenientes."
      >
        <template v-slot:job-dates>
          Diciembre <span class='green-marker'>2022</span> - Marzo <span class='green-marker'>2023</span>
        </template>
      </timeline-job>
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

.job-content{
  background-color: #2e424b;
  padding: 4rem 4rem 0 4rem;
}

.job-title{
  display: flex;
  gap: 1rem;
  align-items: center;
}

.timeline-experience{
  padding: 4rem 5rem;
}

@media screen and (max-width: 930px){
  .timeline-experience{
    padding: 4rem 1rem;
  }
}

@media screen and (max-width: 600px){
  .job-content{
    padding: 3rem 1rem 0 1rem;
  }

  h1{
    font-size: 35px;
  }
}

</style>