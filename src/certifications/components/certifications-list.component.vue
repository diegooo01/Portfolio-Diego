<script>

export default {
  name: 'certifications-list-content',
}
</script>

<template>

  <div class="certification-list">
    <div class="group-certification">
      <img src="/public/certifications-logos/u-macquire.png" alt="Macquire University Logo">
      <div class="certification-text">
        <h1>Excel Skills: Advanced</h1>
        <p>Otorgado por: Macquire University</p>
        <p>Emisión: 17 de Agosto de 2024</p>
        <a href="https://coursera.org/share/29f7fcdeaea0950e9ff26f2b1a8c7e44" target="_blank">Certificado</a>
      </div>
    </div>
    <div class="group-certification">
      <img src="/public/certifications-logos/u-rutgers.png" alt="Rutgers University Logo">
      <div class="certification-text">
        <h1>Supply Chain Analytics</h1>
        <p>Otorgado por: Rutgers University</p>
        <p>Emisión: 16 de Agosto de 2024</p>
        <a href="https://coursera.org/share/5697a55a008ca5633aede1243a23ed04" target="_blank">Certificado</a>
      </div>
    </div>
    <div class="group-certification">
      <img src="/public/certifications-logos/mongodb-certification.png" alt="MongoDB Logo">
      <div class="certification-text">
        <h1>MongoDB Indexes</h1>
        <p>Otorgado por: MongoDB</p>
        <p>Emisión: 10 de Octube de 2023</p>
        <a href="https://learn.mongodb.com/c/u2vXfPknRgKfx_XJE3ehBw" target="_blank">Certificado</a>
      </div>
    </div>
    <div class="group-certification">
      <img src="/public/certifications-logos/mongodb-certification.png" alt="MongoDB Logo">
      <div class="certification-text">
        <h1>Introduction to MongoDB</h1>
        <p>Otorgado por: MongoDB</p>
        <p>Emisión: 10 de Octube de 2023</p>
        <a href="https://learn.mongodb.com/c/u2vXfPknRgKfx_XJE3ehBw" target="_blank">Certificado</a>
      </div>
    </div>
    <div class="group-certification">
      <img src="/public/certifications-logos/u-michigan-certification.png" alt="University of Michigan Logo">
      <div class="certification-text">
        <h1>Python Data Structures</h1>
        <p>Otorgado por: Universidad de Michigan</p>
        <p>Emisión: 4 de Septiembre de 2023</p>
        <a href="https://www.coursera.org/account/accomplishments/verify/ZLW7ELJD8JE4" target="_blank">Certificado</a>
      </div>
    </div>
    <div class="group-certification">
      <img src="/public/certifications-logos/u-michigan-certification.png" alt="University of Michigan Logo">
      <div class="certification-text">
        <h1>Programming For Everybody</h1>
        <p>Otorgado por: Universidad de Michigan</p>
        <p>Emisión: 22 de agosto de 2023</p>
        <a href="https://www.coursera.org/account/accomplishments/verify/CX84G8Q92G2F" target="_blank">Certificado</a>
      </div>
    </div>
    <div class="group-certification">
      <img src="/public/certifications-logos/scrum-certification.png" alt="Scrum Study Logo">
      <div class="certification-text">
        <h1>Scrum Fundamentals</h1>
        <p>Otorgado por: ScrumStudy</p>
        <p>Emisión: 10 de Junio de 2023</p>
        <a href="https://www.scrumstudy.com/certification/verify?type=SFC&number=983615" target="_blank">Certificado</a>
      </div>
    </div>
    <div class="group-certification">
      <img src="/public/certifications-logos/icpna-certification.png" alt="ICPNA Logo">
      <div class="certification-text">
        <h1>Inglés Avanzado</h1>
        <p>Otorgado por: ICPNA</p>
        <p>Emisión: 20 de Diciembre de 2021</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

.certification-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.group-certification {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  background-color: #38525C;
  padding: 1rem;
  border-radius: 10px;
}

.group-certification img {
  width: 130px;
  border-radius: 10px;
}

.certification-text h1,
p,
a {
  font-family: "PT Sans Caption", sans-serif;
}

.certification-text h1 {
  color: #2DB99A;
  font-size: 19px;
  font-weight: bold;
  padding-bottom: 0.5rem;
}

.certification-text p {
  color: #fff;
  padding-bottom: 0.5rem;
}

.certification-text a {
  color: #000;
  text-decoration: none;
  background-color: #fff;
  padding: 0.25rem;
  border-radius: 10px;
  transition: 0.3s;
}

.certification-text a:hover {
  color: #2DB99A;
}

@media (max-width: 768px) {
  .certification-list {
    grid-template-columns: 1fr;
  }

  .certification-text p, a {
    font-size: 13px;
  }
}


</style>