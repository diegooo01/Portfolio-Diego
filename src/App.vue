<script>
import {defineComponent} from "vue";
import ToolbarContent from "./public/components/toolbar-content.component.vue";
import FooterContent from "./public/components/footer-content.component.vue";
import HomeContent from "./home/home-content.component.vue";
import JobExperienceContent from "./job-experience/job-experience-content.component.vue";
import SkillsContent from "./skills/skills-content.component.vue";
import ProjectContent from "./projects/project-content.component.vue";
import CertificationsContent from "./certifications/certifications-content.component.vue";

export default defineComponent({
  components: {
    CertificationsContent,
    ProjectContent,
    SkillsContent,
    JobExperienceContent,
    HomeContent,
    FooterContent,
    ToolbarContent
  },
})
</script>

<template>
  <div id="app">
    <toolbar-content></toolbar-content>
    <div id="home">
      <HomeContent />
    </div>
    <div id="job-experience" class="section">
      <JobExperienceContent />
    </div>
    <div id="skills" class="section">
      <SkillsContent />
    </div>
    <div id="projects" class="section">
      <ProjectContent />
    </div>
    <div id="certifications" class="section">
      <CertificationsContent></CertificationsContent>
    </div>
    <footer-content></footer-content>
  </div>

</template>

<style scoped>

.section {
  scroll-margin-top: 50px;
}


</style>
