<script>
export default {
  name: "timeline-job",
  props: {
    jobTitle: String,
    company: String,
    description: String,
  }
}
</script>

<template>
  <div class="timeline-content">
    <div class="line-container">
      <div class="line"></div>
      <div class="circle"></div>
    </div>
    <div class="job-text">
      <div class="job-title">
        <h1>{{ jobTitle }}</h1>
        <h1><slot name="job-dates"></slot></h1> <!-- Usar slot aquí -->
      </div>
      <div class="job-paragraph">
        <h1>{{ company }}</h1>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

.line-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.line {
  width: 7px;
  height: 100%;
  background-color: #fff;
}

.circle {
  width: 18px;
  height: 18px;
  background-color: #2E424B;
  border: 5px solid #2DB99A;
  border-radius: 50%;
  position: absolute;
  top: 25%;
  transform: translateY(-50%);
}

.timeline-content{
  display: flex;
  gap: 2.5rem;
  color: #fff;
}

.job-title {
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  font-size: 14px;
}

.job-paragraph h1, p{
  font-family: "PT Sans Caption", sans-serif;
  text-align: justify;
}

.job-paragraph h1{
  color: #2DB99A;
  padding-bottom: 1rem;
}

.job-paragraph p{
  padding-bottom: 3rem;
  font-weight: bold;
  font-size: 17px;
}

@media screen and (max-width: 850px){
  .job-title{
    display: grid;
    font-size: 12px;
  }

  .job-paragraph{
    font-size: 12px;
  }

}
</style>