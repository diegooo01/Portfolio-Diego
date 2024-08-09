<script>
import HomeContent from "../../home/home-content.component.vue";
import JobExperienceContent from "../../job-experience/job-experience-content.component.vue";

export default {
  name: "toolbar-content",
  components: { JobExperienceContent, HomeContent },
  data() {
    return {
      scrolled: false,
      menuOpen: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<template>
  <div>
    <pv-toolbar :class="['toolbar-content', { 'scrolled-toolbar': scrolled }]">
      <template #start>
        <a href="#home">
          <h1 class="title">
            <span>C</span><span>r</span><span>i</span><span>o</span><span>l</span><span>l</span><span>o</span>
            <span class="green-marker">.</span><span>d</span><span>e</span><span>v</span>
          </h1>
        </a>
      </template>
      <template #center></template>
      <template #end>
        <div v-if="!menuOpen" class="nav-links">
          <a href="#job-experience" class="link-to">Experiencia laboral</a>
          <a href="#skills" class="link-to">Skills</a>
          <a href="#projects" class="link-to">Proyectos</a>
          <a href="#certifications" class="link-to">Certificaciones</a>
        </div>
        <div class="burger" @click="toggleMenu">
          <div :class="['line', { 'active': menuOpen }]"></div>
          <div :class="['line', { 'active': menuOpen }]"></div>
          <div :class="['line', { 'active': menuOpen }]"></div>
        </div>
      </template>
    </pv-toolbar>
    <div v-if="menuOpen" class="dropdown-menu">
      <a href="#job-experience" class="dropdown-link" @click="toggleMenu">Experiencia laboral</a>
      <a href="#skills" class="dropdown-link" @click="toggleMenu">Skills</a>
      <a href="#projects" class="dropdown-link" @click="toggleMenu">Proyectos</a>
      <a href="#certifications" class="dropdown-link" @click="toggleMenu">Certificaciones</a>
    </div>
  </div>
</template>

<style scoped>

.title {
  display: inline-block;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  overflow: hidden;
}

.title span {
  display: inline-block;
  transition: transform 0.3s ease-in-out;
}

.title:hover span:nth-child(1) {
  animation: piano 0.6s ease-in-out;
}

.title:hover span:nth-child(2) {
  animation: piano 0.6s ease-in-out 0.05s;
}

.title:hover span:nth-child(3) {
  animation: piano 0.6s ease-in-out 0.1s;
}

.title:hover span:nth-child(4) {
  animation: piano 0.6s ease-in-out 0.15s;
}

.title:hover span:nth-child(5) {
  animation: piano 0.6s ease-in-out 0.2s;
}

.title:hover span:nth-child(6) {
  animation: piano 0.6s ease-in-out 0.25s;
}

.title:hover span:nth-child(7) {
  animation: piano 0.6s ease-in-out 0.3s;
}

.title:hover span:nth-child(8) {
  animation: piano 0.6s ease-in-out 0.35s;
}

.title:hover span:nth-child(9) {
  animation: piano 0.6s ease-in-out 0.4s;
}

.title:hover span:nth-child(10) {
  animation: piano 0.6s ease-in-out 0.45s;
}

.title:hover span:nth-child(11) {
  animation: piano 0.6s ease-in-out 0.5s;
}

@keyframes piano {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

.toolbar-content {
  background-color: #2e424b;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color 0.3s, box-shadow 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  color: #fff;
}

.green-marker {
  color: #2db99a;
}

a{
  text-decoration: none;
}

.link-to {
  color: #fff;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  transition: all 0.3s;
}

.link-to:hover {
  color: #2db99a;
}

.scrolled-toolbar {
  background-color: rgba(27, 41, 48, 0.8);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
}

.burger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  cursor: pointer;
}

.line {
  width: 100%;
  height: 2px;
  background-color: #fff;
  transition: transform 0.3s, opacity 0.3s;
}

.line.active:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.line.active:nth-child(2) {
  opacity: 0;
}

.line.active:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.dropdown-menu {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 75px;
  right: 0;
  left: 0;
  background-color: rgba(27, 41, 48, 0.95);
  z-index: 999;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
}

.dropdown-link {
  color: #fff;
  text-decoration: none;
  margin: 0.5rem 0;
  font-size: 1.2rem;
  font-weight: 500;
  transition: color 0.3s;
}

.dropdown-link:hover {
  color: #2db99a;
}

@media (max-width: 1050px) {
  .nav-links {
    display: none;
  }

  .burger {
    display: flex;
  }

  .nav-links.open {
    display: flex;
    flex-direction: column;
  }
}
</style>
