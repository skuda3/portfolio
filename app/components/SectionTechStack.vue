<script setup>
import BaseBadge from './BaseBadge.vue'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section class="space-y-6">
    <SectionHeading>Tech Stack</SectionHeading>

    <div class="space-y-4">
      <div>
        <h3 class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Jazyky & Core</h3>
        <div class="flex flex-wrap gap-2">
          <BaseBadge>Java</BaseBadge>
          <BaseBadge>Kotlin</BaseBadge>
          <BaseBadge>Swift</BaseBadge>
          <BaseBadge>Python</BaseBadge>
          <BaseBadge>C++</BaseBadge>
          <BaseBadge>JavaScript / TypeScript</BaseBadge>
          <BaseBadge>Matlab</BaseBadge>
        </div>
      </div>

      <div>
        <h3 class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Web Frameworky & UI</h3>
        <div class="flex flex-wrap gap-2">
          <BaseBadge>Vue.js</BaseBadge>
          <BaseBadge>Nuxt.js</BaseBadge>
          <BaseBadge>Vuetify</BaseBadge>
          <BaseBadge>Tailwind CSS</BaseBadge>
          <BaseBadge>Spring Boot</BaseBadge>
        </div>
      </div>

      <div>
        <h3 class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Autentizace, Cloud & DevOps</h3>
        <div class="flex flex-wrap gap-2">
          <BaseBadge variant="amber">KeyCloak</BaseBadge>
          <BaseBadge variant="amber">Firebase</BaseBadge>
          <BaseBadge variant="amber">JWT Standard</BaseBadge>
          <BaseBadge>Docker</BaseBadge>
          <BaseBadge>GitHub Gists</BaseBadge>
        </div>
      </div>

      <div>
        <h3 class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Testování & Nástroje</h3>
        <div class="flex flex-wrap gap-2">
          <BaseBadge variant="blue">Cypress (E2E)</BaseBadge>
          <BaseBadge variant="blue">Integration Testing</BaseBadge>
          <BaseBadge variant="blue">Unit Testing</BaseBadge>
          <BaseBadge>Git / GitHub / GitLab</BaseBadge>
          <BaseBadge>SourceTree</BaseBadge>
        </div>
      </div>
    </div>
  </section>
</template>